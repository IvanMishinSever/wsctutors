import React from 'react';
import PropTypes from 'prop-types';
import './AnswerOption.css';

function AnswerOption(props) {
  /*
 let style;
 /*if (props.styleAnswer.flag) {
     
    style = {
        backgroundColor:"green"
    }
 }*/
 if (props.isSelected && props.styleAnswer.flag) {
     
    style = {
        backgroundColor:"green"
    }
 }
 if (props.isSelected && !props.styleAnswer.flag) {
     
    style = {
        backgroundColor:"red"
    }
 }

    return (
        <li className="AnswerOption"  >
            <input
             
            type="radio"
            className="radioCustomButton"
            name="radioGroup"
            id={props.number}
            value={props.answerType}
            disabled={props.answer}
            onChange={props.onAnswerSelected}
            />
            <label className="radioCustomLabel" htmlFor={props.number}>
        {props.answerContent} {/*props.number*/}
            </label>
        </li>
    )
}
AnswerOption.propTypes = {
    answerType: PropTypes.string.isRequired,
    answerContent: PropTypes.string.isRequired,
    answer: PropTypes.string.isRequired,
    onAnswerSelected: PropTypes.func.isRequired
    };
export default AnswerOption;