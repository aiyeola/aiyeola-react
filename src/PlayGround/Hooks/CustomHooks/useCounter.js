import { useState } from 'react';

function useCounter(initialValue = 0, value) {
  const [count, setCount] = useState(initialValue);
  const increment = () => {
    setCount((prevCount) => prevCount + value);
  };

  const decrement = () => {
    setCount((prevCount) => prevCount - value);
  };

  const reset = () => {
    setCount(initialValue);
  };

  return [count, increment, decrement, reset];
}

export default useCounter;
