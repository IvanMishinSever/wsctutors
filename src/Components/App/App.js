
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
        //listExist: false,
        //idList : "",
        quizView: false,
        firstContentView: true,
        adminView: false,
        dataMenuNodes: [],
       // dataSubCategory: [],

        isFetching: true,
        error: null,
        quizId:'',
        dataQuiz: []
    }
    this.chooseCategory = this.chooseCategory.bind(this);

    //this.setIdList = this.setIdList.bind(this);
    this.handlerQuizView = this.handlerQuizView.bind(this);
    this.handlerAdminView = this.handlerAdminView.bind(this);
    this.chooseQuizId = this.chooseQuizId.bind(this);
    this.getAllQuestion = this.getAllQuestion.bind(this);
}

// FETCH DATA FOR MENUNODES
async getMenuNodes() {
  const urlCategory = "http://localhost:4001/api/category/";
  const urlSubCategory = "http://localhost:4001/api/subcategory/";
  const urlQuizes = "http://localhost:4001/api/quizes/";
  
  try {
      const responseCategory = await fetch(urlCategory);
      const responseSubCategory = await fetch(urlSubCategory);
      const responseQuizes = await fetch(urlQuizes);
     // console.log(response);
     // console.log(response2);
     // console.log(response3);
      if (responseCategory.ok & responseSubCategory.ok & responseQuizes.ok) {
          const jsonResponseCategory = await responseCategory.json();
          const jsonResponseSubCategory = await responseSubCategory.json();
          const jsonResponseQuizes = await responseQuizes.json();
          const data = [];
          const subdata = [];

          jsonResponseCategory.map(element => {
            data.push(element);
            element.nodes = [];
          })
          jsonResponseSubCategory.map(element => {
            subdata.push(element);
            element.nodes = [];
          })
         // console.log(subdata);

          jsonResponseQuizes.map(element => {
            subdata[element.id_category - 1].nodes.push(element);
          })
          //console.log("dddd");       
          //console.log(subdata);

          subdata.map(element => {
            data[element.id_category - 1].nodes.push(element);
          })


          this.setState({
              dataMenuNodes: data,
              isFetching: false,
           
          })  
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

//FETCH QUESTIONS AND ANSWERS

async getAllQuestion() {
  const urlQuestion = "http://localhost:4001/api/question/";
  const urlAnswer = "http://localhost:4001/api/answer/";
  
  
  try {
      const responseQuestion = await fetch(urlQuestion);
      const responseAnswer = await fetch(urlAnswer);
      
     // console.log(response);
     // console.log(response2);
     // console.log(response3);
      if (responseQuestion.ok & responseAnswer.ok) {
          const jsonResponseQuestion = await responseQuestion.json();
          const jsonResponseAnswer = await responseAnswer.json();
         
          const data = [];
          const answers= [];

          jsonResponseQuestion.map(element => {
            element.answers = []; 
            element.question = {};
            element.question.text = element.question_text;
            delete element.question_text;
            data.push(element);
           // element.answers = [];

          })
          jsonResponseAnswer.map(element => {
            data[element.question_id - 1].answers.push(element);
            
            
           // element.answers = [];

          })
          console.log(data);

          this.setState({
              dataQuiz: data,
              isFetching: false,
           
          })  
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




//CHOOSE QUIZ ID
chooseQuizId(id) {
  this.getAllQuestion();
  this.setState({
    quizId: id
  })
}


chooseCategory(newId) {
 this.getMenuNodes();
  //this.getAllSubCategory();

    this.setState({
        categoryView: true,
        idCategory: newId,
       // idList: "",
       // listExist: false,
        firstContentView: false,
        quizView: false,
        
        
    })
    //console.log(this.state.categoryView);
   // console.log(this.props);
      }

  //SET ID LIST
/*
setIdList(id, listExist) {
    this.setState({
      idList: id,
      listExist: listExist,
  })
  
  //this.showID();
}  
*/





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
           <Menu 
           chooseCategory={this.chooseCategory}
           
           
           />
           <MainView 
              categoryView={this.state.categoryView}
              firstContentView={this.state.firstContentView} 
              idCategory={this.state.idCategory}

              chooseQuizId = {this.chooseQuizId}
              quizId={this.state.quizId}
              dataQuiz={this.state.dataQuiz}

              quizViewChange={this.handlerQuizView}
              quizView={this.state.quizView}
              dataMenuNodes={this.state.dataMenuNodes}
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


