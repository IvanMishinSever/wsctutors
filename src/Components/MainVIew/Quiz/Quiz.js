import React from 'react';
import './Quiz.css';
import Question from './Question/Question';
//import { CSSTransitionGroup } from 'react-transition-group';
import AnswerOption from './Question/AnswerOption/AnswerOption';
import PropTypes from 'prop-types';
import QuestionCount from './QuestionCount/QuestionCount';
import Feedback from './Feedback/Feedback';

function Quiz(props) {
    
    function renderAnswerOptions(key, idListItem) {

        const is_selected = props.quizRedux.selectedItem === idListItem;


          return (
        <AnswerOption
            
            isSelected={is_selected}
            pointer={props.quizRedux.pointer}
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
    //
        const renderFeedback = () => {
            if (props.quizRedux.selectedItem) {
            return (
                <Feedback 
                feedback={props.quizRedux.answerOptions}
                isSelected={props.quizRedux.selectedItem}
            />
            )
            } else return null;
        }


        // 
        const nextQuestion = () => {
            let style;
          
           if (props.quizRedux.selectedItem != null) {
                style = ''
            } else {
                style = 'disabled'
            }
 
           
            return (
                <div>
                    <button onClick={props.nextQuestion}  disabled={style}>Следующий</button>
                </div>
            )

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
                    <ul className="Quiz-answerOptions" >
                        {props.quizRedux.answerOptions.map(renderAnswerOptions)}
                    </ul>
                    {renderFeedback()}
                    {nextQuestion()}
                   
                    
                </div>
              
            )
  

    
}
/*
Quiz.propTypes = {
    answer: PropTypes.string.isRequired,
    answerOptions: PropTypes.array.isRequired,
    //counter: PropTypes.number.isRequired,
    question: PropTypes.string.isRequired,
    questionId: PropTypes.number.isRequired,
    questionTotal: PropTypes.number.isRequired,
    onAnswerSelected: PropTypes.func.isRequired
    };
    */
export default Quiz;