import React from 'react';
import Category from './Category/Category';
import './MainView.css';
import './Category/Category'

export default class MainView extends React.Component {


    render() {
        return (
            <div>
                <Category />
            </div>
        )
    }
}