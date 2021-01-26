import React from 'react';
import './Footer.css';

export default class Footer extends React.Component {
    render() {
        return (
            <div className="Footer">
                <ul>
                    <li>О проекте</li>
                    <li>Контакты</li>
                    <li>Отзывы</li>
                    <li>Помощь</li>
                    <li>Условия использования</li>
                    <li>Политика конфидициальности</li>


                </ul>
            </div>
        )
    }
}