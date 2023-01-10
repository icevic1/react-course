import React, {useState} from 'react';

const Counter = () => {
  const [count, setCounter] = useState(0)

  function increment() {
    setCounter(count + 1)
  }

  function decrement() {
    setCounter(count - 1)
  }

  return (
    <div className="Counter">
      <h1>{count}</h1>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
    </div>
  );
}

export default Counter;
