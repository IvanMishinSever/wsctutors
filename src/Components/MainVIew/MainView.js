import React from 'react';
import Category from './Category/Category';
import FirstContent from './FirstContent/FirstContent';
import List from "./List/List";
import './MainView.css';


export default class MainView extends React.Component {



    render() {
        return (
            <div className="MainView">
             {/* <Category categoryView={this.props.categoryView} idCategory={this.props.idCategory} /> */}
              <FirstContent categoryView={this.props.categoryView} />
              <List categoryView={this.props.categoryView} idCategory={this.props.idCategory} />  
            </div>
            )
    }
}