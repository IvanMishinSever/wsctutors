import { configureStore } from '@reduxjs/toolkit';
import menuSideReducer from "../Menu/MenuSide/menuSideSlice";
import quizReducer from "../MainVIew/Quiz/quizSlice";
import adminReducer from "../Admin/adminSlice";

const store = configureStore ({
   reducer: {
    menuSide: menuSideReducer,
    quiz: quizReducer,
    admin: adminReducer,
      
   } 
})
export default store;