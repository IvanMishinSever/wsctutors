import React from 'react';
import './Quiz.css';
import Question from './Question/Question';
//import { CSSTransitionGroup } from 'react-transition-group';
import AnswerOption from './Question/AnswerOption/AnswerOption';
import PropTypes from 'prop-types';
import QuestionCount from './QuestionCount/QuestionCount';

function Quiz(props) {
    
    function renderAnswerOptions(key, idListItem) {
      /*  return (
        <AnswerOption
            key={key.content}
            answerContent={key.content}
            answerType={key.type}
            answer={props.answer}
            questionId={props.questionId}
            onAnswerSelected={props.onAnswerSelected}
        />
        );*/
        const is_selected = props.isSelected === idListItem;
            console.log(idListItem);
            console.log(props.isSelected);
            //console.log(is_selected);

          return (
        <AnswerOption
            key={key.text}
            answerContent={key.text}
            answerType={key.label}
            answer={props.answer}
            questionId={props.questionId}
            //onAnswerSelected={props.onAnswerSelected.bind(idListItem)}
            onAnswerSelected={props.onAnswerSelected.bind(this, idListItem)}
            styleAnswer={props.styleAnswer}
            isSelected={is_selected}
            
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