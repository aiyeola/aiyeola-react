import React from "react";
import { Link, NavLink, withRouter } from "react-router-dom";
// NavLink works just as Link works as an Anchor tag, difference is that NavLink adds
// an active class to the 'anchor' tag
// the 'withRouter' component supercharges other components with prop values (Higher Order Components)
const Navbar = props => {
  // setTimeout(() => {
  //   props.history.push("/about");
  // }, 2000);
  return (
    <div>
      <nav className="nav-wrapper red darken-3">
        <div className="container">
          <a href="/" className="brand-logo">
            Poke'Times
          </a>
          <ul className="right">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <NavLink to="/about">About</NavLink>
            </li>
            <li>
              <NavLink to="/contact">Contact</NavLink>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default withRouter(Navbar);
