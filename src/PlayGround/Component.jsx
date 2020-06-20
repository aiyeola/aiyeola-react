import React from 'react'

export default class Text extends React.Component {
  componentDidUpdate() {
    console.log('Text Component did update!');
  }
  render() {
    return this.props.children;
  }
}
