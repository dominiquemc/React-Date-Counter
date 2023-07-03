import "./styles.css";
import { useState } from "react";

export default function App() {
  return (
    <div className="App">
      <Header />
      <Counter />
    </div>
  );
}

function Header() {
  return <header>Date Counter</header>;
}

function Counter() {
  const [count, setCount] = useState(0);
  const [step, setSteps] = useState(1);

  const date = new Date();
  date.setDate(date.getDate() + count);

  function minusStepOnClick() {
    setSteps((s) => s - 1);
  }

  function plusStepOnClick() {
    setSteps((s) => s + 1);
  }

  function minusCountOnClick() {
    setCount((s) => s - step);
  }

  function plusCountOnClick() {
    setCount((s) => s + step);
  }

  return (
    <div className="stepData">
      <div>
        <button onClick={minusStepOnClick}>&minus;</button>
        <span className="clickText">Step: {step}</span>
        <button onClick={plusStepOnClick}>&#43;</button>

        <div>
          <button onClick={minusCountOnClick}>&minus;</button>
          <span className="clickText">Count: {count}</span>
          <button onClick={plusCountOnClick}>&#43;</button>
          <p>
            <span>
              {count === 0
                ? "Today is "
                : count > 0
                ? `${count} days from today is `
                : `${Math.abs(count)} days ago was `}
            </span>
            <span className="fullDate">{date.toDateString()}</span>
          </p>
        </div>
      </div>
    </div>
  );
}

// COUNT
// initial state - today's date.
// text: "Today is _________"
// when we click on "count" + icon it increases by 1
// when we click on "count" - icon it decreases by 1
// the text will then state "1 day from today is ______ (example)"

// STEP
// if we increase the step from 1, the count show increase to the same step number
// example: step 5 should show as count 5 (increased by 5)
// current day would also skip 5 days later
