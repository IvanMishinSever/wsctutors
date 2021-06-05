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
    //const nameCategory = this.props.dataMenuNodes;
    const nameCategory = this.props.menuSide.dataMenuNodes;
    console.log(nameCategory);
   //const viewComponent = (nameCategory === false) ? false : this.props.categoryView;
    //const viewComponent = this.props.menuSide.categoryView;
    //console.log(nameCategory);
    const viewComponent = (nameCategory === false) ? false : this.props.menuSide.categoryView;
    //const viewComponent = true;
   /* nameCategory.map(element => {
        console.log(element);
    })
*/
    

    if (viewComponent) {
        return (
           <div className="MainView-nodes">
    
            {nameCategory.map((element, index) => 
                <Nodes  key={index}
                    element={element}
                    quizViewChange={this.props.quizViewChange}
                    quizViewChangeRedux={this.props.quizViewChangeRedux}

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