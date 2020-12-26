
import React from 'react';
import './App.css';
import Header from '../Header/Header';
import Menu from '../Menu/Menu';
import Footer from '../Footer/Footer';
import MainView from '../MainVIew/MainView';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        categoryView: false,
    }
    this.handleClick = this.handleClick.bind(this);
}


handleClick() {
    this.setState({
        categoryView: true
    })
    //console.log(this.state.categoryView);
      }
      
  render() {
    return (
      <div className="App">
           <Header />
           <Menu onClick={this.handleClick}/>
           <MainView categoryView={this.state.categoryView}/>
           <Footer />
      </div>

    );
  }
}


