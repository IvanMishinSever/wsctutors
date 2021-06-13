import React from 'react';
import './Quiz.css';
import Quiz from './Quiz';
import Result from './Result/Result';

export default class QuizContainer extends React.Component {
    constructor(props) {
        super(props);

        this.state = {

        };
       // this.handleAnswerSelected = this.handleAnswerSelected.bind(this);
    }
    
//RENDER QUIZ
renderQuiz() {
  
    return (
        <Quiz 
        quizRedux={this.props.quizRedux}
        

       // quizView={this.props.quizView} 
       // answer={this.props.answer}
       // answerOptions={this.props.answerOptions}
       // questionId={this.props.questionId}
       //question={this.props.question}
        onAnswerSelected={this.props.onAnswerSelected}
       // questionTotal={this.props.questionLength}
      //  styleAnswer={this.props.styleAnswer}
       // isSelected={this.props.selectedItem}
        />
    );
  
}    
//RENDER RESULT
 renderResult() {
     return (
         <Result 
         quizResult={this.props.quizRedux.result} 
         trueAnswer={this.props.quizRedux.answersCount.trueAnswer}
         questionTotal={this.props.quizRedux.questionLength}
         />
     )
 }
//RENDER ALL   
render() {
   // console.log(this.props.quizRedux.quizView);




    if (this.props.quizRedux.quizView) {
        return (
            <div className="Quiz">
                <div>
                    <h2> WSC Quiz</h2>
                </div>
                {this.props.quizRedux.result ? this.renderResult() : this.renderQuiz()}
            </div>
        )
    } else return null;

}



}