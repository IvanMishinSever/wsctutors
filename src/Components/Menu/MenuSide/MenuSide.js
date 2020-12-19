import React from 'react';
import './MenuSide.css';


export default class MenuSide extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            categoryView: false,
        }
        this.onClick = this.onClick.bind(this);
    }
    
    onClick() {
        this.setState({
            categoryView: true
        })
        //console.log(this.state.categoryView);
        

    }
    render() {
        return (
            <div className="MenuSide">
                <ul>
                    <li>
                        <div><button  showCategory={this.state.categoryView} onClick={this.onClick}>Курсы</button></div>
                    </li>
                    <li>
                        <div><a href="index.html" onClick={this.onClick}>Тесты</a></div>
                        
                    </li>
                    
                </ul>
            </div>
        )
    }
}