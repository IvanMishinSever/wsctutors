import React from 'react';
import './MenuSide.css';


export default class MenuSide extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            categoryView: false,
        }
        this.handleClick = this.handleClick.bind(this);
    }
    
    handleClick() {
        this.setState({
            categoryView: true
        })
        console.log(this.state.categoryView);
        

    }
    render() {
        return (
            <div className="MenuSide">
                <ul>
                    <li>
                        <div><button  onClick={this.handleClick}>Курсы</button></div>
                    </li>
                    <li>
                        <div><a href="index.html" onClick={this.handleClick}>Тесты</a></div>
                        
                    </li>
                    
                </ul>
            </div>
        )
    }
}