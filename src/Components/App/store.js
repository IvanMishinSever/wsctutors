import { configureStore } from '@reduxjs/toolkit';
import menuSideReducer from "../Menu/MenuSide/menuSideSlice";


const store = configureStore ({
   reducer: {
    meniSide: menuSideReducer,
   } 
})
export default store;