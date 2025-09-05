# Cypress Testing Tutorial with React

This tutorial will guide you through creating a simple React app, adding a component with some flair, and writing Cypress tests for it.

## 1. Setup: Create a React App

```bash
npx create-react-app cypress-demo
cd cypress-demo
```

## 2. Add a Fancy Component

Create a new file: `src/FancyButton.js`

```jsx
import React, { useState } from "react";
import "./FancyButton.css";

export default function FancyButton() {
  const [clicked, setClicked] = useState(false);

  return (
    <button
      className={clicked ? "fancy clicked" : "fancy"}
      onClick={() => setClicked(true)}
      data-testid="fancy-btn"
    >
      {clicked ? "Clicked!" : "Click Me"}
    </button>
  );
}
```

Create a CSS file: `src/FancyButton.css`

```css
.fancy {
  background: linear-gradient(90deg, #ff8a00, #e52e71);
  color: white;
  border: none;
  padding: 1em 2em;
  font-size: 1.2em;
  border-radius: 8px;
  transition: box-shadow 0.2s;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);
}
.fancy.clicked {
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.25);
  background: linear-gradient(90deg, #43cea2, #185a9d);
}
```

Update `src/App.js` to use the button:

```jsx
import FancyButton from "./FancyButton";

function App() {
  return (
    <div className="App">
      <h1>Test the Fancy Button!</h1>
      <FancyButton />
    </div>
  );
}

export default App;
```

## 3. Install Cypress

```bash
npm install --save-dev cypress
```

Open Cypress for the first time:

```bash
npx cypress open
```

## 4. Add Your First Test

Create a test file: `cypress/e2e/fancy_button.cy.js`

```js
describe("FancyButton", () => {
  it("renders and can be clicked", () => {
    cy.visit("http://localhost:3000");
    cy.get('[data-testid="fancy-btn"]').should("contain", "Click Me");
    cy.get('[data-testid="fancy-btn"]').click();
    cy.get('[data-testid="fancy-btn"]').should("contain", "Clicked!");
    cy.get('[data-testid="fancy-btn"]').should("have.class", "clicked");
  });
});
```

## 5. Run the App and Tests

Start the React app:

```bash
npm start
```

In another terminal, run Cypress:

```bash
npx cypress open
```

Select your test and watch it run!

## 6. Next Steps

- Try adding more interactive components.
- Test edge cases (double clicks, keyboard navigation, etc).
- Explore Cypress commands like `.type()`, `.should()`, `.contains()`, etc.

---
