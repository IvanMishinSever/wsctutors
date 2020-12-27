import React from 'react';
import './SubCategory.css';


 //ADD SUBCATEGORY
 const courseSubCategory = ['Грунты','СП','ГОСТЫ'];
 const testSubCategory = ['Грунты-test','СП-test','ГОСТ-test','R-test'];
 const chooseSubCategory = (id) => {
     if (id === "1") {
         return courseSubCategory;
     } else if (id === "2") {
         return testSubCategory;
     } else {
        // alert("change number of the category id!");
        return null;
     }
 
 }
export default class SubCategory extends React.Component  {

    render() {
        let showInfo = this.props.subcategoryView;
       // let showInfo = true;
       //RECEIVE SUBCATEGORY
       let idSubCategory = this.props.idSubCategory;
       //let idSubCategory = "2";
       let nameSubCategory = chooseSubCategory(idSubCategory);
       if (showInfo) {
        return (
            <div  className="SubCategory">
                <ul>
                    <li><button>{nameSubCategory[0]}</button></li>
                    <li><button>{nameSubCategory[1]}</button></li>
                    <li><button>{nameSubCategory[2]}</button></li>
                    <li><button>{nameSubCategory[3]}</button></li>
                </ul>
            </div>
       

            )
        }  else return null;

    }
}
