import React from 'react';
import './Quiz.css';
import Question from './Question/Question';

export default class Quiz extends React.Component {
    render() {
        return (
            <div className="Quiz">
                <Question />
            </div>
        )
    }
}