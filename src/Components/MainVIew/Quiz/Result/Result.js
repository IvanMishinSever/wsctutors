import React from 'react';
import PropTypes from 'prop-types';
import './Result';

function Result(props) {
    return (
        <div className="Result">
            Вы ответили правильно на <strong>{props.trueAnswer}</strong>  
            из <strong>{props.questionTotal}</strong>  вопросов.
            Ваш результат 
                <strong>
                {Math.floor((props.trueAnswer/props.questionTotal)*100)}%
                </strong>
        </div>
    )
}

Result.propTypes = {
    quizResult: PropTypes.string.isRequired,
}
export default Result;