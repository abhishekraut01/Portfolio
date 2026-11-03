# Abhishek Raut | Portfolio

Personal portfolio of Abhishek Raut, Full Stack AI Engineer. Live at [abhishekraut.tech](https://abhishekraut.tech).

Built with Next.js 15, TypeScript, Tailwind CSS and shadcn/ui. The design is based on the MIT-licensed [Sleek Portfolio](https://github.com/ramxcodes/sleek-portfolio) template by Ramkrishna Swarnkar.

## Run locally

```bash
bun install
bun dev
```

## Where content lives

| What                      | File                                     |
| ------------------------- | ---------------------------------------- |
| Hero, social links        | `src/config/Hero.tsx`                    |
| About and skills          | `src/config/About.tsx`                   |
| Work experience           | `src/config/Experience.tsx`              |
| Project cards             | `src/config/Projects.tsx`                |
| Project case studies      | `src/data/projects/*.mdx`                |
| Blog posts (Medium links) | `src/data/blog/*.mdx`                    |
| Resume PDF                | `public/resume/Abhishek_Raut_Resume.pdf` |
| SEO metadata              | `src/config/Meta.tsx`                    |

## Optional environment variables

| Variable                                        | Enables                                                                |
| ----------------------------------------------- | ---------------------------------------------------------------------- |
| `NEXT_PUBLIC_URL`                               | Canonical site URL (defaults to https://abhishekraut.tech)             |
| `GEMINI_API_KEY`                                | The "ask me anything" chat bubble                                      |
| `TELEGRAM_BOT_TOKEN`, `TELEGRAM_CHAT_ID`        | The contact form (otherwise the contact page shows email and LinkedIn) |
| `NEXT_PUBLIC_UMAMI_SRC`, `NEXT_PUBLIC_UMAMI_ID` | Umami analytics                                                        |
