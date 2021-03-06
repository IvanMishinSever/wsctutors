import React from 'react';
import './Category.css';
import SubCategory from './SubCategory/SubCategory';

import {chooseCategory} from "../../../utils/chooseSubCategory";

 //ADD CATEGORY
 //const courseCategory = ['Инженерная геология','Строительная механика','Железобетоные конструкции'];
 //const testCategory = ['Инженерная геология-test','Строительная механика-test','Жеезобетоные конструкции-test'];
 /*
 const testCategory = TestCategory;
 const courseCategory = CourseCategory;
 //CHOOSE CATEGORY
 
 const chooseCategory = (id) => {
     if (id === "1") {
         return courseCategory;
     } else if (id === "2") {
         return testCategory;
     } 
     /*else {
        // alert("change number of the category id!");
        return null;
     }

 }
 */
 //CATEGORY CLASS
export default class Category extends React.Component {
        constructor(props) {
            super(props);
            this.state = {
                subCategoryView: false,
                idSubCategory: "",
                finalListsView: false,
                idFinalLists: ""
                
            }
            this.handleClick = this.handleClick.bind(this);
            this.onClickFinalLists = this.onClickFinalLists.bind(this);
        }
    handleClick(e) {
 
        this.setState({
            subCategoryView: true,
            idSubCategory: e.target.value,
            finalListsView: false,
            idFinalLists: ""
        })
    }

    onClickFinalLists(e) {
        this.setState(
            {
                finalListsView: true,
                idFinalLists: e
            }
        )
        
    }
    //CLEARE STATE SUBCATEGORY
    
    clearSubCategory() {
        this.setState(
            {
                subCategoryView: false,
                idSubCategory: "",
        
        
            } )
    }

    render() {
        let showInfo = this.props.categoryView;
       //RECEIVE ID CATEGORY
        let idCategory = this.props.idCategory;
        let nameCategory = chooseCategory(idCategory);
        console.log(this.state);
        if (showInfo) {
            /*return (
                <div  className="Category">
                    <h3>Каталог {idCategory}</h3>
                    <ul>
                        <li><button onClick={this.handleClick} value="1">{nameCategory[0]}</button></li>
                        <li><button onClick={this.handleClick} value="2">{nameCategory[1]}</button></li>
                        <li><button onClick={this.handleClick} value="3">{nameCategory[2]}</button></li>


                    </ul>
                    <SubCategory subcategoryView={this.state.subCategoryView} idSubCategory={this.state.idSubCategory} idCategory={this.props.idCategory}/>
                </div>
           
    
                )*/
                return (
                    <div  className="Category">
                        <h3>Каталог {idCategory}</h3>
                        <ul> {
                            nameCategory.map( (item, index) => (
                                <li key={item.id}>
                                    <button 
                                        onClick={this.handleClick} 
                                        value={String(index)}>{item.label} in{index} id{item.id}
                                    </button>
                                </li>
                                
                            ))
                            }
                        </ul>
                        <SubCategory 
                            onClick={this.onClickFinalLists} 
                            subcategoryView={this.state.subCategoryView} 
                            finalListsView={this.state.finalListsView}  
                            idSubCategory={this.state.idSubCategory} 
                            idCategory={this.props.idCategory}
                            idFinalLists={this.state.idFinalLists} 
                        />
                    </div>
               
        
                    )





            }  else return null;
       
      
    }
}