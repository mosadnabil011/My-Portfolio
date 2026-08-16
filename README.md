# Mosaad Nabil Abokammer — Portfolio

[![CI](https://github.com/mosadnabil011/My-Portfolio/actions/workflows/ci.yml/badge.svg)](https://github.com/mosadnabil011/My-Portfolio/actions/workflows/ci.yml)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](LICENSE)
[![Angular](https://img.shields.io/badge/Angular-17-DD0031?logo=angular&logoColor=white)](https://angular.io)

A single-page Angular portfolio for a software engineer and full-stack developer, built with a premium dark theme, responsive layouts, and a server-side rendering-safe setup.

## Overview

This portfolio showcases:
- software engineering background
- portfolio projects
- technical skills
- internship / professional experience
- contact details and social links

## Tech Stack

- Angular 17 (standalone components, SSR)
- TypeScript
- Bootstrap 5
- Bootstrap Icons
- AOS (scroll animations)
- Typed.js
- EmailJS (contact form)

## Architecture

This is a **single-page application**: `HomeComponent` renders every section
(`about`, `experience`, `skills`, `projects`, `contact`) as an anchored
`<section id="...">`, and the navbar scrolls to those anchors. There is only
one Angular route (`/`) — there's no separate `/about` or `/skills` page,
since these are sections of one page, not standalone pages.

## Project Structure

```bash
src/
├── app/
│   ├── Components/
│   │   ├── about/
│   │   ├── contact/
│   │   ├── footer/
│   │   ├── home/          # composes all sections into the single page
│   │   ├── navbar/
│   │   ├── projects/
│   │   └── skills/
│   ├── experience/
│   ├── app.component.*    # navbar + router-outlet + footer, inits AOS once
│   ├── app.config.*
│   ├── app.routes.ts
│   └── main.*
├── environments/          # EmailJS config (dev/prod)
├── assets/
├── styles.css
├── index.html
├── main.server.ts
├── main.ts
├── server.ts
├── ... Angular config files
└── package.json
```

## Features

- Dark premium developer portfolio design
- Responsive layout for desktop, tablet, and mobile
- Sticky modern navbar with active section highlighting
- Hero section with typed name effect and social links
- About section with professional profile summary
- Skills cards with grouped technology presentation
- Projects section with project cards and external links
- Experience section for internship / professional background
- Contact form (EmailJS) with honeypot spam protection and inline status feedback
- SSR-safe browser-only initialization using Angular `isPlatformBrowser` and `PLATFORM_ID`

## Run Locally

```bash
npm install
npx ng serve -o
```

## Production Build

```bash
npx ng build
```

## Testing & CI

```bash
npm test
```

Every push and pull request to `main` runs a GitHub Actions workflow
(`.github/workflows/ci.yml`) that installs dependencies, builds the app, and
runs the unit test suite headlessly.

## Notes

- Browser-only code such as `document`, `window`, AOS, and Typed.js is guarded so SSR does not fail.
- EmailJS credentials live in `src/environments/` rather than hardcoded in components. Note that EmailJS public keys are inherently visible in any client-side bundle by design — restrict allowed domains and enable reCAPTCHA in your EmailJS dashboard for extra protection against abuse.
- The project is kept compatible with the current Angular version and dependencies.

## License

This project is licensed under the [MIT License](LICENSE).

## Contact

- Email: mosadnabil011@gmail.com
- GitHub: https://github.com/mosadnabil011
- LinkedIn: https://www.linkedin.com/in/mosaadabokammer/

## Author

Mosaad Nabil Abokammer
