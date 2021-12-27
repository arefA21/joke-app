import React from "react";
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Nav from "./components/Nav";
import Joke from "./components/Joke";
import About from "./components/About";

function App() {
  return (
    <Router>
    <div className="App">
      <Nav />
      <Switch>
        <Route path="/" exact component={Joke}/>
        <Route path="/about" exact component={About}/>
      </Switch>
    </div>
    </Router>
  );
}

export default App;
