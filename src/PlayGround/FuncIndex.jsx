import React from 'react';
import Text from './Component';
import Button from './PureComponent';

export default function App(props) {
  const [counter, setCounter] = React.useState(7);

  React.useEffect(() => {
    const intervalId = setInterval(() => {
      setCounter(counter - 1);
    }, 1000);

    return () => {
      clearInterval(intervalId);
    };
  }, [counter]);

  if (counter === 0) {
    console.log('tick tick');
    props.history.push('/about')
  }
  return (
    <>
      <h1>Counter: {counter}</h1>
      <Text>I'm just a text</Text>
      <Button>I'm a button</Button>
    </>
  );
}
