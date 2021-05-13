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
            counter: 0,
            questionId: 1,
            question: '',
            answerOptions: [],
            questionData: [],
            answer: '',
            answersCount: {
              trueAnswer: 0,
             // microsoft: 0,
             // sony: 0
            },
            result: '',
            styleAnswer:{
              flag: false},
            selectedItem: null
              

        };
        this.handleAnswerSelected = this.handleAnswerSelected.bind(this);
    }
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
          console.log(data);
          /*
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
*/

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






// FILL ARRAY OF QUESTIONS
componentDidMount() {
  this.getAllQuestion();
   // const shuffledAnswerOptions = quizQuestions.map(question => this.shuffleArray(question.answers));
  //const arrayAnswerOptions = quizQuestions.map()
    
    //console.log(quizQuestions[0].question.text);
   // console.log(quizQuestions);
   // console.log(quizQuestions[0].answers);
    
    this.setState({
      //question: quizQuestions[0].question,
      question: quizQuestions[0].question.text,
     //answerOptions: shuffledAnswerOptions[0]
      answerOptions: quizQuestions[0].answers
    });

  }

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
  
  setNextQuestion() {
    const counter = this.state.counter + 1;
    const questionId = this.state.questionId + 1;
  
    this.setState({
      counter: counter,
      questionId: questionId,
      //question: quizQuestions[counter].question,
      question: quizQuestions[counter].question.text,
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
        /*
      const answersCount = this.state.answersCount;
      const answersCountKeys = Object.keys(answersCount);
      const answersCountValues = answersCountKeys.map((key) => answersCount[key]);
      const maxAnswerCount = Math.max.apply(null, answersCountValues);
      return answersCountKeys.filter((key) => answersCount[key] === maxAnswerCount);
      */
     const result = "YOU PASS QUIZ";
     return result;
      }
      setResults (result) {
          /*
        if (result.length === 1) {
        this.setState({ result: result[0] });
        } else {
        this.setState({ result: 'Undetermined' });
        }
        */
       this.setState({result: result});
        }
//RENDER QUIZ
renderQuiz() {
  //let is_selected = this.state.selectedItem === idx;
    return (
        <Quiz 
        quizView={this.props.quizView} 
        answer={this.state.answer}
        answerOptions={this.state.answerOptions}
        questionId={this.state.questionId}
        question={this.state.question}
        onAnswerSelected={this.handleAnswerSelected}
        questionTotal={quizQuestions.length}
        styleAnswer={this.state.styleAnswer}
        isSelected={this.state.selectedItem}
        />
    );
  
}    
//RENDER RESULT
 renderResult() {
     return (
         <Result 
         quizResult={this.state.result} 
         trueAnswer={this.state.answersCount.trueAnswer}
         questionTotal={quizQuestions.length}
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
                {this.state.result ? this.renderResult() : this.renderQuiz()}
            </div>
        )
    } else return null;

}



}