import React from 'react';
import Category from './Category/Category';
import SubCategory from './Category/SubCategory/SubCategory';
import './MainView.css';


export default class MainView extends React.Component {

    render() {
        return (
            <div className="MainView">
              <Category categoryView={this.props.categoryView} /> 

            </div>
        )
    }
}