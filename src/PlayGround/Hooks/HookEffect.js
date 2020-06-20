import React, { useState, useEffect } from 'react';

const HookEffect = () => {
  const [count, setCount] = useState(0);
  const [x, setX] = useState('');
  const [y, setY] = useState('');

  useEffect(() => {
    document.title = `Clicked ${count} times`;
  }, [count]);

  //   const tick = () => {
  //     setCount((prevCount) => prevCount + 1);
  //   };

  //   // if you remove count from the dependency array, on mouse move the counter will pause
  //   // but if the setCount called above in the tick function keeps track of previous count value
  //   // then an empty dependency array will not pause the counter
  //   useEffect(() => {
  //     const interval = setInterval(tick, 1000);

  //     return () => {
  //       clearInterval(interval);
  //     };
  //   }, [count]);

  // it is recommended that when you want to call a function in useEffect just go
  // ahead and call it the useEffect body.. Why? At a glance, you'll get to see
  // all the state or props that needs to specified as a dependency
  useEffect(() => {
    const interval = setInterval(() => {
      setCount((prevCount) => prevCount + 1);
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  const logMousePosition = (e) => {
    setX(e.clientX);
    setY(e.clientY);
  };

  useEffect(() => {
    window.addEventListener('mousemove', logMousePosition);

    return () => {
      window.removeEventListener('mousemove', logMousePosition);
    };
  }, []);

  return (
    <div>
      <button onClick={() => setCount((prevCount) => prevCount + 1)}>
        Clicked {count} times
      </button>
      Hook X - {x} Y - {y}
    </div>
  );
};

export default HookEffect;
