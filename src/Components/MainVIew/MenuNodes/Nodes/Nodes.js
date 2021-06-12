import React from 'react';
import './Nodes.css';
import { quizLoad } from '../../Quiz/quizSlice.js';
import { showCategoryView } from '../../../Menu/MenuSide/menuSideSlice.js';

export default class Nodes extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            expanded: false,
           // nodesExist: false
        }
        //this.handleClick = this.handleClick.bind(this);
        this.showNodes = this.showNodes.bind(this);
        this.onShowQuiz=this.onShowQuiz.bind(this);
    }
    
    /*
    //SWITCH  EXPANDED
    handleClick(e) {
        let expanded = !this.state.expanded;
        //console.log("hi");
       // console.log(this.props.element.nodes);
        //SHOW QUIZ AND SEND QUIZ ID
        console.log(this.props);
       if (!this.props.element.nodes) {
        const id = e.target.value;

        this.props.chooseQuizId(id);



            this.props.quizViewChange(); 
            //this.props.quizViewChangeRedux();
            //console.log("h11111");
        }
        //this.props.quizView();
        this.setState({
            expanded: expanded
        })
        
     
    }*/

    //REDUX SHOW QUIZ
    onShowQuiz(e) {
       const {dispatch} = this.props;
        let expanded = !this.state.expanded;
        //console.log(this.props);

        if (!this.props.element.nodes) {
             const id = e.target.value;

            //this.props.chooseQuizId(id);

            dispatch(quizLoad(id));
            dispatch(showCategoryView());

           
        } else {
            this.setState({
                expanded: expanded
            })
           
        }
    }

/*
                // change state!!!!!!!!!!!!!
    checkNodes() {
        if (this.props.element.nodes) {
        this.setState({
            nodesExist: true
        })
        }
    }            
     */           
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
        
        //console.log(this.props.menuSide.expanded);
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