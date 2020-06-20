// import React from 'react';

// export default class App extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       title: 'Untitled',
//     };
//     this.onBtnClick = this.onBtnClick.bind(this);
//   }
//   onBtnClick() {
//     this.setState({
//       title: 'Hello there!',
//     });
//   }
//   render() {
//     return (
//       <>
//         <h1>{this.state.title}</h1>
//         <button onClick={this.onBtnClick}>Click me to change the title</button>
//       </>
//     );
//   }
// }

class Example {
  fn() {
    return this;
  }
}

const examp = new Example();
const props = examp.fn;
const bound = examp.fn.bind(examp);
console.log('1:', typeof examp.fn());
console.log('2:', typeof props());
console.log('3:', typeof bound());

// Even though the constant props has a reference to the fn method of the examp
// instance of the Example class, it loses the context of this. That's why binding
// allows you to keep the original context. In React, we bind a method to the
// original context of this to be able to use our own instance methods, such as
// setState, when passing the function down to child components. Otherwise, the
// context of this will be undefined and the function will fail.
