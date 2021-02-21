import React from 'react';
import './Question.css';
import PropTypes from 'prop-types';
import './Question.css';

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
