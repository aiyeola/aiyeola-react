import React from 'react';
import LifeCycleTime from './LifeCycle';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      color: 'red',
      dontUpdate: false,
      unmount: false,
    };

    this.toggleColor = this.toggleColor.bind(this);
    this.toggleUpdate = this.toggleUpdate.bind(this);
    this.toggleUnmount = this.toggleUnmount.bind(this);
  }

  toggleColor() {
    this.setState((prevState) => ({
      color: prevState.color === 'red' ? 'blue' : 'red',
    }));
  }

  toggleUpdate() {
    this.setState((prevState) => ({
      dontUpdate: !prevState.dontUpdate,
    }));
  }

  toggleUnmount() {
    this.setState((prevState) => ({
      unmount: !prevState.unmount,
    }));
  }

  render() {
    const { color, dontUpdate, unmount } = this.state;

    return (
      <>
        {unmount === false && (
          <LifeCycleTime color={color} dontUpdate={dontUpdate} />
        )}
        <button onClick={this.toggleColor}>
          Toggle color
          {JSON.stringify({ color })}
        </button>
        <button onClick={this.toggleUpdate}>
          Should update?
          {JSON.stringify({ dontUpdate })}
        </button>
        <button onClick={this.toggleUnmount}>
          Should unmount?
          {JSON.stringify({ unmount })}
        </button>
      </>
    );
  }
}
