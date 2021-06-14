import React from 'react';
import './Nodes.css';
import { quizLoad } from '../../Quiz/quizSlice.js';
import { closeCategoryView } from '../../../Menu/MenuSide/menuSideSlice.js';

export default class Nodes extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            expanded: false,
           
        }
        
        this.showNodes = this.showNodes.bind(this);
        this.onShowQuiz=this.onShowQuiz.bind(this);
    }
 

    //REDUX SHOW QUIZ
    onShowQuiz(e) {
       const {dispatch} = this.props;
        let expanded = !this.state.expanded;
        //console.log(this.props);

        if (!this.props.element.nodes) {
             const id = e.target.value;

            dispatch(quizLoad(id));
            dispatch(closeCategoryView());

           
        } else {
            this.setState({
                expanded: expanded
            })
           
        }
    }

   
    //SHOW NODES
    showNodes() {
        let arrayNodes = [];
       // console.log(arrayNodes);
       const { dispatch } = this.props;
      // console.log(this.props);
        if (this.props.element.nodes ) {


           //print nodes 
            this.props.element.nodes.map((element, index) => (
                arrayNodes.push(
                <Nodes 
                key={index} 
                element={element} 
                quizViewChangeRedux={this.props.quizViewChangeRedux}
                dispatch={dispatch}
              
                />)
            ));
            }
            return arrayNodes;
        }
        //RENDER BUTTON
     renderButton() {
         const sign = this.props.element.nodes;
         //console.log(sign);
         //console.log(this.props.menuSide);
         //CHANGE COLOR OF THE BUTTON
         let styleButton;
         if (this.state.expanded) {
             styleButton ={
                backgroundColor:"green"
            }
         }
        //RENDER body BUTTON
         if (sign) {
         return(
            <button     style={styleButton}
                        type="button"
                        onClick={this.onShowQuiz}
                    >+ {this.props.element.label}{this.props.element.id}</button>
         ) 
         } else {
            return(
                <button
                    type="button"
                    onClick={this.onShowQuiz}
                    value={this.props.element.id}
                    
                > - {this.props.element.id}{this.props.element.label}</button>
             )   
         }
     }   
    

    //RENDER NODE
    render() {
 
        return (
            <div className="Nodes-container">
                <div className="Nodes">
                {this.renderButton()}
                {this.state.expanded && <div> {this.showNodes()} </div>}
                </div>

            </div>
            
        );
    }

    
}