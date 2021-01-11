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
const chooseSubCategory = (idCat,idSub) => {
    if (idCat === "1" && courseSubCategory[Number(idSub)].nodes) {
        //return testSubCategory[Number(idSub)-1].nodes;
        return courseSubCategory[Number(idSub)].nodes;
    } 
    
   else if (idCat === "2" && testSubCategory[Number(idSub)].nodes ) {
       return testSubCategory[Number(idSub)].nodes;
   }else {
       // alert("change number of the category id!");
      // return null;
    }

}
export default chooseSubCategory;


