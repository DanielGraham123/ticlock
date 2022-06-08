import Header from "./components/header";
import { useState, useEffect } from "react";

console.log("hello" && "daniel" && undefined);

let age = 18;

const quotes = [
  "The greatest glory in living lies not in never falling, but in rising every time we fall - Nelson Mandela",
  "The way to get started is to quit talking and begin doing. - Walt Disney",
  "Life is what happens when you're busy making other plans. -John Lennon",
  "If life were predictable it would cease to be life, and be without flavor. - Eleanor Roosevelt",
  "If you look at what you have in life, you'll always have more. If you look at what you don't have in life, you'll never have enough. -Oprah Winfrey",
];

function App() {
  const [counter, setCounter] = useState(0);
  const [quote, setQuote] = useState(quotes[0]);

  useEffect(() => {
    console.log("I am running: ", counter);
  }, [counter]);

  function increment() {
    console.log("I was clicked");

    setCounter(counter + 1);
  }

  function decrement() {
    console.log("I was clicked");

    setCounter(counter - 1);
  }

  function increment2() {
    setCounter((prevCount) => prevCount + 1);
  }

  function generateQuote() {
    let randomQuote = quotes[Math.floor(Math.random() * quotes.length)];

    setQuote(randomQuote);
  }

  return (
    <div className="App">
      <Header name="Localhost" />

      <main>
        <h2>Main Body {counter}</h2>

        {/* conditional rendering */}
        <div>{age > 20 && <p>You are{age} years old</p>}</div>

        <button onClick={increment2}>Increase Btn</button>
        <button onClick={decrement}>Decrease Btn</button>

        {/* Random Quote Generator */}
        <div>
          <blockquote>{quote}</blockquote>
          <button onClick={generateQuote}>Random Quote</button>
        </div>
      </main>

      <footer>The Footer</footer>
    </div>
  );
}

export default App;
