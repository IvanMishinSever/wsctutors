import React from 'react';
//import Category from './Category/Category';
import FirstContent from './FirstContent/FirstContent';
import MainCategory from "./MainCategory/MainCategory";
import Nodes from './Nodes/Nodes';
import './MainView.css';
//
import TestCategory from './Category/CategoryDataTests';
const testCategory = TestCategory;

export default class MainView extends React.Component {
constructor(props) {
    super(props);
   /* this.state = {
        idList : "",
       // listExist: false,
       // number: [],
    } */
    //this.setIdList = this.setIdList.bind(this);
    this.renderAllCategory = this.renderAllCategory.bind(this);
    
}
//RENDER MAIN CATEGORY COMPONENT

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

renderNodes() {
if (this.props.categoryView) {
    return (
       
        testCategory.map((element, index) =>
            <Nodes  key={index}
                element={element} 
            />
        

        )
        
    )
}
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

              <FirstContent categoryView={this.props.categoryView} />

              {/*this.renderAllCategory()*/}
              
              {/*<List 
                categoryView={this.props.categoryView} 
                idCategory={this.props.idCategory}
                onClick={this.setIdList} 
              /> */ }
               {this.renderNodes()} 

            </div>
            )
    }
}