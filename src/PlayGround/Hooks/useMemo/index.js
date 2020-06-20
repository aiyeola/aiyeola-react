import React, { useState, useMemo } from 'react';

function Counter() {
  const [counterOne, setCounterOne] = useState(0);
  const [counterTwo, setCounterTwo] = useState(0);

  const incrementOne = () => {
    setCounterOne(counterOne + 1);
  };

  const incrementTwo = () => {
    setCounterTwo(counterTwo + 1);
  };

  // useCallback caches the provided function instance itself while
  // useMemo invokes the provided function and caches it's result
  // You want to cache a function - useCallback
  // You want to cache the result of a function - useMemo

  const isEven = useMemo(() => {
    let i = 0;
    while (i < 2000) i++;
    return counterOne % 2 === 0;
  }, [counterOne]);

  return (
    <div>
      <div>
        <button onClick={incrementOne}>Count One - {counterOne}</button>
        <span>{isEven ? ' Even' : ' Odd'}</span>
      </div>
      <div>
        <button onClick={incrementTwo}>Count Two - {counterTwo}</button>
      </div>
    </div>
  );
}

export default Counter;
