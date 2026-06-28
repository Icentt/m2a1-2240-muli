# Module 2 - Activity 1 - Hello React

> **Your first React activity, and the gentlest one.** You write one small
> component and see it appear in the browser. The goal is to get comfortable with
> the tools, not to learn anything hard. You are **done when `npm test` is all
> green**.

Welcome to React. In Module 1 you wrote JavaScript functions; a React component
is just a function that returns some markup (called **JSX**). In this warm-up you
build one component, run the app, and watch it render. That is it.

> **New to the React workflow?** Read the short "What's new in your workflow"
> note in `content/m2-react/README.md` first. It explains `npm run dev`, the dev
> server, and how the tests work now.

## What to do

### 1. Fill in your details

Open [`student.json`](student.json) and fill in **every** field. Keep this file
identical across all your activities; the `classCode` must match your repo name.

### 2. Build the component

Open [`src/Hello.jsx`](src/Hello.jsx). Replace the `// TODO` (and the
`return null`) so it renders:

- an `<h1>` with the text **Hello, React!**
- a `<p>` that says **My name is YOUR NAME** (put your name in a `const` and drop
  it in with curly braces `{ }`)

The file has the two rules you need (one root element; `{ }` runs JavaScript).
When stuck, read `content/react-theory/03-jsx-and-the-component-model.md`.

## Set up your repo

1. **Use this template -> Create a new repository**, owner **`HAU-6APSI`**.
2. Name it `m2a1-<classcode>-yourname`, **Private**.
3. Clone your copy and `npm install` (the first install takes a minute).

```bash
git clone https://github.com/HAU-6APSI/m2a1-<classcode>-yourname.git
cd m2a1-<classcode>-yourname
npm install
```

## Running the app and the tests

```bash
npm run dev          # open the printed http://localhost:5173 and see your component
npm test             # run the tests (green = points)
npm run test:watch   # re-run on every save while you work
```

> **Write your code in `src/` only.** The files in `test/` are how your work is
> graded; leave them as they are.

## Submit

Pushing **is** submitting:

```bash
git add -A
git commit -m "✨ Activity 1 - Hello React"
git push
```

Then open the **Actions** tab and confirm the green check and the
"N / N tests passed" summary. The run also publishes a screenshot of your app.
