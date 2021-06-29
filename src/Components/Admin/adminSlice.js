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
    },
    reducers: {

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
            state.dataQuizes = action.payload;
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
        },
        [idQuestionsLoad.rejected]: (state, action) => {
            state.isFetching = false;
            state.error = action.payload;
            console.log("oh wrong!!!");
        },
    }

};

export const adminSlice = createSlice(options);
export default adminSlice.reducer;