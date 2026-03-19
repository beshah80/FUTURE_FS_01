# Beshah Ashenafi — Personal Portfolio

A clean, fast, and fully responsive personal portfolio website built with Next.js 15, TypeScript, and Tailwind CSS. Features a Supabase-backed contact form, dark mode, and a custom design system.

**Live site:** _coming soon_
**Built for:** Future Interns — Full Stack Web Development Task 1

---

## Features

- Responsive design — works on mobile, tablet, and desktop
- Dark / light mode via `prefers-color-scheme`
- Projects showcase with live and repo links
- Work / experience timeline
- Contact form with Supabase storage and optional email notifications via Resend
- SEO-friendly metadata and Open Graph tags
- Sticky header with mobile hamburger menu
- Footer with social links

## Pages

| Route | Description |
|-------|-------------|
| `/` | Homepage — intro, avatar, about, skills, featured projects |
| `/projects` | All projects with tech stack, repo, and live links |
| `/work` | Work experience and internships |
| `/contact` | Contact form backed by Supabase |

## Tech Stack

- **Framework:** Next.js 15 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS v4
- **Database:** Supabase (PostgreSQL)
- **Email:** Resend (optional)
- **Deployment:** Vercel
- **Font:** Geist (via `next/font`)

## Getting Started

### 1. Clone the repo

```bash
git clone https://github.com/beshah80/FUTURE_FS_01
cd FUTURE_FS_01
```

### 2. Install dependencies

```bash
npm install
```

### 3. Set up environment variables

Copy the example file and fill in your values:

```bash
cp .env.local.example .env.local
```

```env
SUPABASE_URL=your_supabase_project_url
SUPABASE_SERVICE_ROLE_KEY=your_supabase_service_role_key
NEXT_PUBLIC_SITE_URL=https://your-domain.com

# Optional — enables email notifications on contact form submit
RESEND_API_KEY=re_your_api_key
```

### 4. Set up the Supabase database

Go to your Supabase project → SQL Editor and run:

```sql
create table contacts (
  id uuid primary key default gen_random_uuid(),
  name text not null,
  email text not null,
  message text not null,
  created_at timestamptz default now()
);

alter table contacts enable row level security;

create policy "service role only"
  on contacts
  for all
  using (false)
  with check (false);
```

### 5. Run the development server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Deployment

This project is deployed on [Vercel](https://vercel.com).

1. Push your code to GitHub
2. Import the repo on Vercel
3. Add the environment variables in Vercel project settings
4. Deploy

## Project Structure

```
src/
├── app/
│   ├── api/contact/     # Contact form API route
│   ├── contact/         # Contact page
│   ├── projects/        # Projects page
│   ├── work/            # Work experience page
│   ├── globals.css      # Global styles + CSS variables
│   ├── layout.tsx       # Root layout + metadata
│   └── page.tsx         # Homepage
├── components/
│   ├── Badge.tsx        # Skill / tech tag badge
│   ├── ContactForm.tsx  # Contact form with validation
│   ├── Container.tsx    # Max-width wrapper
│   ├── Footer.tsx       # Site footer
│   ├── Header.tsx       # Sticky nav header
│   ├── PageShell.tsx    # Layout wrapper
│   └── ProjectCard.tsx  # Project card component
└── lib/
    ├── site.ts          # All site content (single source of truth)
    └── supabaseServer.ts # Supabase server client
```

## Customization

All site content lives in `src/lib/site.ts` — name, role, tagline, projects, experience, skills, socials. Edit that file to update the entire site.

## License

MIT
