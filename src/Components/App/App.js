
import React from 'react';
import './App.css';
import Header from '../Header/Header';
import Menu from '../Menu/Menu';
import Footer from '../Footer/Footer';

export default class App extends React.Component {
  render() {
    return (
      <div className="App">
           <Header />
           <Menu />
           <Footer />
      </div>

    );
  }
}


