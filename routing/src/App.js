import React, { Component } from 'react';
import routes from './routes'
import './App.css';
import { HashRouter, Link } from 'react-router-dom'

class App extends Component {
  render() {
    return (
      <HashRouter>
        <div className="App">
          <Link to='/'><div>Home</div></Link>
          <Link to='/Route1'>Route1</Link>
          <Link to='/Route2'>Route2</Link>
          {routes}
        </div>
      </HashRouter>
    );
  }
}

export default App;
