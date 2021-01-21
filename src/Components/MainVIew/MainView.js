import React from 'react';
//import Category from './Category/Category';
import FirstContent from './FirstContent/FirstContent';
import MainCategory from "./MainCategory/MainCategory";
import './MainView.css';


export default class MainView extends React.Component {
constructor(props) {
    super(props);
    this.state = {
        idList : "",
        number: [],
    }
    this.setIdList = this.setIdList.bind(this);
    this.renderAllCategory = this.renderAllCategory.bind(this);
    
}
//RENDER LISTS
renderAllCategory(nameList) {

    return (
        
        <MainCategory 
       categoryView={this.props.categoryView} 
        idCategory={this.props.idCategory}
        onClick={this.setIdList}
        idList={this.state.idList} 
        />
        )
    
}

//SET ID LIST
setIdList(id) {
   
    this.setState({
        idList: id
    })
    
    //this.showID();
}


    render() {


        return (
            <div className="MainView">
             {/* <Category categoryView={this.props.categoryView} idCategory={this.props.idCategory} /> */}
              <FirstContent categoryView={this.props.categoryView} />
              {this.renderAllCategory(this.state.idList)}
              
              {/*<List 
                categoryView={this.props.categoryView} 
                idCategory={this.props.idCategory}
                onClick={this.setIdList} 
              /> */ }


            </div>
            )
    }
}