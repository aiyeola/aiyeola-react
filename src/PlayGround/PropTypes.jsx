import React from 'react';
import propTypes from 'prop-types';

// checkPropTypes(typeSpecs, values, location, componentName, getStack)
class Toggle extends React.Component {
  static propTypes = {
    condition: propTypes.any.isRequired,
    children: (props, propName, componentName) => {
      const customPropTypes = {
        children: propTypes.arrayOf(propTypes.element).isRequired,
      };
      const isArrayOfElements = propTypes.checkPropTypes(
        customPropTypes,
        props,
        propName,
        componentName
      );
      const children = props[propName];

      const count = React.Children.count(children);

      if (isArrayOfElements instanceof Error) {
        return isArrayOfElements;
      } else if (count !== 2) {
        return new Error(
          `"${componentName}"` +
            ` expected ${propName}` +
            ` to contain exactly 2 React elements`
        );
      }
    },
  };

  render() {
    const { condition, children } = this.props;
    return condition ? children[0] : children[1];
  }
}

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { value: false };
    this.onClick = this.onClick.bind(this);
  }

  onClick() {
    this.setState(({ value }) => ({ value: !value }));
  }

  render() {
    const { value } = this.state;
    return (
      <React.Fragment>
        <Toggle condition={value}>
          <p
            style={{
              color: 'blue',
            }}
          >
            Blue!
          </p>
          <p style={{ color: 'lime' }}>Lime!</p>
          <p
            style={{
              color: 'pink',
            }}
          >
            Pink!
          </p>
        </Toggle>
        <button onClick={this.onClick}> Toggle Colors</button>
      </React.Fragment>
    );
  }
}

// We define a custom function validator for the children property. Inside the
// function, we first use the built-in propTypes functions to check if children is
// an array of React elements. If the result of the validation is not an instance
// of Error, then we use the React Children's count utility method to know how
// many React elements were given and we return an error if the number of
// React elements in children is not 2.
