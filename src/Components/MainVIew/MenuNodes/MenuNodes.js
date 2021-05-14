import React from 'react';
import './MenuNodes.css';
import Nodes from './Nodes/Nodes';
import { chooseMainCategory } from '../../../utils/chooseSubCategory';
export default class MenuNodes extends React.Component {
 /*
    constructor(props) {
      super(props);
      this.state ={
          data: []
      }
  }
*/
 
    //RENDER MENU NODES
renderNodes() {
    //const nameCategory = chooseMainCategory(this.props.idCategory);
    const nameCategory = this.props.dataMenuNodes;
   // console.log(nameCategory);
    const viewComponent = (nameCategory === false) ? false : this.props.categoryView;
    
    if (viewComponent) {
        return (
           <div className="MainView-nodes">
    
            {nameCategory.map((element, index) => 
                <Nodes  key={index}
                    element={element}
                    quizViewChange={this.props.quizViewChange}
                    chooseQuizId = {this.props.chooseQuizId}
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