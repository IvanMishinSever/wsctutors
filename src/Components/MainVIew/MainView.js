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
        listExist: false,
       // number: [],
    }
    this.setIdList = this.setIdList.bind(this);
    this.renderAllCategory = this.renderAllCategory.bind(this);
    
}
//RENDER MAIN CATEGORY COMPONENT

renderAllCategory() {

    return (
        
        <MainCategory 
            categoryView={this.props.categoryView} 
            idCategory={this.props.idCategory}
            onClick={this.setIdList}
            idList={this.state.idList}
            listExist={this.state.listExist} 
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

              {this.renderAllCategory()}
              
              {/*<List 
                categoryView={this.props.categoryView} 
                idCategory={this.props.idCategory}
                onClick={this.setIdList} 
              /> */ }


            </div>
            )
    }
}