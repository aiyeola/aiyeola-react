import React, { useState, useCallback } from 'react';
import Title from './Title';
import Count from './Count';
import Button from './Button';

function CallBack() {
  const [age, setAge] = useState(25);
  const [salary, setSalary] = useState(50000);

  const incrementAge = useCallback(() => {
    setAge(age + 5);
  }, [age]);

  const incrementSalary = useCallback(() => {
    setSalary(salary + 1000);
  }, [salary]);

  return (
    <>
      <Title />
      <Count text="Age" count={age} />
      <Button handleClick={incrementAge}>Increment Age</Button>
      <Count text="Salary" count={salary} />
      <Button handleClick={incrementSalary}>Increment Salary</Button>
    </>
  );
}

export default CallBack;

// useCallback will return a memoized version of the callback that only
// changes if one of the inputs has changed.

// useCallback is a hook that will return the memoized version of the callback function
// that only changes if one of the dependencies has changed

// It's useful when passing callbacks to optimized children components that rely
// on reference equality to prevent unnecessary renders
