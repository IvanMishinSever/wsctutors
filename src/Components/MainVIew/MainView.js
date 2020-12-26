import React from 'react';
import Category from './Category/Category';

import './MainView.css';


export default class MainView extends React.Component {

    render() {
        return (
            <div className="MainView">
              <Category categoryView={this.props.categoryView} idCategory={this.props.idCategory} /> 

            </div>
        )
    }
}