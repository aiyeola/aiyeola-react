import React from 'react';

const Toggle = ({ condition, children }) =>
  condition ? children[0] : children[1];

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      color: 'blue',
    };
    this.onClick = this.onClick.bind(this);
  }

  onClick() {
    this.setState(({ color }) => ({
      color: color === 'blue' ? 'lime' : 'blue',
    }));
  }

  render() {
    const { color } = this.state;
    return (
      <>
        <Toggle condition={color === 'blue'}>
          <p style={{ color }}>Blue!</p>
          <p style={{ color }}>Lime!</p>
        </Toggle>
        <button onClick={this.onClick}>Toggle Colors</button>
      </>
    );
  }
}
