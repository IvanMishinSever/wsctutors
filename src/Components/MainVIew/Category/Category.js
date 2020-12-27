import React from 'react';
import './Category.css';
import SubCategory from './SubCategory/SubCategory';

 //ADD CATEGORY
 const courseCategory = ['Инженерная геология','Строительная механика','Железобетоные конструкции'];
 const testCategory = ['Инженерная геология-test','Строительная механика-test','Жеезобетоные конструкции-test'];
 const chooseCategory = (id) => {
     if (id === "1") {
         return courseCategory;
     } else if (id === "2") {
         return testCategory;
     } else {
        // alert("change number of the category id!");
        return null;
     }
 
 }
 //CATEGORY CLASS
export default class Category extends React.Component {
        constructor(props) {
            super(props);
            this.state = {
                subCategory_1: false,
                idSubCategory: "2"
            }
            this.handleClick = this.handleClick.bind(this);
        }
    handleClick(e) {
 
        this.setState({
            subCategory_1: true,
            idSubCategory: e.target.value
        })
    }
    render() {
        let showInfo = this.props.categoryView;
       //RECEIVE ID CATEGORY
        let idCategory = this.props.idCategory;
        let nameCategory = chooseCategory(idCategory);
  
        if (showInfo) {
            return (
                <div  className="Category">
                    <h3>Каталог {idCategory}</h3>
                    <ul>
                        <li><button onClick={this.handleClick} value="1">{nameCategory[0]}</button></li>
                        <li><button onClick={this.handleClick} value="2">{nameCategory[1]}</button></li>
                        <li><button onClick={this.handleClick} value="3">{nameCategory[2]}</button></li>
                    </ul>
                    <SubCategory subcategoryView={this.state.subCategory_1} idSubCategory={this.state.idSubCategory} idCategory={this.props.idCategory}/>
                </div>
           
    
                )
            }  else return null;
       
      
    }
}