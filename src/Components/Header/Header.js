import React from 'react';
import './Header.css';
import MenuLeft from './MenuLeft/MenuLeft';

export default class Header extends React.Component {
    render() {
        return (
            <div className="Header">
                <MenuLeft />
            </div>
        )
    }
}