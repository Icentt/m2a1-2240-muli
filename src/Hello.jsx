// ───────────────────────────────────────────────────────────────────────────
// Hello - your very first React component
// ───────────────────────────────────────────────────────────────────────────
//
// This is a warm-up. The whole point is to get one component on the screen and
// see how the pieces fit, not to learn anything tricky. Run `npm run dev` and
// watch the page update as you edit.
//
// Concept: a component is a function that returns JSX (HTML-looking markup).
// Read: content/m2-react ("What's new in your workflow" + Activity 1), and
//       content/react-theory/03-jsx-and-the-component-model.md
//
// Requirement: return ONE element tree containing
//   - an <h1> with exactly the text:  Hello, React!
//   - a <p> that says:  My name is YOUR NAME
//     (put your name in a `const` and drop it into the JSX with curly braces { })
//
// Two rules you will use here:
//   1. A component returns ONE root element. To return two things (an <h1> and a
//      <p>), wrap them in a <div> or an empty fragment <> ... </>.
//   2. Curly braces { } let you drop a JavaScript value into JSX, e.g. {name}.

export default function Hello() {
  return (
    <>
      <h1>Hello, React!</h1>
      <p>My name is Your Name</p>
    </>
  );
}