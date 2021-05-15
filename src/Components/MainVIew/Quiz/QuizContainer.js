import React from 'react';
import './Quiz.css';

import Quiz from './Quiz';
import Result from './Result/Result';
//import quizQuestions from './quizQuestions';
import quizQuestions from './quizData';
export default class QuizContainer extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
           //counter: 0,
            //questionId: 1,
            //question: '',
           // answerOptions: [],
          //  questionData: [],
           // answer: '',
           // answersCount: {
           //   trueAnswer: 0,
             // microsoft: 0,
             // sony: 0
           // },
           // result: '',
           // styleAnswer:{
           //   flag: false},
           // selectedItem: null,
            
              

        };
       // this.handleAnswerSelected = this.handleAnswerSelected.bind(this);
    }
//FETCH QUESTIONS AND ANSWERS
/*
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

*/




// FILL ARRAY OF QUESTIONS
/*

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
//HANDLER CLICK ANSWER
setUserAnswer(answer, idx) {
 // console.log("idx hfdyj" + idx);
  //console.log(answer);
//calculate true answer
if (answer === 'Yes') {
    //document.getElementById()
    this.setState((state, props) => ({

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
  
  setNextQuestion() {
    const counter = this.state.counter + 1;
    const questionId = this.state.questionId + 1;
  
    this.setState({
      counter: counter,
      questionId: questionId,
      //question: quizQuestions[counter].question,
     // question: quizQuestions[counter].question.text,
      answerOptions: quizQuestions[counter].answers,
      answer: '',
      styleAnswer: {
        flag: false
      },
      selectedItem: null

    });
  }
  handleAnswerSelected(idx, event) {
    //console.log('event' + event.currentTarget.value);
   // console.log(event);
   // console.log('idx=' + idx);
    this.setUserAnswer(event.currentTarget.value,idx);

    //APPLY NEXT QUESTION
    
    if (this.state.questionId < quizQuestions.length) {
    setTimeout(() => this.setNextQuestion(), 600);
    } else {
    // do nothing for now
    setTimeout (() => this.setResults (this.getResults ()), 300);
    }
    }
  
    getResults() {

     const result = "YOU PASS QUIZ";
     return result;
      }
      setResults (result) {

       this.setState({result: result});
        }

  */      
//RENDER QUIZ
renderQuiz() {
  //let is_selected = this.state.selectedItem === idx;
    return (
        <Quiz 
        quizView={this.props.quizView} 
        answer={this.props.answer}
        answerOptions={this.props.answerOptions}
        questionId={this.props.questionId}
        question={this.props.question}
        onAnswerSelected={this.props.onAnswerSelected}
        questionTotal={quizQuestions.length}
        styleAnswer={this.props.styleAnswer}
        isSelected={this.props.selectedItem}
        />
    );
  
}    
//RENDER RESULT
 renderResult() {
     return (
         <Result 
         quizResult={this.props.result} 
         trueAnswer={this.props.answersCount.trueAnswer}
         questionTotal={this.props.questionLength}
         />
     )
 }
//RENDER ALL   
render() {
    if (this.props.quizView) {
        return (
            <div className="Quiz">
                <div>
                    <h2> WSC Quiz</h2>
                </div>
                {this.props.result ? this.renderResult() : this.renderQuiz()}
            </div>
        )
    } else return null;

}



}