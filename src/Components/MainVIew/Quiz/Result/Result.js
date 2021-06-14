import React from 'react';
import PropTypes from 'prop-types';
import './Result.css';
import { getInitialState, repeatQuiz } from '../quizSlice.js';
import { showCategoryView } from '../../../Menu/MenuSide/menuSideSlice';

function Result(props) {
    
   const onClickEnd = () => {
    const { dispatch } = props;
        dispatch(getInitialState());
        dispatch(showCategoryView());
   };

   const onClickRepeat =() => {
       const { dispatch } = props;
       dispatch(repeatQuiz());
   }

    return (
        <div className="Result">
            Вы ответили правильно на <strong>{props.trueAnswer}</strong>  
            из <strong>{props.questionTotal}</strong>  вопросов.
            Ваш результат 
                <strong>
                {Math.floor((props.trueAnswer/props.questionTotal)*100)}%
                </strong>
                <button onClick = {onClickEnd}>Закончить</button>
                <button onClick = {onClickRepeat}>Повторить</button>
        </div>
    )
}

Result.propTypes = {
    quizResult: PropTypes.string.isRequired,
}
export default Result;