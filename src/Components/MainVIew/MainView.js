import React from 'react';
//import Category from './Category/Category';
import FirstContent from './FirstContent/FirstContent';
//import MainCategory from "./MainCategory/MainCategory";
//import Nodes from './Nodes/Nodes';
import Quiz from './Quiz/Quiz';
import MenuNodes from './MenuNodes/MenuNodes';
import './MainView.css';
//
// import { chooseMainCategory } from '../../utils/chooseSubCategory';



export default class MainView extends React.Component {
constructor(props) {
    super(props);
    /*this.state = {
       // idList : "",
       // listExist: false,
       // number: [],
       quizView: false,
    } */
    //this.setIdList = this.setIdList.bind(this);
   // this.renderAllCategory = this.renderAllCategory.bind(this);
    //this.handlerQuizView = this.handlerQuizView.bind(this);
}
//RENDER MAIN CATEGORY COMPONENT
/*
renderAllCategory() {

    return (
        
        <MainCategory 
            categoryView={this.props.categoryView} 
            idCategory={this.props.idCategory}
            
            idList={this.props.idList}
            listExist={this.props.listExist}
            setIdList={this.props.setIdList}
            
        />
        )
    
}
*/
/*//RENDER MENU NODES
renderNodes() {
const nameCategory = chooseMainCategory(this.props.idCategory);
const viewComponent = (nameCategory === false) ? false : this.props.categoryView;

if (viewComponent) {
    return (
       <div className="MainView-nodes">

        {nameCategory.map((element, index) => 
            <Nodes  key={index}
                element={element}
              />
         
              )}
        </div>  
    )
    
}
}*/

//HANDLER QUIZ VIEW
/*
handlerQuizView() {
    this.setState(
        {quizView: true}
    )
}
*/
//RENDER MENU NODES

renderMenuNodes() {
    return (
        <div>
            <MenuNodes 
            categoryView={this.props.categoryView} 
            idCategory={this.props.idCategory}
            quizViewChange={this.props.quizViewChange}
            />
        </div>
    )
}
//RENDER QUIZ

renderQuiz() {
    return (
        <div>
            <Quiz 
            quizView={this.props.quizView}

            />
        </div>
    )
}

//SET ID LIST
/*setIdList(id, listExist) {
   
    this.setState({
        idList: id,
       // listExist: listExist
    })
    
    //this.showID();
}
*/

    render() {


        return (
            <div className="MainView">
             {/* <Category categoryView={this.props.categoryView} idCategory={this.props.idCategory} /> */}

              <FirstContent firstContentView={this.props.firstContentView} />

              {/*this.renderAllCategory()*/}
              
              {/*<List 
                categoryView={this.props.categoryView} 
                idCategory={this.props.idCategory}
                onClick={this.setIdList} 
              /> */ }
               {/*this.renderNodes()*/}
               {this.renderMenuNodes()}
               {this.renderQuiz()} 

            </div>
            )
    }
}