import React from 'react';
import './FinalLists.css';


 //ADD FINALLISTS
 const finalLists_1_1_1 = ['Характеристики грунтов','Просадочные грунты','Набухающие грунты', 'Пучинистые грунты', 'Вечномерзлые грунты'];
 const finalLists_1_1_2 =  ['Характеристики грунтов СП п.5','Просадочные грунты'];

 const chooseFinalList = (idCat,idSub,idFinLi) => {
     if (idCat === "1" && idSub === "1" && idFinLi === "1") {
         return finalLists_1_1_1;
     } else if (idCat === "1" && idSub === "1" && idFinLi === "2") {
         return finalLists_1_1_2;
     }else {
        // alert("change number of the category id!");
        return null;
     }
 
 }

 // CLASS FINALLISTS
export default class FinalLists extends React.Component  {

    render() {
        let showInfo = this.props.finalListsView;
       // let showInfo = true;
       //RECEIVE SUBCATEGORY and CATEGORY and FINALLISTS
       let idSubCategory = this.props.idSubCategory;
       //let idSubCategory = "2";
       let idCategory = this.props.idCategory;
        let idFinalLists = this.props.idFinalLists;
       let nameFinalLists = chooseFinalList(idCategory, idSubCategory, idFinalLists);
      //let nameFinalLists = chooseFinalList("1", "1", "1");
       if (showInfo) {
        return (
            <div  className="FinalLists">
                <ul>
                    <li><button>{nameFinalLists[0]}</button></li>
                    <li><button>{nameFinalLists[1]}</button></li>
                    <li><button>{nameFinalLists[2]}</button></li>
                    <li><button>{nameFinalLists[3]}</button></li>
                </ul>
            </div>
       

            )
        }  else return null;

    }
}