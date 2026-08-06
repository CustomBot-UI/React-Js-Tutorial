# React-Js-Tutorial

This repository contains two React-related projects:

- `01vitereact` — a Vite-powered React application built with modern React and Vite tooling.
- `CustomReact` — a small custom React-like demo showing how React concepts can be implemented by hand.

## Projects

### 01vitereact
A standard Vite React project using:

- `react` and `react-dom`
- `vite`
- `eslint`
- `@vitejs/plugin-react`

#### Run locally

```bash
cd 01vitereact
npm install
npm run dev
```

Then open the local Vite URL shown in the terminal.

#### Other commands

```bash
npm run build
npm run preview
npm run lint
```

### CustomReact

A lightweight demo in `CustomReact/` with:

- `customReact.js` — a custom implementation of React-inspired rendering behavior
- `index.html` — a simple demo page to load the custom renderer

#### Run locally

Open `CustomReact/index.html` directly in your browser, or serve the folder with a static server such as:

```bash
cd CustomReact
python3 -m http.server 8000
```

Then visit `http://localhost:8000`.

## Repository structure

- `01vitereact/` — Vite React starter app
- `CustomReact/` — custom React-like demo implementation

## Notes

The primary app is located in `01vitereact/`. The custom demo is experimental and intended for learning purposes.