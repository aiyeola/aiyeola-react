import React from 'react';

export default class LifeCycleTime extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      time: new Date().toTimeString(),
      color: null,
      dontUpdate: false,
    };
  }

  static getDerivedStateFromProps(nextProps, prevState) {
    return nextProps;
  }

  componentDidMount() {
    this.intervalId = setInterval(() => {
      this.setState({
        time: new Date().toTimeString(),
      });
    }, 100);
  }

  componentWillUnmount() {
    clearInterval(this.intervalId);
  }

  shouldComponentUpdate(nextProps, nextState) {
    if (nextState.dontUpdate) {
      return false;
    }
    return true;
  }

  getSnapshotBeforeUpdate(prevProps, prevState) {
    return 'snapshot before update';
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    console.log('Component did update and received snapshot:', snapshot);
  }

  render() {
    const { color, time } = this.state;
    return <span style={{ color }}>{time}</span>;
  }
}

