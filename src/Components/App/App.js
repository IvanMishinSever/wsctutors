
import React from 'react';
import './App.css';
import Header from '../Header/Header';
import Menu from '../Menu/Menu';

export default class App extends React.Component {
  render() {
    return (
      <div className="App">
           <Header />
           <Menu />
      </div>

    );
  }
}


