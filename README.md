So basically from reader ReduxJS toolkit a methodically one two three lithium simply date slide# React-Js-Tutorial

This repository contains a collection of React learning projects and demos.
Most are built with Vite, plus one Create React App starter and one custom React-like renderer.

## Projects

- `01basicreact` — Create React App starter project.
- `01vitereact` — Vite React application using modern React tooling.
- `02counter` — Vite React counter example demonstrating state updates.
- `03tailwindprops` — Vite React demo using Tailwind CSS props.
- `04bgChanger` — Vite React background color changer.
- `05passwordGenerator` — Vite React password generator.
- `06currencyConvertor` — Vite React currency conversion example.
- `07reactRouter` — Vite React routing demo.
- `08miniContext` — Vite React context API example.
- `09themeswitcher` — Vite React theme switching demo.
- `10todocontextLocal` — Vite React todo app with context and local storage.
- `CustomReact` — custom React-like renderer implementation and demo page.

## Run a Vite project

For most projects, use:

```bash
cd <project-folder>
npm install
npm run dev
```

Then open the local URL shown by Vite.

Common commands inside a Vite project:

```bash
npm run build
npm run preview
npm run lint
```

## Run `01basicreact`

This folder uses Create React App scripts:

```bash
cd 01basicreact
npm install
npm start
```

## Run `CustomReact`

Open `CustomReact/index.html` in your browser or serve the folder with a simple static server:

```bash
cd CustomReact
python3 -m http.server 8000
```

Then visit `http://localhost:8000`.

## Notes

- Each example is self-contained inside its own directory.
- Install dependencies per project before running it.
- The `CustomReact` demo is an experimental implementation meant for learning React internals.
