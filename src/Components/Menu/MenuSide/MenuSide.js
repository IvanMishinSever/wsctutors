import React from 'react';
import './MenuSide.css';
import {showFirstContentView, addMenuNodes, loadMenuNodes } from "../MenuSide/menuSideSlice";
import { getInitialState } from '../../MainVIew/Quiz/quizSlice.js';

const MenuSide = (props) => {
 const { dispatch } = props;



// SET ID CATEGORY AND FETCH, если курсы то другая функция
      const onShowCategoryRedux = (e) => {
        const id = e.target.value;
        if (id === 2)  {
            dispatch(loadMenuNodes());
            dispatch(getInitialState());
        } else {
            dispatch(loadMenuNodes());
            dispatch(getInitialState());
        }
  
      }

        return (
            <div className="MenuSide">
                <ul >
                    <li>
                        <button onClick={onShowCategoryRedux} value="0"> Курсы </button>
                    </li>
                    <li>
                        <button onClick={onShowCategoryRedux} value="1"> Тесты </button>
                        <button onClick={onShowCategoryRedux} value="2">Example</button>
                    </li>
                    
                    
                </ul>
               
            </div>
        )
    
}
export default MenuSide;