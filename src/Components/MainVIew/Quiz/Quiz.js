import React from 'react';
import './Quiz.css';
import Question from './Question/Question';
//import { CSSTransitionGroup } from 'react-transition-group';
import AnswerOption from './Question/AnswerOption/AnswerOption';
import PropTypes from 'prop-types';
import QuestionCount from './QuestionCount/QuestionCount';

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
              /*  <CSSTransitionGroup
                className="container"
                component="div"
                transitionName="fade"
                transitionEnterTimeout={800}
                transitionLeaveTimeout={500}
                transitionAppear
                transitionAppearTimeout={500}
              >*/
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
               // </CSSTransitionGroup>
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