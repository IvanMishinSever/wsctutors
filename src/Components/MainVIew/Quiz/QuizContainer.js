import React from 'react';
import './Quiz.css';

import Quiz from './Quiz';
import Result from './Result/Result';
import quizQuestions from './quizQuestions';

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
              nintendo: 0,
              microsoft: 0,
              sony: 0
            },
            result: ''
        };
        this.handleAnswerSelected = this.handleAnswerSelected.bind(this);
    }

// FILL ARRAY OF QUESTIONS
componentDidMount() {
    const shuffledAnswerOptions = quizQuestions.map(question =>
      this.shuffleArray(question.answers)
    );
    this.setState({
      question: quizQuestions[0].question,
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
    this.setState((state, props) => ({
      answersCount: {
        ...state.answersCount,
        [answer]: (state.answersCount[answer] || 0) + 1
      },
      answer: answer
    }));
  }
  
  setNextQuestion() {
    const counter = this.state.counter + 1;
    const questionId = this.state.questionId + 1;
  
    this.setState({
      counter: counter,
      questionId: questionId,
      question: quizQuestions[counter].question,
      answerOptions: quizQuestions[counter].answers,
      answer: ''
    });
  }
  handleAnswerSelected(event) {
    this.setUserAnswer(event.currentTarget.value);
    if (this.state.questionId < quizQuestions.length) {
    setTimeout(() => this.setNextQuestion(), 600);
    } else {
    // do nothing for now
    setTimeout (() => this.setResults (this.getResults ()), 300);
    }
    }
  
    getResults() {
      const answersCount = this.state.answersCount;
      const answersCountKeys = Object.keys(answersCount);
      const answersCountValues = answersCountKeys.map((key) => answersCount[key]);
      const maxAnswerCount = Math.max.apply(null, answersCountValues);
      return answersCountKeys.filter((key) => answersCount[key] === maxAnswerCount);
      }
      setResults (result) {
        if (result.length === 1) {
        this.setState({ result: result[0] });
        } else {
        this.setState({ result: 'Undetermined' });
        }
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
        />
    );
}    
//RENDER RESULT
 renderResult() {
     return (
         <Result quizResult={this.state.result} />
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