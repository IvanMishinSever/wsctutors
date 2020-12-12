import React from 'react';
import './MenuSide.css';


export default class MenuSide extends React.Component {
    render() {
        return (
            <div className="MenuSide">
                <ul>
                    <li>
                        <div><a href="index.html">Курсы</a></div>
                    </li>
                    <li>
                        <div><a href="index.html">Тесты</a></div>
                        
                    </li>
                    
                </ul>
            </div>
        )
    }
}