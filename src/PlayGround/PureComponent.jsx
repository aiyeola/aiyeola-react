import React from 'react';

export default class Button extends React.PureComponent {
  componentDidUpdate() {
    console.log('Button Component did update!');
  }
  render() {
    return <button>{this.props.children}</button>;
  }
}

// React.PureComponent is similar to React.Component. The difference is that
// React.PureComponent implements the shouldComponentUpdate life cycle method
// internally to make a shallow comparison of the state and props to decide if
// the component should update or not.
