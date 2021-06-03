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
            },
        showFirstContentView: (state, action) => {
                return { 
                    firstContentView: true,
                    
                  }
                }    
        }
    
    };
    
    export const menuSideSlice = createSlice(options);
    export const  {addMenuNodes, showFirstContentView} = menuSideSlice.actions;
    export default menuSideSlice.reducer;