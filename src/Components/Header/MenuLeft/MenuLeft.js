import React from 'react';
import './MenuLeft.css';


export default class MenuLeft extends React.Component {
    render() {
        return (
            <div className="MenuLeft">
                <ul>
                    <li><div><a href="index.html">Начало</a></div></li>
                    <li><div><a href="index.html">О проекте</a></div></li>
                    <li><div><a href="index.html">Контакты</a></div></li>
                    <li><div><a href="index.html">Отзывы</a></div></li>
                </ul>
            </div>
        )
    }
}