  
import React from 'react';
import PropTypes from 'prop-types';
import './AnswerOption.css';
//import {onAnswerSelected } from "../../quizSlice.js";

function AnswerOption(props) {
  
 let style;
 const pointer = props.pointer;  //block checking other questions

 if (props.isSelected && props.styleAnswer.flag) {
     
    style = {
        backgroundColor:"green",
        pointerEvents: pointer,
    }
 }
 if (props.isSelected && !props.styleAnswer.flag) {
  style = {
        backgroundColor:"red",
        pointerEvents: pointer,
    }
 }

 if (!props.isSelected) {

    style = {
        pointerEvents: pointer,
    }
 }






 
    return (
        <li className="AnswerOption" style={style} >
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

export default AnswerOption;