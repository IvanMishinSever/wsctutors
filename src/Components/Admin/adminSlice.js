import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';


// GET ALL QUIZES
export const allQizesLoad = createAsyncThunk(
    "admin/allAdminLoad", async() => {
        const url = "http://localhost:4001/api/quizes/";
        const urlToFetch = url;
        const response = await fetch(urlToFetch);
        console.log(response);
        let dataQuizes = [];
        if (response.ok) {
            const jsonResponse = await response.json();
            dataQuizes = jsonResponse;
            console.log(jsonResponse);
        }
        return dataQuizes;
    }
);
//GET ALL CATEGORIES
export const allCategoriesLoad = createAsyncThunk(
    "admin/allCategoriesLoad", async() => {
        const url = "http://localhost:4001/api/category/";
        const urlToFetch = url;
        const response = await fetch(urlToFetch);
        console.log(response);
        let dataCategories = [];
        if (response.ok) {
            const jsonResponse = await response.json();
            dataCategories = jsonResponse;
            console.log(jsonResponse);
        }
        return dataCategories;
    }
);
//GET ID SUBCATEGORY
export const idSubCategoryLoad = createAsyncThunk(
    "admin/idSubCategoriesLoad", async(id) => {
        const url = "http://localhost:4001/api/subcategory/";
        const urlToFetch = `${url}${id}`;
        const response = await fetch(urlToFetch);
        console.log(response);
        let dataCategoryId = [];
        if (response.ok) {
            const jsonResponse = await response.json();
            dataCategoryId = jsonResponse;
            console.log(jsonResponse);
        }
        return dataCategoryId;
    }
);
//GET ID QUIZ
export const idQuizLoad = createAsyncThunk(
    "admin/idQuizLoad", async(id) => {
        const url = "http://localhost:4001/api/quizes/";
        const urlToFetch = `${url}${id}`;
        const response = await fetch(urlToFetch);
        console.log(response);
        let dataQuizId = [];
        if (response.ok) {
            const jsonResponse = await response.json();
            dataQuizId = jsonResponse;
            console.log(jsonResponse);
        }
        return dataQuizId;
    }
);

//GET ID QUESTIONS
export const idQuestionsLoad = createAsyncThunk(
    "admin/idQuestionsLoad", async(id) => {
        const url = "http://localhost:4001/api/question/";
        const urlToFetch = `${url}${id}`;
        const response = await fetch(urlToFetch);
        console.log(response);
        let dataQuestionsId = [];
        if (response.ok) {
            const jsonResponse = await response.json();
            dataQuestionsId = jsonResponse;
            console.log(jsonResponse);
        }
        return dataQuestionsId;
    }
);
//GET ID ANSWERS
export const idAnswersLoad = createAsyncThunk(
    "admin/idAnswersLoad", async(id) => {
        const url = "http://localhost:4001/api/answerforquestion/";
        const urlToFetch = `${url}${id}`;
        const response = await fetch(urlToFetch);
        console.log(response);
        let dataAnswersId = [];
        if (response.ok) {
            const jsonResponse = await response.json();
            dataAnswersId = jsonResponse;
            console.log(jsonResponse);
        }
        return dataAnswersId;
    }
);
//UPDATE ID ANSWERS

export const idAnswersUpdate = createAsyncThunk(
    "admin/idAnswersUpdate", async(item) => {
        console.log(item);
        const url = "http://localhost:4001/api/answerupdate/";
        const urlToFetch = `${url}${item.answer_id}`;
        const response = await fetch(urlToFetch, {
            method: 'PUT',
            headers: {"Content-Type": "application/json; charset=utf-8"},
            body: JSON.stringify({
                answer_id: item.answer_id,
                answer_content: item.answer_content
            })
        });
        
         if (response.ok) {
            const answer = await response.json();
           
            console.log('Успех:', JSON.stringify(answer));
            console.log(answer[0]);
           return answer[0];
        } else {console.log(response);}

    }
);



const initialState = {

};

