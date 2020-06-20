import React from 'react';
import Text from './Component';
import Button from './PureComponent';

export default class App extends React.Component {
  state = {
    counter: 7,
  };

  componentDidMount() {
    this.intervalId = setInterval(() => {
      this.setState(({ counter }) => ({
        counter: counter - 1,
      }));
    }, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.intervalId);
  }

  render() {
    const { counter } = this.state;
    return (
      <React.Fragment>
        <h1>Counter: {counter}</h1>
        <Text>I'm just a text</Text>
        <Button>I'm a button</Button>
      </React.Fragment>
    );
  }
}


