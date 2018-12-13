import React, { Component } from 'react';
import './App.css';
import { CIPHER, HOME, DECIPHER } from './constants';
import Cipher from './components/cipher';
import Home from './components/home';
import Decipher from './components/decipher';

class App extends Component {
  state = {
    path: HOME
  }


  //change the path indicating page
  changePath = x => {
    this.setState({ path: x });
  }


  //choose which path to take based on button click in home.js
  choosePath = (str) => {

    if (str === "cipher") {
      this.changePath(CIPHER);
    }
    else if(str ==="decipher"){
      this.changePath(DECIPHER);
    }
    else{
      this.changePath(HOME);
    }


  }

//choose whoch path to take to render page
  renderPath = path => {

    switch (path) {

      case HOME:
        return( <Home choosePath={this.choosePath} changePath={this.changePath}/>)

      case CIPHER:
        return( <Cipher changePath={this.changePath}/>)

      case DECIPHER:
         return( <Decipher changePath={this.changePath}/>)

      default:
        return <h1>Page not found....</h1>

    }
  }


  render() {
    return (
      <div className = 'container' id='main-container'>
        {this.renderPath(this.state.path)}
      </div>
    );
  }
}

export default App;
