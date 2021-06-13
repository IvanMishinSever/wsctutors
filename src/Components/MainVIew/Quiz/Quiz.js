import React from 'react';
import './Quiz.css';
import Question from './Question/Question';
//import { CSSTransitionGroup } from 'react-transition-group';
import AnswerOption from './Question/AnswerOption/AnswerOption';
import PropTypes from 'prop-types';
import QuestionCount from './QuestionCount/QuestionCount';

function Quiz(props) {
    
    function renderAnswerOptions(key, idListItem) {

        const is_selected = props.quizRedux.selectedItem === idListItem;

          return (
        <AnswerOption
           
            isSelected={is_selected}
            
            key={idListItem}
            answerContent={key.text}
            answerType={key.value}
            answer={props.quizRedux.answer}
            questionId={props.quizRedux.questionId}
 
            onAnswerSelected={props.onAnswerSelected.bind(this, idListItem)}

            styleAnswer={props.quizRedux.styleAnswer}
            number={idListItem}
            
        />
        );     
        }
    
        
            return (

                <div className="Quiz" key={props.quizRedux.questionId}>
                    <QuestionCount 
                        counter={props.quizRedux.questionId} 
                        total={props.quizRedux.questionLength} 
                     />
                    <Question 
                        content={props.quizRedux.question}

                    />
                    <ul className="Quiz-answerOptions">
                        {props.quizRedux.answerOptions.map(renderAnswerOptions)}
                    </ul>
                </div>
              
            )
  

    
}
Quiz.propTypes = {
    answer: PropTypes.string.isRequired,
    answerOptions: PropTypes.array.isRequired,
    //counter: PropTypes.number.isRequired,
    question: PropTypes.string.isRequired,
    questionId: PropTypes.number.isRequired,
    questionTotal: PropTypes.number.isRequired,
    onAnswerSelected: PropTypes.func.isRequired
    };
export default Quiz;