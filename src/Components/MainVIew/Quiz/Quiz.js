import React from 'react';
import './Quiz.css';
import Question from './Question/Question';
import PropTypes from 'prop-types';

function Quiz(props) {
    
    
        
            return (
                <div className="Quiz">
                    <Question 
                        content={props.question}

                    />
                    <ul>
                        {props.answerOptions.map()}
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