import React, { Component, Profiler } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Navbar from '../src/components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import Post from './components/Post';
// import PlayGround from './PlayGround/Hooks/CustomHooks/UserForm';
import PlayGround from './PlayGround/ErrorBoundary';

export class App extends Component {
  onRenderCallback = (
    id,
    phase,
    actualDuration,
    baseDuration,
    startTime,
    commitTime,
    interactions
  ) => {
    console.log('id: ', id);
    console.log('phase: ', phase);
    console.log('actualDuration: ', actualDuration);
    console.log('baseDuration: ', baseDuration);
    console.log('startTime: ', startTime);
    console.log('commitTime: ', commitTime);
    console.log('interactions: ', interactions);
  };

  render() {
    return (
      <BrowserRouter>
        <Profiler id="mainApp" onRender={this.onRenderCallback}>
          <div className="App">
            <Navbar />
            <Switch>
              <Route exact path="/" component={Home} />
              <Route path="/about" component={About} />
              <Route path="/contact" component={Contact} />
              <Route path="/:post_id" component={Post} />
            </Switch>
            <Route path="/playground" component={PlayGround} />
          </div>
        </Profiler>
      </BrowserRouter>
    );
  }
}

export default App;
