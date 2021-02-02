import React from 'react';
import './Nodes.css';

export default class Nodes extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            expanded: false,
            nodesExist: false
        }
        this.toggle = this.toggle.bind(this);
        this.showNodes = this.showNodes.bind(this);
    }

    //SWITCH  EXPANDED
    toggle() {
        let expanded = !this.state.expanded;
        //console.log("hi");
       // console.log(this.props.element.nodes);

       if (!this.props.element.nodes) {
            this.props.quizViewChange();
            //console.log("h11111");
        }
        //this.props.quizView();
        this.setState({
            expanded: expanded
        })
        
       
    }
                // change state!!!!!!!!!!!!!
    checkNodes() {
        if (this.props.element.nodes) {
        this.setState({
            nodesExist: true
        })
        }
    }            
                
    //SHOW NODES
    showNodes() {
        let arrayNodes = [];
       // console.log(arrayNodes);
        if (this.props.element.nodes ) {


           //print nodes 
            this.props.element.nodes.map((element, index) => {
                arrayNodes.push(
                <Nodes 
                key={index} 
                element={element} 
                quizViewChange={this.props.quizViewChange}
                />);
            });
            }
            return arrayNodes;
        }
        //RENDER BUTTON
     renderButton() {
         const sign = this.props.element.nodes;
         //console.log(sign);

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
                        onClick={this.toggle}
                    >+ {this.props.element.label}{this.props.element.id}</button>
         ) 
         } else {
            return(
                <button
                    type="button"
                    onClick={this.toggle}
                > - {this.props.element.label}</button>
             )   
         }
     }   
    

    //RENDER NODE
    render() {
        //console.log(this.props.element);
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