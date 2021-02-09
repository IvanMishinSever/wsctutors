import React from 'react';
import './Quiz.css';
import Question from './Question/Question';
import Quiz from './Quiz';
import Result from './Result/Result';
import quizQuestions from './quizQuestions';

export default class QuizContainer extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            questionId: 1,
            question: '',
            answerOptions: [],
            answer:'',
            answerCount: {},
            result: '',
        }
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

//RENDER QUIZ
renderQuiz() {
    return (
        <Quiz 
        quizView={this.props.quizView} 
        answer={this.state.answer}
        answerOptions={this.state.answerOptions}
        questionId={this.state.questionId}
        question={this.state.question}
        
        />
    );
}    
//RENDER RESULT
 renderResult() {
     return (
         <Result quizResult={this. state.result} />
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