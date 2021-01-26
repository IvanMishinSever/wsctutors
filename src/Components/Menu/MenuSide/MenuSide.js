import React from 'react';
import './MenuSide.css';


export default class MenuSide extends React.Component {
    constructor(props) {
        super(props);
       
        this.handleClick = this.handleClick.bind(this);
    }
    
    handleClick(e) {
        const id = e.target.value;
        //const id = 1;
        this.props.chooseCategory(id);
       // console.log(id);

      }
      
//<ul onClick={this.props.handleClick}>
    render() {
        return (
            <div className="MenuSide">
                <ul >
                    <li>
                        <button onClick={this.handleClick} value="0"> Курсы </button>
                    </li>
                    <li>
                        <button onClick={this.handleClick} value="1"> Тесты </button>
                        <button onClick={this.handleClick} value="2">Example</button>
                    </li>
                    
                    
                </ul>
                <form onClick={this.handleClick}>
                    <input type="radio" name="src" value="1" /> fast
                    <input type="radio" name="src" value="2" /> slow
                    <input type="radio" name="src" value="3" /> cute
                    <input type="radio" name="src" value="4" /> eek
                </form>
            </div>
        )
    }
}