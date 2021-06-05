
import React from 'react';
import './App.css';
import Header from '../Header/Header';
import Menu from '../Menu/Menu';
import Footer from '../Footer/Footer';
import MainView from '../MainVIew/MainView';
import Admin from '../Admin/Admin';
import store from './store';

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
        dataQuiz: [],

        question: '',
        counter: 0,
        answerOptions: [],
        questionId: 1,
        answer: '',
        styleAnswer:{
          flag: false},
        selectedItem: null,
        answersCount: {
          trueAnswer: 0,
        },
        result: '',
        questionLength: 0,
          

    

    }
    this.chooseCategory = this.chooseCategory.bind(this);

    //this.setIdList = this.setIdList.bind(this);
    this.handlerQuizView = this.handlerQuizView.bind(this);
    this.handlerAdminView = this.handlerAdminView.bind(this);
    this.chooseQuizId = this.chooseQuizId.bind(this);
    this.getAllQuestion = this.getAllQuestion.bind(this);
    this.handleAnswerSelected =this.handleAnswerSelected.bind(this);
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

async getAllQuestion(id) {
  const urlQuestion = "http://localhost:4001/api/question/";
  const urlAnswer = "http://localhost:4001/api/answer/";
  const urlToFetchAnswerId = `${urlAnswer}${id}`
  const urlToFetchQuestionId = `${urlQuestion}${id}`
  
  console.log(id);
  try {
      const responseQuestion = await fetch(urlToFetchQuestionId);
      const responseAnswer = await fetch(urlToFetchAnswerId);
      
      //console.log(responseQuestion);
      //console.log(responseAnswer);
     // console.log(response3);
      if (responseQuestion.ok & responseAnswer.ok) {
          const jsonResponseQuestion = await responseQuestion.json();
          const jsonResponseAnswer = await responseAnswer.json();
         
         // console.log(jsonResponseQuestion);
         // console.log(jsonResponseAnswer);

          const data = [];
         // const answers= [];

          jsonResponseQuestion.map(element => {
            element.answers = []; 
            element.question = {};
            element.question.text = element.question_text;
            delete element.question_text;
            data.push(element);
           // element.answers = [];

          })

          jsonResponseAnswer.map(element => {
           // console.log(element);
            jsonResponseQuestion.map( question => {
             // console.log(question.id);
              //console.log(element.question_id);

              if (question.id === element.question_id) {
                question.answers.push(element);
              }

            })

          })
        //  console.log(data);

          this.setState({
              dataQuiz: data,
              isFetching: false,
              question: data[0].question.text,
              answerOptions: data[0].answers,
              questionLength: data.length,
              quizId: id,

              //REFRSH STATE AFTER CHOOSE NEW TEST
              counter: 0,
              questionId: 1,
              answer: '',
              styleAnswer:{
                flag: false},
              selectedItem: null,
              answersCount: {
                trueAnswer: 0,
              },
              result: '',

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


//
// START QUIZ PART
//

// FILL ARRAY OF QUESTIONS


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
  const data = this.state.dataQuiz;
  const counter = this.state.counter + 1;
  const questionId = this.state.questionId + 1;

  this. setState({
    counter: counter,
    questionId: questionId,
    question: data[counter].question.text,
    answerOptions: data[counter].answers,
    answer: '',
    styleAnswer: {
      flag: false
    },
    selectedItem: null
  })
}
//HANDLER CLICK ANSWER
setUserAnswer(answer, idx) {
  // console.log("idx hfdyj" + idx);
   //console.log(typeof(answer));
 //calculate true answer
 if (answer === '100') {
     //document.getElementById()
     this.setState((state, props) => ({
     /*  answersCount: {
         ...state.answersCount,
         [answer]: (state.answersCount[answer] || 0) + 1
       },*/
      // ...state.answersCount,
       answer: answer,
       answersCount: {
         trueAnswer: state.answersCount.trueAnswer + 1
       },
       styleAnswer: {
         flag: true
       },
       selectedItem: idx
 
     }));
   } else {
     this.setState({
       selectedItem: idx
     })
   }
   }
//HANDLER ANSWER
handleAnswerSelected(idx, event) {
  //console.log('event' + event.currentTarget.value);
 // console.log(event);
 // console.log('idx=' + idx);
  this.setUserAnswer(event.currentTarget.value,idx);

  //APPLY NEXT QUESTION
  
  if (this.state.questionId < this.state.questionLength) {
  setTimeout(() => this.setNextQuestion(), 600);
  } else {
  // do nothing for now
  setTimeout (() => this.setResults (this.getResults ()), 300);
  }
  }
//RESULT
  getResults() {
   const result = "YOU PASS QUIZ";
   return result;
    }
  setResults (result) {
    this.setState({result: result});
      }

//CHOOSE QUIZ ID
chooseQuizId(id) {

  this.getAllQuestion(id);
  /*this.setState({
    quizId: id,
    
    
  })*/
}


//
// END QUIZ PART
//




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
    const { state, dispatch } = this.props;

    //console.log(store.getState());    

    if (!this.state.adminView) {
    return (
      <div className="App">
           <Header adminViewChange={this.handlerAdminView}/>
           <Menu 
           chooseCategory={this.chooseCategory}
           
           dispatch={dispatch}
           
           />
           <MainView 
              categoryView={this.state.categoryView}
              firstContentView={this.state.firstContentView} 
              idCategory={this.state.idCategory}

              menuSide={state.menuSide}


              chooseQuizId = {this.chooseQuizId}
              
              dataQuiz={this.state.dataQuiz}

              quizViewChange={this.handlerQuizView}
              quizView={this.state.quizView}
              dataMenuNodes={this.state.dataMenuNodes}
              question={this.state.question}
              counter={this.state.counter}
              answerOptions={this.state.answerOptions}
              questionId={this.state.questionId}
              answer={this.state.answer}
              styleAnswer={this.state.styleAnswer}
              selectedItem={this.state.selectedItem}
              answersCount={this.state.answersCount}
              result={this.state.result}
              onAnswerSelected={this.handleAnswerSelected}
              questionLength={this.state.questionLength}
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


