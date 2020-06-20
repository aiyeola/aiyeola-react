import * as React from 'react';
import * as ReactDOM from 'react-dom';

const Header = () =>
  ReactDOM.createPortal(
    <h1>React Portals</h1>,
    document.querySelector('[id="heading"]')
  );

const App = () => (
  <>
    <p>Hello World!</p>
    <Header />
  </>
);

export default App;

// Even though in the React tree the Header component appears to be rendered
// after the paragraph p HTML tag, the rendered Header component renders
// before it. That's because the Header component is actually rendered on a
// header HTML tag that appears before the section HTML tag where the main
// application is rendered.
