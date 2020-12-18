import React from 'react';
import './MenuLeft.css';


export default class MenuLeft extends React.Component {
    render() {
        return (
            <div className="MenuLeft">
                <ul>
                    <li><div><a href="index.html">Курсы</a></div></li>
                    <li><div><a href="index.html">Тесты</a></div></li>
                    <li><div><a href="index.html">Цены</a></div></li>
                </ul>
            </div>
        )
    }
}