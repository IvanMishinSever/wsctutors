import React from 'react';
import './Quiz.css';
import Question from './Question/Question';

export default class Quiz extends React.Component {
 
    render() {
        if (this.props.quizView) {
            return (
                <div className="Quiz">
                    <Question />
                </div>
            )
        } else return null;

    }
}