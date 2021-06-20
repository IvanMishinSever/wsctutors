import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

export const allQizesLoad = createAsyncThunk(
    "admin/allAdminLoad", async() => {
        const url = "http://localhost:4001/api/quizes/";
        const urlToFetch = url;
        const response = await fetch(urlToFetch);
        console.log(response);
        let dataTable = [];
        if (response.ok) {
            const jsonResponse = await response.json();
            dataTable = jsonResponse;
            console.log(jsonResponse);
        }
        return dataTable;
    }
);
//
const initialState = {

};

//
const options = {
    name: 'admin',
    initialState: {
        dataTable: [],
        isFetching: true,
        error: null
    },
    reducers: {

    },
    extraReducers: {
        [allQizesLoad.pending]: (state, action) => {
            state.isFetching = true;
            state.error = false;
        },
        [allQizesLoad.fulfilled]: (state, action) => {
            state.dataTable = action.payload;
            state.isFetching = true;
            state.error= false;
        },
        [allQizesLoad.rejected]: (state, action) => {
            state.isFetching = false;
            state.error = action.payload;
            console.log("oh wrong!!!");
        }
    }

};

export const adminSlice = createSlice(options);
export default adminSlice.reducer;