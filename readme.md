# olatunji.vercel.app — Personal Portfolio

Personal portfolio for **Olatunji Oluwadare (DevTunechi)** — Software Engineer & Cinematographer. Built with Next.js, deployed on Vercel.

Live: [devtunechi.vercel.app](https://olatunji.vercel.app)

---

## Pages

### `/` — Engineering
Software engineering profile. Features an intentional hero statement, four expandable case studies with phone mockups, a work experience accordion, and a contact popover.

### `/video` — Cinematography
Film and production profile. Features a cinematic hero with profile card, 12 YouTube productions with category filtering and inline playback, 6 Instagram event reels (Klala Films collaboration), and a stats bar.

### `/resume`
Combined resume covering both software engineering and film/production roles, skills, and certifications.

---

## Stack

- **Framework** — Next.js 14 (App Router)
- **Language** — TypeScript
- **Styling** — Tailwind CSS
- **Animations** — Framer Motion (`motion`, `AnimatePresence`)
- **Deployment** — Vercel

---

## Features

- **Dark mode** — toggles via `localStorage`, persists across sessions, applied via `document.documentElement.classList`
- **Contact popover** — WhatsApp + Email icons, triggered from both the header "Let's talk" button and the footer "Get in touch" button on every page; dismisses on outside click via `useRef` + `mousedown` listener
- **Expandable case studies** — animated panels (Framer Motion `AnimatePresence`) with problem statement, tech stack table, what was built, and lessons learned
- **Expandable experience accordion** — same pattern for work history
- **YouTube productions** — thumbnail grid with `hqdefault` → `mqdefault` fallback on error; click to play inline iframe
- **Instagram embeds** — rendered via `dangerouslySetInnerHTML` blockquotes; `instgrm.Embeds.process()` called once in `useEffect`
- **Cross-page navigation** — Engineering page footer links to `/video` ("🎬 Also a Cinematographer"); Video page footer links to `/` ("⌨ Also an Engineer")

---

## Project Structure

```
app/
├── page.tsx              # Engineering homepage (/)
├── video/
│   └── page.tsx          # Cinematography page (/video)
└── resume/
    └── page.tsx          # Resume page (/resume)

public/
├── logo-10.png           # Site logo (transparent background)
├── 5.JPG                 # Engineering page profile photo
├── video.jpg             # Video page profile photo (background blurred)
├── eventflow-1.jpeg      # EventFlowNG screenshots
├── eventflow-2.jpeg
├── lux1.jpeg             # LuxPropyl screenshots
├── lux2.jpeg
├── 1.jpeg                # WealthRun screenshots
├── 2.jpeg
├── 3.jpeg                # SwaysBankUS screenshots
└── 4.jpeg
```

---

## Case Studies

| Project | Stack | Live |
|---|---|---|
| **EventFlowNG** | Next.js, TypeScript, PostgreSQL, Prisma, Node.js | [eventflowng.vercel.app](https://eventflowng.vercel.app) |
| **LuxPropyl** | Next.js, PostgreSQL, Prisma, Node.js | [luxproptyl.vercel.app](https://luxproptyl.vercel.app) |
| **WealthRun** | Next.js, React, Node.js, PostgreSQL | [wealthrun.vercel.app](https://wealthrun.vercel.app) |
| **SwaysBankUS** | Node.js, Express, PostgreSQL | [swaysbankonline.vercel.app](https://swaysbankonline.vercel.app) |

---

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

---

## Deployment

Deployed via Vercel (GitHub integration). Push to `main` triggers automatic deployment.

If push fails with HTTP 400 on large commits:

```bash
git config http.postBuffer 524288000
git push origin main

# If still failing:
git config http.version HTTP/1.1
git push origin main
```

---

## Contact

| | |
|---|---|
| Email | tunjidare2@yahoo.com |
| WhatsApp | +234 810 746 7220 |
| LinkedIn | [linkedin.com/in/olatunji-oluwadare](https://linkedin.com/in/olatunji-oluwadare) |
| GitHub | [github.com/DevTunechi](https://github.com/DevTunechi) |
| Instagram (film) | [@kingtunechiz](https://www.instagram.com/kingtunechiz) |
| Location | Lagos, Nigeria |
