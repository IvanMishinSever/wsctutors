import React from 'react';
import './SubCategory.css';


 //ADD SUBCATEGORY
 const courseSubCategory_1 = ['Грунты_1','СП','ГОСТЫ'];
 const courseSubCategory_2 = ['Грунты_2','СП','ГОСТЫ'];
 const testSubCategory_1 = ['Грунты-test_1','СП-test','ГОСТ-test','R-test'];
 const testSubCategory_2 = ['Грунты-test_2','СП-test','ГОСТ-test','R-test'];
 const chooseSubCategory = (idCat,idSub) => {
     if (idCat === "1" && idSub == "1") {
         return courseSubCategory_1;
     } else if (idCat === "1" && idSub === "2") {
         return courseSubCategory_2;
     } else if (idCat === "2" && idSub === "1") {
        return testSubCategory_1;
    }else if (idCat === "2" && idSub === "2") {
        return testSubCategory_2;
    }else {
        // alert("change number of the category id!");
        return null;
     }
 
 }
export default class SubCategory extends React.Component  {

    render() {
        let showInfo = this.props.subcategoryView;
       // let showInfo = true;
       //RECEIVE SUBCATEGORY and CATEGORY
       let idSubCategory = this.props.idSubCategory;
       //let idSubCategory = "2";
       let idCategory = this.props.idCategory;
       let nameSubCategory = chooseSubCategory(idCategory, idSubCategory);
      
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
