import { configureStore } from '@reduxjs/toolkit';
import menuSideReducer from "../Menu/MenuSide/menuSideSlice";


const store = configureStore ({
   reducer: {
    menuSide: menuSideReducer,
   } 
})
export default store;