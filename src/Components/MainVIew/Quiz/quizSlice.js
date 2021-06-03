import { createSlice } from '@reduxjs/toolkit';

 const options= {
    name: 'quiz',

    initialState: {
        categoryView: true,
        quizView: false,
    },

    reducers: {
        showQuiz: (state, action) => {
            return { 
                categoryView: false,
                quizView: true,
            }
            }
        }
    
    };
    export const quizSlice = createSlice(options);
    export default quizSlice.reducer;