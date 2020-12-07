import React from 'react';
import './Header.css';
import MenuLeft from './MenuLeft/MenuLeft';
import MenuRight from './MenuRight/MenuRight';

export default class Header extends React.Component {
    render() {
        return (
            <div className="Header">
                <MenuLeft />
                <MenuRight />
            </div>
        )
    }
}