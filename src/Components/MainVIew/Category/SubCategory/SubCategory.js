import React from 'react';
import './SubCategory.css';
import FinalLists from './FinalLists/FinalLists';
import {chooseSubCategory} from "../../../../utils/chooseSubCategory";

 //ADD SUBCATEGORY
 /*
 const courseSubCategory_1 = ['Грунты_1','СП','ГОСТЫ'];
 const courseSubCategory_2 = ['Грунты_2','СП','ГОСТЫ'];
 const testSubCategory_1 = ['Грунты-test_1','СП-test','ГОСТ-test','R-test'];
 const testSubCategory_2 = ['Грунты-test_2','СП-test','ГОСТ-test','R-test'];
 const chooseSubCategory = (idCat,idSub) => {
     if (idCat === "1" && idSub === "1") {
         return courseSubCategory_1;
     } else if (idCat === "1" && idSub === "2") {
         return courseSubCategory_2;
     } else if (idCat === "2" && idSub === "1") {
        return testSubCategory_1;
    }else if (idCat === "2" && idSub === "2") {
        return testSubCategory_2;
    }else {
        // alert("change number of the category id!");
        //return null;
     }
 
 }
 */
export default class SubCategory extends React.Component  {
    constructor(props) {
        super(props);
        this.state = {
            finalListsView: false,
            idFinalLists: ""
        }
        this.handleClick = this.handleClick.bind(this);
    }
    handleClick(e) {
 
        this.setState({
            finalListsView: true,
            idFinalLists: e.target.value
        })
    }

    render() {
        let showInfo = this.props.subcategoryView;
       // let showInfo = true;
       //RECEIVE SUBCATEGORY and CATEGORY 
       let idSubCategory = this.props.idSubCategory;
       //let idSubCategory = "2";
       let idCategory = this.props.idCategory;
       let nameSubCategory = chooseSubCategory(idCategory, idSubCategory);
       console.log(idCategory+" "+idSubCategory); 
      // console.log(nameSubCategory);
       if (showInfo) {
       /* return (
            <div  className="SubCategory">
                <ul>
                    <li><button onClick={this.handleClick} value="1">{nameSubCategory[0]}</button></li>
                    <li><button onClick={this.handleClick} value="2">{nameSubCategory[1]}</button></li>
                    <li><button>{nameSubCategory[2]}</button></li>
                    <li><button>{nameSubCategory[3]}</button></li>
                </ul>
                <FinalLists finalListsView={this.state.finalListsView}  idFinalLists={this.state.idFinalLists} idSubCategory={this.props.idSubCategory} idCategory={this.props.idCategory}/>
            </div>
                   )*/
                   return (
                    <div  className="SubCategory">
                        <ul>
                            { (nameSubCategory) && nameSubCategory.map((item, index) => (
                                    <li key={item.id}><button onClick={this.handleClick} value={String(index)}>{item.label} {index}</button></li>
                                ))}
                            
                            
                            
                          
                        </ul>
                        <FinalLists finalListsView={this.state.finalListsView}  idFinalLists={this.state.idFinalLists} idSubCategory={this.props.idSubCategory} idCategory={this.props.idCategory}/>
                    </div>
                           )
        }  else return null;

    }
}
