import React, { Component } from 'react';
import styled from 'styled-components';
import logo from './logo.svg';
import './App.css';

const blue = 'blue';
const white = 'white';
const mediaSmall = '600px';

const StyledApp = styled.div`
  background-color: ${white};
  color: ${blue};

  @media (min-width: ${mediaSmall}) {
    background-color: red;
  }
`;

class App extends Component {
  render() {
    return (
      <StyledApp>
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </StyledApp>
    );
  }
}

export default App;
