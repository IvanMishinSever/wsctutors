import { createSlice } from '@reduxjs/toolkit';

 const options= {
    name: 'menuSide',

    initialState: {
        categoryView: false,
        idCategory: 0,
        firstContentView: true,
        quizView: false,
    },

    reducers: {
        addMenuNodes: (state, action) => {
            return { 
                categoryView: true,
                idCategory: action.payload.newId,
                firstContentView: false,
                quizView: false,
            }
            }
        }
    
    };
    export const menuSideSlice = createSlice(options);
    export default menuSideSlice.reducer;