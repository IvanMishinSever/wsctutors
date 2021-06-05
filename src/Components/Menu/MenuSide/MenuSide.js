import React from 'react';
import './MenuSide.css';
import {showFirstContentView, addMenuNodes, loadMenuNodes } from "../MenuSide/menuSideSlice";
/*
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
      onShowFirstContent =() => {
        console.log(showFirstContentView);
          this.props.dispatch(showFirstContentView());
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
                        <button onClick={this.onShowFirstContent} value="2">Example</button>
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
*/
const MenuSide = (props) => {
 const { dispatch } = props;

    const handleClick = (e) => {
        const id = e.target.value;
        props.chooseCategory(id);
 
      }
// SET ID CATEGORY AND FETCH NODES
      const onShowCategoryRedux = (e) => {
        const id = e.target.value;
        dispatch(addMenuNodes(id));
        dispatch(loadMenuNodes());
        
      }
/*
    const onShowFirstContent =() => {
        console.log(showFirstContentView);
        dispatch(showFirstContentView());
      }

*/
        return (
            <div className="MenuSide">
                <ul >
                    <li>
                        <button onClick={handleClick} value="0"> Курсы </button>
                    </li>
                    <li>
                        <button onClick={handleClick} value="1"> Тесты </button>
                        <button onClick={onShowCategoryRedux} value="2">Example</button>
                    </li>
                    
                    
                </ul>
                <form onClick={handleClick}>
                    <input type="radio" name="src" value="1" /> fast
                    <input type="radio" name="src" value="2" /> slow
                    <input type="radio" name="src" value="3" /> cute
                    <input type="radio" name="src" value="4" /> eek
                </form>
            </div>
        )
    
}
export default MenuSide;