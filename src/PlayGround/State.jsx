import React from 'react';

export default class Example extends React.Component {
  state = {
    title: 'Example',
    date: null,
  };
  //   componentDidMount() {
  //     this.setState((prevState) => ({
  //       date: new Date().toDateString(),
  //     }));
  //   }

  //   componentDidMount() {
  //     this.setState({
  //       date: new Date().toDateString(),
  //     });
  //   }

  componentDidMount() {
    this.setState(
      {
        date: new Date().toDateString(),
      },
      () => {
        console.log('date has been updated!');
      }
    );
    console.log(this.state.date); // null
  }
  render() {
    return (
      <>
        <span>{this.state.title}</span>
        <span>{this.state.date}</span>
      </>
    );
  }
}

// The setState method accepts a callback function as the first argument
// which will be executed passing the current state (prevState for convention)
// as the first argument to the callback function and the current props as the
// second argument. This is so because setState works asynchronously and
// the state could be mutated while you are performing other actions in
// different parts of your component. If you don't need access to the current state 
//while updating the state, you can directly pass an object as the first argument.

// setState also accepts an optional callback function as a second argument
// that gets called once the state has been updated. Because setState is
// asynchronous, you may want to use the second callback to perform an
// action only once the state has been updated
