import React from 'react';

class Span extends React.Component {
  render() {
    return <span>{this.props.children}</span>;
  }
}

export default class App extends React.Component {
  rf1 = React.createRef();
  rf2 = React.createRef();
  rf3 = React.createRef();

  componentDidMount() {
    const { rf1, rf2, rf3 } = this;
    console.log(rf1.current instanceof HTMLSpanElement);
    console.log(rf2.current instanceof Span);
    console.log('rf3: ', rf3.current.value);
  }

  render() {
    return (
      <>
        <span ref={this.rf1} />
        <Span ref={this.rf2} />
        <input ref={this.rf3} defaultValue="egg" />
      </>
    );
  }
}
