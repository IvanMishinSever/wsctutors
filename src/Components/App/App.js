
import React from 'react';
import './App.css';
import Header from '../Header/Header';
import Menu from '../Menu/Menu';
import Footer from '../Footer/Footer';
import MainView from '../MainVIew/MainView';

export default class App extends React.Component {
  render() {
    return (
      <div className="App">
           <Header />
           <Menu />
           <MainView />
           <Footer />
      </div>

    );
  }
}


