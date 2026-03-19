import { NextResponse } from "next/server";
import { getSupabaseServerClient } from "@/lib/supabaseServer";
import { site } from "@/lib/site";

type ContactPayload = {
  name: string;
  email: string;
  message: string;
};

function isValidPayload(payload: unknown): payload is ContactPayload {
  if (!payload || typeof payload !== "object") return false;
  const p = payload as Record<string, unknown>;

  const name = typeof p.name === "string" ? p.name.trim() : "";
  const email = typeof p.email === "string" ? p.email.trim() : "";
  const message = typeof p.message === "string" ? p.message.trim() : "";

  if (name.length < 2 || name.length > 100) return false;
  if (email.length < 5 || email.length > 254 || !email.includes("@"))
    return false;
  if (message.length < 10 || message.length > 5000) return false;

  return true;
}

export async function POST(req: Request) {
  let body: unknown;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json(
      { error: "Invalid JSON body." },
      { status: 400 },
    );
  }

  if (!isValidPayload(body)) {
    return NextResponse.json({ error: "Invalid payload." }, { status: 400 });
  }

  const payload = body satisfies ContactPayload;

  try {
    const supabase = getSupabaseServerClient();
    const { error } = await supabase.from("contacts").insert([
      {
        name: payload.name.trim(),
        email: payload.email.trim(),
        message: payload.message.trim(),
      },
    ]);

    if (error) {
      return NextResponse.json(
        { error: "Failed to save message." },
        { status: 500 },
      );
    }

    // Send email notification if RESEND_API_KEY is configured
    if (process.env.RESEND_API_KEY) {
      await fetch("https://api.resend.com/emails", {
        method: "POST",
        headers: {
          Authorization: `Bearer ${process.env.RESEND_API_KEY}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          from: "Portfolio Contact <onboarding@resend.dev>",
          to: site.email,
          subject: `New message from ${payload.name.trim()}`,
          text: `Name: ${payload.name.trim()}\nEmail: ${payload.email.trim()}\n\n${payload.message.trim()}`,
        }),
      });
    }

    return NextResponse.json({ ok: true }, { status: 201 });
  } catch {
    return NextResponse.json({ error: "Server not configured." }, { status: 500 });
  }
}