//
const options = {
    name: 'admin',
    initialState: {
        dataQuizes: [],
        isFetching: true,
        error: null,
        dataCategories:[],
        dataSubCategoryId:[],
        dataQuizesId: [],
        dataQuestionsId: [],
        dataAnswersId: [],
        openInputForms: false,
        dataAnswersId_1: [],
        selectedId: null,
    },
    reducers: {
        openInputForms: (state, action) => {
            state.openInputForms = true;
            console.log(action.payload);
            state.selectedId = action.payload;
        },
        closeInputForms: (state, action) => {
            state.openInputForms = false;
        },

    },
    extraReducers: {
        //GET ALL QUIZES
        [allQizesLoad.pending]: (state, action) => {
            state.isFetching = true;
            state.error = false;
        },
        [allQizesLoad.fulfilled]: (state, action) => {
            state.dataQuizes = action.payload;
            state.isFetching = true;
            state.error= false;
        },
        [allQizesLoad.rejected]: (state, action) => {
            state.isFetching = false;
            state.error = action.payload;
            console.log("oh wrong!!!");
        },
        //GET ALL CATEGORIES
        [allCategoriesLoad.pending]: (state, action) => {
            state.isFetching = true;
            state.error = false;
        },
        [allCategoriesLoad.fulfilled]: (state, action) => {
            state.dataCategories = action.payload;
            state.isFetching = true;
            state.error= false;
        },
        [allCategoriesLoad.rejected]: (state, action) => {
            state.isFetching = false;
            state.error = action.payload;
            console.log("oh wrong!!!");
        },
        //
        //GET ID SUBCATEGORIES
        [idSubCategoryLoad.pending]: (state, action) => {
            state.isFetching = true;
            state.error = false;
        },
        [idSubCategoryLoad.fulfilled]: (state, action) => {
            state.dataSubCategoryId = action.payload;
            state.isFetching = true;
            state.error= false;
            state.dataQuizesId = [];
            state.dataAnswersId = [];
            state.dataQuestionsId = [];
        },
        [idSubCategoryLoad.rejected]: (state, action) => {
            state.isFetching = false;
            state.error = action.payload;
            console.log("oh wrong!!!");
        },
         //GET ID QUIZES
         [idQuizLoad.pending]: (state, action) => {
            state.isFetching = true;
            state.error = false;
        },
        [idQuizLoad.fulfilled]: (state, action) => {
            state.dataQuizesId = action.payload;
            state.isFetching = true;
            state.error= false;
            state.dataQuestionsId = [];
            state.dataAnswersId = [];
        },
        [idQuizLoad.rejected]: (state, action) => {
            state.isFetching = false;
            state.error = action.payload;
            console.log("oh wrong!!!");
        },
                //GET ID QUESTIONS
         [idQuestionsLoad.pending]: (state, action) => {
            state.isFetching = true;
            state.error = false;
        },
        [idQuestionsLoad.fulfilled]: (state, action) => {
            state.dataQuestionsId = action.payload;
            state.isFetching = true;
            state.error= false;
            state.dataAnswersId = [];
        },
        [idQuestionsLoad.rejected]: (state, action) => {
            state.isFetching = false;
            state.error = action.payload;
            console.log("oh wrong!!!");
        },
        //GET ID ANSWERS
        [idAnswersLoad.pending]: (state, action) => {
            state.isFetching = true;
            state.error = false;
        },
        [idAnswersLoad.fulfilled]: (state, action) => {
            state.dataAnswersId = action.payload;
            state.isFetching = true;
            state.error= false;
        },
        [idAnswersLoad.rejected]: (state, action) => {
            state.isFetching = false;
            state.error = action.payload;
            console.log("oh wrong!!!");
        },
         //UPDATE ID ANSWERS
         [idAnswersUpdate.pending]: (state, action) => {
            state.isFetching = true;
            state.error = false;
        },
        [idAnswersUpdate.fulfilled]: (state, action) => {
            state.dataAnswersId_1 = action.payload;
            

            state.dataAnswersId.map(item => {
                if ( item.id === action.payload.answer_id) {
                    item.text = action.payload.answer_content;
                }
            });
            state.openInputForms = false;
            state.isFetching = true;
            state.error= false;
        },
        [idAnswersUpdate.rejected]: (state, action) => {
            state.isFetching = false;
            state.error = action.payload;
            console.log("oh wrong!!!");
        },
                        
    }

};

export const adminSlice = createSlice(options);
export const { openInputForms, closeInputForms } = adminSlice.actions;
export default adminSlice.reducer;