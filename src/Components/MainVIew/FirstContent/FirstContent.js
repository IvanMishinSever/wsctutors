import React from 'react';
import './FirstContent.css';

export default class FirstContent extends React.Component {
    render() {
        const showComponent = this.props.firstContentView;
        if (showComponent) {
            return (
                <div className="FirstContent">
                    <p>WELCOME! Great JOB! GOOD LUCK!</p>
                </div>
            )
        } else return null;
        
    }
}