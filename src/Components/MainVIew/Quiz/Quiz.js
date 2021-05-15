import React from 'react';
import './Quiz.css';
import Question from './Question/Question';
//import { CSSTransitionGroup } from 'react-transition-group';
import AnswerOption from './Question/AnswerOption/AnswerOption';
import PropTypes from 'prop-types';
import QuestionCount from './QuestionCount/QuestionCount';

function Quiz(props) {
    
    function renderAnswerOptions(key, idListItem) {

        const is_selected = props.isSelected === idListItem;

          return (
        <AnswerOption
            key={idListItem}
            answerContent={key.text}
            answerType={key.value}
            answer={props.answer}
            questionId={props.questionId}
 
            onAnswerSelected={props.onAnswerSelected.bind(this, idListItem)}
            styleAnswer={props.styleAnswer}
            isSelected={is_selected}
            number={idListItem}
            
        />
        );     
        }
    
        
            return (

                <div className="Quiz" key={props.questionId}>
                    <QuestionCount 
                        counter={props.questionId} 
                        total={props.questionTotal} 
                     />
                    <Question 
                        content={props.question}

                    />
                    <ul className="Quiz-answerOptions">
                        {props.answerOptions.map(renderAnswerOptions)}
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