
import React from 'react';
import './App.css';
import Header from '../Header/Header';
import Menu from '../Menu/Menu';
import Footer from '../Footer/Footer';
import MainView from '../MainVIew/MainView';
import Admin from '../Admin/Admin';

export default class App extends React.Component {
  
  constructor(props) {
    super(props);
    this.state = {
        categoryView: false,
        idCategory: "",  // idCategory 1-Курсы, 2- Тесты, 3- Example
        listExist: false,
        idList : "",
        quizView: false,
        firstContentView: true
    }
    this.chooseCategory = this.chooseCategory.bind(this);

    this.setIdList = this.setIdList.bind(this);
    this.handlerQuizView = this.handlerQuizView.bind(this);
}

//CHOOSE CATEGORY


chooseCategory(newId) {
    this.setState({
        categoryView: true,
        idCategory: newId,
        idList: "",
        listExist: false,
        firstContentView: false,
        quizView: false
        
    })
    //console.log(this.state.categoryView);
   // console.log(this.props);
      }

  //SET ID LIST

setIdList(id, listExist) {
    this.setState({
      idList: id,
      listExist: listExist,
  })
  
  //this.showID();
}  
//SHOW QUIZ COMPONENT

handlerQuizView() {
  this.setState(
      {
        quizView: true,
        categoryView: false
      }
  )
}

  render() {
    return (
      <div className="App">
           <Header />
           <Menu chooseCategory={this.chooseCategory}/>
           <MainView 
              categoryView={this.state.categoryView}
              firstContentView={this.state.firstContentView} 
              idCategory={this.state.idCategory}
              idList={this.state.idList}
              listExist={this.state.listExist}
              setIdList={this.setIdList}
              quizViewChange={this.handlerQuizView}
              quizView={this.state.quizView}
           />
           <Admin categoryView={this.state.categoryView}/>
           <Footer />
      </div>

    );
  }
}


