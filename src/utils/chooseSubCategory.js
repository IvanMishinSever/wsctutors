import TestCategory from '../Components/MainVIew/Category/CategoryDataTests';
import CourseCategory from "../Components/MainVIew/Category/CategoryDataCourses";

const testSubCategory = TestCategory;
const courseSubCategory = CourseCategory;

 //CHOOSE CATEGORY
 const chooseCategory = (id) => {
    if (id === "1") {
        return courseSubCategory;
    } else if (id === "2") {
        return testSubCategory;
    } else if (id === "3") {
        return testSubCategory;
    } 
    /*else {
       // alert("change number of the category id!");
       return null;
    }
*/
}




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
   // const nameCourse = courseSubCategory[Number(idSub)].nodes;
    //const nameTest = testSubCategory[Number(idSub)].nodes;
   // console.log(nameTest);
    if (idCat === "1" && courseSubCategory[Number(idSub)].nodes !== "undefined") {
        //return testSubCategory[Number(idSub)-1].nodes;
        return courseSubCategory[Number(idSub)].nodes;
    } 
    
   else if (idCat === "2" && testSubCategory[Number(idSub)].nodes !== "undefined") {
       return testSubCategory[Number(idSub)].nodes;
   }
   else return false;


}
//FINAL LISTS
/*
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

}*/
const chooseFinalList = (idCat,idSub,idFinLi) => {
    if (idFinLi) {
       // const nameCourse = courseSubCategory[Number(idSub)].nodes[Number(idFinLi)];
       // const nameTest = testSubCategory[Number(idSub)].nodes[Number(idFinLi)]; 
        //console.log(testSubCategory[Number(2)].nodes[Number(0)]);

        if (idCat === "1" && courseSubCategory[Number(idSub)].nodes[Number(idFinLi)]!== "undefined") {
            return courseSubCategory[Number(idSub)].nodes[Number(idFinLi)].nodes;
        } else if (idCat === "2" && testSubCategory[Number(idSub)].nodes[Number(idFinLi)]!== "undefined") {
            return testSubCategory[Number(idSub)].nodes[Number(idFinLi)].nodes;
        }else {
           // alert("change number of the category id!");
           return false;
        }
    } else console.log("idfinli false---" + idFinLi);


}

export  {chooseSubCategory, chooseFinalList, chooseCategory};


