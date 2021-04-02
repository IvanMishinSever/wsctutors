import React from 'react';
import './MenuRight.css';


export default class MenuRight extends React.Component {
    render() {
        return (
            <div className="MenuRight">
                <p id="admin">Admin</p>
                <p>Найти</p>
                <p>Личный кабинет</p>
            </div>
        )
    }
}