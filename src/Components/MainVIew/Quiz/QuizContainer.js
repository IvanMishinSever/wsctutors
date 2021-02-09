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
        <Quiz 
        quizView={this.props.quizView} 
        answer={this.state.answer}
        answerOptions={this.state.answerOptions}
        quistionId={this.state.quistionId}
        quistion={this.state.quistion}
        
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