import React, { Component } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Navbar from "../src/components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/Contact";
import Post from "./components/Post";


export class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <div className="App">
            <Navbar />
            <Switch>
              <Route exact path="/" component={Home} />
              <Route path="/about" component={About} />
              <Route path="/contact" component={Contact} />
              <Route path="/:post_id" component={Post} />
            </Switch>
          </div>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
