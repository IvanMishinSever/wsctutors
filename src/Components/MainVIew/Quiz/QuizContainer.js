import React from 'react';
import './Quiz.css';
import Question from './Question/Question';
import Quiz from './Quiz';
import Result from './Result/Result';
export default class QuizContainer extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            quistionId: 1,
            quistion: '',
            answerOptions: [],
            answer:'',
            answerCount: {},
            result: '',
        }
    }
//RENDER QUIZ
renderQuiz() {
    return (
        <Quiz quizView={this.props.quizView} />
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
    return (
        <div className="Quiz">
            <div>
                <h2> WSC Quiz</h2>
            </div>
            {this.state.result ? this.renderResult() : this.renderQuiz()}
        </div>
    )
}



}