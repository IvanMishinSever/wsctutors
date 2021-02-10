import React from 'react';
import PropTypes from 'prop-types';
import './AnswerOption.css';

function AnswerOption(props) {
    return (
        <li className="AnswerOption">
            <input 
            type="radio"
            className="radioCustomButton"
            name="radioGroup"
            id={props.answerType}
            value={props.answerType}
            disabled={props.answer}
            />
            <label className="radioCustomLabel" htmlFor={props.answerType}>
        {props.answerContent}
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