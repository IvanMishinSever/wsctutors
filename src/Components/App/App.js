
import React from 'react';
import './App.css';
import Header from '../Header/Header';
import Menu from '../Menu/Menu';
import Footer from '../Footer/Footer';
import MainView from '../MainVIew/MainView';
import Admin from '../Admin/Admin';
import store from './store';
import { userAnswerRight, userAnswerWrong, nextQuestion, getResult } from '../MainVIew/Quiz/quizSlice.js';

export default class App extends React.Component {
  
  constructor(props) {
    super(props);
    this.state = {
      
        adminView: false,
       
    }
   
    this.handlerAdminView = this.handlerAdminView.bind(this);
    this.chooseQuizId = this.chooseQuizId.bind(this);
    this.handleAnswerSelected =this.handleAnswerSelected.bind(this);
    this.setNextQuestion= this.setNextQuestion.bind(this);
}



// FILL ARRAY OF QUESTIONS

//NO USE???????
shuffleArray(array) {
  var currentIndex = array.length,
    temporaryValue,
    randomIndex;

  // While there remain elements to shuffle...
  while (0 !== currentIndex) {
    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    // And swap it with the current element.
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }

  return array;
}

//SET NEW QUESTION
setNextQuestion() {
  const { state, dispatch } = this.props;
  if (state.quiz.questionId < state.quiz.questionLength) {
    dispatch(nextQuestion());
  } else {
       setTimeout (() => this.setResults (this.getResults ()), 300);
  }
 }



//HANDLER CLICK ANSWER
setUserAnswer(answer, idx) {

  const { dispatch } = this.props;

  if (answer === '100') {
 
     dispatch(userAnswerRight({answer, idx}));

   } else {

    dispatch(userAnswerWrong(idx));

   }
}
//HANDLER ANSWER
handleAnswerSelected(idx, event) {

  const { state, dispatch } = this.props;
  this.setUserAnswer(event.currentTarget.value,idx);

  //APPLY NEXT QUESTION
 /*
  if (state.quiz.questionId < state.quiz.questionLength) {
    setTimeout(() => this.setNextQuestion(), 600);
  } else {
    
   // setTimeout (dispatch(getResult("YOU PASS QUIZ")), 600);
    setTimeout (() => this.setResults (this.getResults ()), 600);
  }
  */
}
//RESULT
getResults() {
  const result = "YOU PASS QUIZ";
  return result;
   }
 setResults (result) {
  const { state, dispatch } = this.props;
   dispatch(getResult(result));
     }

//CHOOSE QUIZ ID

chooseQuizId(id) {

  this.getAllQuestion(id);
  
}

// ADMIN COMPONENT
renderAdmin() {
 
  const { state, dispatch } = this.props;
 // console.log(state.admin);
     return (
      <Admin 
      adminState={state.admin}
      dispatch={dispatch}
      />
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
    const { state, dispatch } = this.props;
   
    if (!this.state.adminView) {
    return (
      <div className="App">
           <Header 
             adminViewChange={this.handlerAdminView}
           />
           <Menu 
          
             dispatch={dispatch}
           
           />
           <MainView 
              menuSide={state.menuSide}
              dispatch={dispatch}
              quizViewChangeRedux={state.quiz}
              onAnswerSelected={this.handleAnswerSelected}
              nextQuestion={this.setNextQuestion}
  
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


