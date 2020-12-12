import React from 'react';
import './Footer.css';

export default class Footer extends React.Component {
    render() {
        return (
            <div className="Footer">
                <ul>
                    <li>Курсы</li>
                    <li>Тесты</li>
                    <li>Цены</li>
                </ul>
            </div>
        )
    }
}