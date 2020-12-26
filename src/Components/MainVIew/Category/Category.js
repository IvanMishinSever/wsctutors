import React from 'react';
import './Category.css';
import SubCategory from './SubCategory/SubCategory';

 //ADD CATEGORY
 const courseCategory = ['Инженерная геология','Строительная механика','Железобетоные конструкции'];
 const testCategory = ['Инженерная геология-test','Строительная механика-test','Жеезобетоные конструкции-test'];
 const chooseCategory = (id) => {
   /*  let nameCategory;
     if (id === 1) {
         return nameCategory = courseCategory;
     } else if (id === 2) {
         return nameCategory = testCategory;
     }
     */
    // let nameCategory;
     if (id === 1) {
         return courseCategory;
     } else if (id === 2) {
         return testCategory;
     } else {
         alert("change number of the category id!");
     }
 
 }
 //CATEGORY CLASS
export default class Category extends React.Component {
        constructor(props) {
            super(props);
            this.state = {
                subCategory_1: false,
               // idCategory: this.props.idCategory
            }
            this.handleClick = this.handleClick.bind(this);
        }
    handleClick() {
        this.setState({
            subCategory_1: true
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
                    <ul>
                        <li><button onClick={this.handleClick}>{nameCategory[0]}</button></li>
                        <li><button>{nameCategory[1]}</button></li>
                        <li><button>{nameCategory[2]}</button></li>
                    </ul>
                    <SubCategory subcategoryView={this.state.subCategory_1} />
                </div>
           
    
                )
            }  else return null;
       
      
    }
}