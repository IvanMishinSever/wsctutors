import React from 'react';
import './Menu.css';
import MenuSide from './MenuSide/MenuSide';


export default class Menu extends React.Component {
    render() {
        return (
            <div className="Menu">
                <MenuSide onClick={this.props.onClick}/>
                
            </div>
        )
    }
}