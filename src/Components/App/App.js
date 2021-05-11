
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
        firstContentView: true,
        adminView: false,
        dataCategory: [],
       // dataSubCategory: [],

        isFetching: true,
        error: null
    }
    this.chooseCategory = this.chooseCategory.bind(this);

    this.setIdList = this.setIdList.bind(this);
    this.handlerQuizView = this.handlerQuizView.bind(this);
    this.handlerAdminView = this.handlerAdminView.bind(this);
}

// FETCH Category
async getAllCategory() {
  const url = "http://localhost:4001/api/category/";
  const url2 = "http://localhost:4001/api/subcategory/";
  const urlToFetch = url;
  try {
      const response = await fetch(urlToFetch);
      const response2 = await fetch(url2);
      console.log(response);
      console.log(response2);
      if (response.ok & response2.ok) {
          const jsonResponse = await response.json();
          const jsonResponse2 = await response2.json();
          const data = [];
          jsonResponse.map(element => {
            data.push(element);
            element.nodes = [];
          })
          
          jsonResponse2.map(element => {
            data[element.id_category - 1].nodes.push(element);
          })
         
          this.setState({
              dataCategory: data,
              isFetching: false,
           
          })  
         // printQuizesCategory(jsonResponse);
          
         
          
          //console.log(jsonResponse);
          //console.log(jsonResponse2);
          console.log(data);
      }
  }
  catch (error) {
      this.setState({
          isFetching: false,
          error:error.message
      })
      console.log(error);
      console.log('SOMETHING WRONG!!!')
     
  }
  
};
/*
// FETCH subCategory
async getAllSubCategory() {
  const url = "http://localhost:4001/api/subcategory/";
  const urlToFetch = url;
  try {

      const response = await fetch(urlToFetch);
      const response2 = await this.getAllCategory;
      //const category = this.state.dataCategory;
      //console.log(category);
      console.log(response2);

      console.log(response);
      if (response.ok) {
          const jsonResponse = await response.json();
        if (jsonResponse.id_category === 1) {
          
        }





          this.setState({
              dataSubCategory: jsonResponse,
              isFetching: false,
           
          })   
         // printQuizesCategory(jsonResponse);
          
         
          
          console.log(jsonResponse);
      }
  }
  catch (error) {
      this.setState({
          isFetching: false,
          error:error.message
      })
      console.log(error);
      console.log('SOMETHING WRONG!!!')
     
  }
  
}
*/
//CHOOSE CATEGORY


chooseCategory(newId) {
 this.getAllCategory();
  //this.getAllSubCategory();

    this.setState({
        categoryView: true,
        idCategory: newId,
        idList: "",
        listExist: false,
        firstContentView: false,
        quizView: false,
        
        
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

// ADMIN COMPONENT
renderAdmin() {
     return (
      <Admin />
        )
}
//SHOW ADMIN COMPONENT
handlerAdminView() {
  this.setState(
    { 
      adminView: true
    }
  )
}

//ALL RENDER
  render() {
    if (!this.state.adminView) {
    return (
      <div className="App">
           <Header adminViewChange={this.handlerAdminView}/>
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
           
           <Footer />
      </div>
    )
    } else {
      return (
        <div className="App">
        <Header />  
        {this.renderAdmin()}
        </div>
      );
    }

    
  }
}


