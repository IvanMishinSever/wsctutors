import React from 'react';
import './Question.css';
import PropTypes from 'prop-types';

function Question(props) {
        
        return (
            <div className="Question">
                <h2>{props.content}</h2>
            </div>
        )
}
Question.propTypes = {
    content: PropTypes.string.isRequired
  };
export default Question;
