import React from 'react';
import './MenuLeft.css';


export default class Header extends React.Component {
    render() {
        return (
            <div className="MenuLeft">
                <ul>
                    <li>Курсы</li>
                    <li>Тесты</li>
                    <li>Цены</li>
                </ul>
            </div>
        )
    }
}