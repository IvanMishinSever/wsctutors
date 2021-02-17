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
            answer: '',
            answersCount: {
              trueAnswer: 0,
             // microsoft: 0,
             // sony: 0
            },
            result: '',
            styleAnswer:{
              flag: false}
        };
        this.handleAnswerSelected = this.handleAnswerSelected.bind(this);
    }

// FILL ARRAY OF QUESTIONS
componentDidMount() {
    const shuffledAnswerOptions = quizQuestions.map(question => this.shuffleArray(question.answers)
    );
    console.log(quizQuestions[0].question.text);
    
    this.setState({
      //question: quizQuestions[0].question,
      question: quizQuestions[0].question.text,
      answerOptions: shuffledAnswerOptions[0]
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
setUserAnswer(answer) {
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
      }
    }));
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
      }
    });
  }
  handleAnswerSelected(event) {
    console.log(event.currentTarget.value);
    this.setUserAnswer(event.currentTarget.value);
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