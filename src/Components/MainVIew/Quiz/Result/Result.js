import React from 'react';
import PropTypes from 'prop-types';
import './Result';

function Result(props) {
    return (
        <div className="Result">
            Вы ответили правильно на 1 вопросов.
            Ваш результат <strong>{props.quizResult}</strong>
        </div>
    )
}

Result.propTypes = {
    quizResult: PropTypes.string.isRequired,
}
export default Result;