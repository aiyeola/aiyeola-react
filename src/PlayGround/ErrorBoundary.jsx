import * as React from 'react';

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      hasError: false,
      message: null,
      where: null,
      errorMessage: '',
    };
  }

  static getDerivedStateFromError(error) {
    return {
      errorMessage: error.toString(),
    };
  }

  componentDidCatch(error, info) {
    this.logErrorToServices(error.toString(), info.componentStack);

    this.setState({
      hasError: true,
      message: error.message,
      where: info.componentStack,
    });
  }

  // A fake logging service
  logErrorToServices = console.log;

  render() {
    const { hasError, message, where } = this.state;
    // console.log('where: ', where);
    // console.log('message: ', message);
    return hasError ? (
      <details style={{ whiteSpace: 'pre-wrap' }}>
        <summary>{message}</summary>
        <p>{where}</p>
      </details>
    ) : (
      this.props.children
    );
  }
}

class App extends React.Component {
  constructor(props) {
    super(props);
    this.onClick = this.onClick.bind(this);
  }

  onClick() {
    this.setState(() => {
      throw new Error('Error while setting state.');
    });
  }

  render() {
    return <button onClick={this.onClick}>Buggy button!</button>;
  }
}

export default function Error() {
  return (
    <ErrorBoundary>
      <App />
    </ErrorBoundary>
  );
}

// Error boundary components are just React components that implement
// the componentDidCatch life cycle method to catch errors in their children.
// They catch errors in constructor methods when a class component is
// initialized but fails, in life cycle methods, and while rendering. Errors that
// cannot be caught are from asynchronous code, event handlers, and errors
// in the error component boundary itself.
// The componentDidCatch life cycle method receives two arguments: the first
// one is an error object while the second received argument is an object
// containing a componentStack property with a friendly stack trace that
// describes where in the React tree a component failed.

// Boundaries are only designed for intercepting errors that originate from
// 3 places in a react component : During render phase, in a lifecycle method
// and in the constructor
