import TestCategory from '../Components/MainVIew/Category/CategoryDataTests';
import CourseCategory from "../Components/MainVIew/Category/CategoryDataCourses";

const testSubCategory = TestCategory;
const courseSubCategory = CourseCategory;
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
//SUBCATEGORY
const chooseSubCategory = (idCat,idSub) => {
    if (idCat === "1" && courseSubCategory[Number(idSub)].nodes) {
        //return testSubCategory[Number(idSub)-1].nodes;
        return courseSubCategory[Number(idSub)].nodes;
    } 
    
   else if (idCat === "2" && testSubCategory[Number(idSub)].nodes ) {
       return testSubCategory[Number(idSub)].nodes;
   }
   else return false;


}
//FINAL LISTS

const finalLists_1_1_1 = ['Характеристики грунтов','Просадочные грунты','Набухающие грунты', 'Пучинистые грунты', 'Вечномерзлые грунты'];
 const finalLists_1_1_2 =  ['Характеристики грунтов СП п.5','Просадочные грунты'];
 const chooseFinalList = (idCat,idSub,idFinLi) => {
    if (idCat === "2" && idSub === "0" && idFinLi === "1") {
        return finalLists_1_1_1;
    } else if (idCat === "2" && idSub === "0" && idFinLi === "0") {
        return finalLists_1_1_2;
    }else {
       // alert("change number of the category id!");
       return null;
    }

}

export  {chooseSubCategory, chooseFinalList};


