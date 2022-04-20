import './App.css';
import React from 'react';

function App() {

  const [count, setCount] = React.useState(0);

  const increment = () => {
    setCount(prev => prev + 1);
  }

  const decrement = () => {
    setCount(prev => prev - 1);
  }

  return (
    <section className="App">
      <h1>Count: {count}</h1>
      <button onClick={decrement}>-</button>
      <button onClick={increment}>+</button>
    </section>
  );
}

export default App;
