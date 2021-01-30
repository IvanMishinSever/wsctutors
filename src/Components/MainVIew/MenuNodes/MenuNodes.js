import React from 'react';
import './MenuNodes.css';
import Nodes from './Nodes/Nodes';
import { chooseMainCategory } from '../../../utils/chooseSubCategory';
export default class MenuNodes extends React.Component {
  constructor(props) {
      super(props);
  }
    //RENDER MENU NODES
renderNodes() {
    const nameCategory = chooseMainCategory(this.props.idCategory);
    const viewComponent = (nameCategory === false) ? false : this.props.categoryView;
    
    if (viewComponent) {
        return (
           <div className="MainView-nodes">
    
            {nameCategory.map((element, index) => 
                <Nodes  key={index}
                    element={element}
                    quizView={this.props.quizView}
                  />
             
                  )}
            </div>  
        )
        
    }
    }
    render() {
        return (
            <div className="MenuNodes">
                {this.renderNodes()}
            </div>
        )
    }
}