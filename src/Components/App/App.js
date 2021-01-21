
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
        idCategory: "1",  // idCategory 1-Курсы, 2- Тесты, 3- Example
        listExist: false,
        idList : "",
    }
    this.chooseCategory = this.chooseCategory.bind(this);
    this.setIdList = this.setIdList.bind(this);
}


chooseCategory(newId) {
    this.setState({
        categoryView: true,
        idCategory: newId,
        
        listExist: false
    })
    //console.log(this.state.categoryView);
   // console.log(this.props);
      }

  //SET ID LIST
setIdList(id, listExist) {
   
  this.setState({
      idList: id,
     listExist: listExist
  })
  
  //this.showID();
}    
  render() {
    return (
      <div className="App">
           <Header />
           <Menu chooseCategory={this.chooseCategory}/>
           <MainView 
              categoryView={this.state.categoryView} 
              idCategory={this.state.idCategory}
              idList={this.state.idList}
              listExist={this.state.listExist}
              setIdList={this.setIdList}
           />
           <Footer />
      </div>

    );
  }
}


