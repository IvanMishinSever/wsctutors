import React from 'react';
import './Category.css';
import SubCategory from './SubCategory/SubCategory';
import TestCategory from './CategoryDataTests';
import CourseCategory from "./CategoryDataCourses";

 //ADD CATEGORY
 //const courseCategory = ['Инженерная геология','Строительная механика','Железобетоные конструкции'];
 //const testCategory = ['Инженерная геология-test','Строительная механика-test','Жеезобетоные конструкции-test'];
 const testCategory = TestCategory;
 const courseCategory = CourseCategory;
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
 */
 }
 //CATEGORY CLASS
export default class Category extends React.Component {
        constructor(props) {
            super(props);
            this.state = {
                subCategoryView: false,
                idSubCategory: ""
            }
            this.handleClick = this.handleClick.bind(this);
        }
    handleClick(e) {
 
        this.setState({
            subCategoryView: true,
            idSubCategory: e.target.value
        })
    }
    render() {
        let showInfo = this.props.categoryView;
       //RECEIVE ID CATEGORY
        let idCategory = this.props.idCategory;
        let nameCategory = chooseCategory(idCategory);
  
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
                                <li key={item.id}><button onClick={this.handleClick} value={String(index)}>{item.label} {index} {item.id}</button></li>
                                
                            ))
                            }
                        </ul>
                        <SubCategory subcategoryView={this.state.subCategoryView} idSubCategory={this.state.idSubCategory} idCategory={this.props.idCategory}/>
                    </div>
               
        
                    )





            }  else return null;
       
      
    }
}