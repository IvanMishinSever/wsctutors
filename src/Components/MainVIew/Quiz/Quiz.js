import React from 'react';
import './Quiz.css';
import Question from './Question/Question';
import AnswerOption from './Question/AnswerOption/AnswerOption';
import PropTypes from 'prop-types';

function Quiz(props) {
    
    function renderAnswerOptions(key) {
        return (
        <AnswerOption
            key={key.content}
            answerContent={key.content}
            answerType={key.type}
            answer={props.answer}
            questionId={props.questionId}
            onAnswerSelected={props.onAnswerSelected}
        />
        );
        }
    
        
            return (
                <div className="Quiz">
                    <Question 
                        content={props.question}

                    />
                    <ul>
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