# Akhil Reddy — Portfolio

A modern, fully responsive personal portfolio built with React, Vite, React Router,
CSS Modules, and Framer Motion.

## Getting started

```bash
npm install
npm run dev      # starts the dev server (usually http://localhost:5173)
npm run build    # production build → dist/
npm run preview  # preview the production build locally
```

## Editing content

Almost everything you'll want to change lives in one place:

```
src/data/portfolioData.js
```

This includes your name, bio, skills, projects, education, and contact details.
Components read from this file, so you rarely need to touch component code just
to update text.

## Adding your real assets

- **Profile photo**: drop an image at `public/profile.jpg`, then swap the
  placeholder `<div>` in `src/components/Hero/Hero.jsx` for an `<img>` tag
  (the spot is marked with a comment).
- **Resume PDF**: add your resume at `public/resume.pdf`. The "Download Resume"
  button in the Hero section already points at `/resume.pdf`.
- **Project screenshots**: drop images in `public/projects/` and set the
  `image` field for each project in `portfolioData.js`.
- **Live GitHub stats**: the GitHub Stats section currently shows placeholder
  numbers. See the comment in `src/components/GithubStats/GithubStats.jsx` for
  two ways to wire it up to real data.
- **Contact form**: the form validates input client-side but doesn't send
  anywhere yet — see the `TODO` comment in `src/components/Contact/Contact.jsx`
  to connect it to a backend or a service like Formspree/EmailJS.

## Project structure

```
src/
├── components/        # One folder per component: ComponentName.jsx + .module.css
├── pages/              # Route-level components (Home, ProjectDetail, NotFound)
├── data/portfolioData.js  # All editable content
├── hooks/              # useScrollSpy, useScrollPast
├── utils/              # scrollTo helper
├── App.jsx             # Routing table + loading sequence
├── main.jsx            # App entry point (Router + Helmet providers)
└── index.css           # Design tokens (colors, type, spacing) + resets
```

## Design tokens

All colors, fonts, and spacing are defined as CSS custom properties in
`src/index.css`, so you can re-theme the whole site by editing one file.
