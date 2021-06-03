import { configureStore } from '@reduxjs/toolkit';
import menuSideReducer from "../Menu/MenuSide/menuSideSlice";
import quizReducer from "../MainVIew/Quiz/quizSlice";


const store = configureStore ({
   reducer: {
    menuSide: menuSideReducer,
    quiz: quizReducer,
   } 
})
export default store;