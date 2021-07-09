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
           // console.log(jsonResponse);
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
                answer_content: item.answer_content,
                answer_value: item.answer_value,
                answer_feedback: item.answer_feedback,
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
//UPDATE ID QUESTIONS
export const idQuestionUpdate = createAsyncThunk(
    "admin/idQuestionUpdate", async(item) => {
        console.log(item);
        const url = "http://localhost:4001/api/questionupdate/";
        const urlToFetch = `${url}${item.question_id}`;
        const response = await fetch(urlToFetch, {
            method: 'PUT',
            headers: {"Content-Type": "application/json; charset=utf-8"},
            body: JSON.stringify({
                question_id: item.question_id,
                question_content: item.question_content
                
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
//UPDATE ID QUIZES
export const idQuizUpdate = createAsyncThunk(
    "admin/idQuizUpdate", async(item) => {
        console.log(item);
        const url = "http://localhost:4001/api/quizupdate/";
        const urlToFetch = `${url}${item.quiz_id}`;
        const response = await fetch(urlToFetch, {
            method: 'PUT',
            headers: {"Content-Type": "application/json; charset=utf-8"},
            body: JSON.stringify({
                quiz_id: item.quiz_id,
                quiz_name: item.quiz_name,
                quiz_description: item.quiz_description
                
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
//UPDATE ID SUBCATEGORIES
export const idSubCategoriesUpdate = createAsyncThunk(
    "admin/idSubCategoriesUpdate", async(item) => {
        console.log(item);
        const url = "http://localhost:4001/api/subcategoryupdate/";
        const urlToFetch = `${url}${item.sub_id}`;
        const response = await fetch(urlToFetch, {
            method: 'PUT',
            headers: {"Content-Type": "application/json; charset=utf-8"},
            body: JSON.stringify({
                sub_id: item.sub_id,
                sub_name: item.sub_name
                               
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
//UPDATE ID CATEGORIES
export const idCategoriesUpdate = createAsyncThunk(
    "admin/idCategoriesUpdate", async(item) => {
        console.log(item);
        const url = "http://localhost:4001/api/categoryupdate/";
        const urlToFetch = `${url}${item.main_id}`;
        const response = await fetch(urlToFetch, {
            method: 'PUT',
            headers: {"Content-Type": "application/json; charset=utf-8"},
            body: JSON.stringify({
                main_id: item.main_id,
                main_name: item.main_name
                               
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
//CREATE ID CATEGORY
export const idCategoriesCreate = createAsyncThunk(
    "admin/idCategoriesCreate", async(item) => {
        console.log(item);
        const url = "http://localhost:4001/api/category/";
        const urlToFetch = `${url}`;
        const response = await fetch(urlToFetch, {
            method: 'POST',
            headers: {"Content-Type": "application/json; charset=utf-8"},
            body: JSON.stringify({
                main_id: item.main_id,
                main_name: item.main_name
                               
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
//CREATE ID SUBCATEGORY
export const idSubCategoriesCreate = createAsyncThunk(
    "admin/idSubCategoriesCreate", async(item) => {
        console.log(item);
        const url = "http://localhost:4001/api/subcategory/";
        const urlToFetch = `${url}`;
        const response = await fetch(urlToFetch, {
            method: 'POST',
            headers: {"Content-Type": "application/json; charset=utf-8"},
            body: JSON.stringify({
                sub_name: item.sub_name,
                main_id: item.main_id
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
//DELETE ID CATEGORY
export const idCategoriesDelete = createAsyncThunk(
    "admin/idCategoriesDelete", async(item) => {
        console.log(item);
        const url = "http://localhost:4001/api/category/";
        const urlToFetch = `${url}${item.main_id}`;
        const response = await fetch(urlToFetch, {
            method: 'DELETE',
            headers: {"Content-Type": "application/json; charset=utf-8"},
            body: JSON.stringify({
                main_id: item.main_id,
                //main_name: item.main_name
                               
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
//DELETE ID SUBCATEGORY
export const idSubCategoriesDelete = createAsyncThunk(
    "admin/idSubCategoriesDelete", async(item) => {
        console.log(item);
        const url = "http://localhost:4001/api/subcategory/";
        const urlToFetch = `${url}${item.sub_id}`;
        const response = await fetch(urlToFetch, {
            method: 'DELETE',
            headers: {"Content-Type": "application/json; charset=utf-8"},
            body: JSON.stringify({
                sub_id: item.sub_id,
                //main_name: item.main_name
                               
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
        openInputForms: false, //FOR ANSWERS
        openInputFormsForQuestions: false, //FOR QUESTIONS
        openInputFormsForQuizes: false, //FOR QUIZES
        openInputFormsForSubCategories: false, //FOR SUBCATEGORIES
        openInputFormsForCategories: false, //FOR CATEGORIES
        openAddInputFormsForCategories: false, //FOR ADD CATEGORIES
        openAddInputFormsForSubCategories: false, //FOR ADD SUBCATEGORIES
        openDeleteInputForms: false, //FOR CATEGORIES
        openDeleteInputFormsForSubCategories: false, //FOR SUBCATEGORIES
        dataAnswersId_1: [],
        selectedId: null,
        selectedCategory: null,
        selectedSubCategory: null,
        selectedQuize: null,
        selectedQuestion: null,
    },
    reducers: {
        openInputForms: (state, action) => {
            state.openInputForms = true;
           // console.log(action.payload);
            state.selectedId = action.payload;
        },
        openInputFormsForQuestions: (state, action) => {
            state.openInputFormsForQuestions = true;
           // console.log(action.payload);
            state.selectedId = action.payload;
        },
        openInputFormsForQuizes: (state, action) => {
            state.openInputFormsForQuizes = true;
           // console.log(action.payload);
            state.selectedId = action.payload;
        },
        openInputFormsForSubCategories: (state, action) => {
            state.openInputFormsForSubCategories = true;
           // console.log(action.payload);
            state.selectedId = action.payload;
        },
        openInputFormsForCategories: (state, action) => {
            state.openInputFormsForCategories = true;
           // console.log(action.payload);
            state.selectedId = action.payload;
        },
        openAddInputFormsForCategories: (state, action) => {
            state.openAddInputFormsForCategories = true;
           // console.log(action.payload);
           
        },
        openAddInputFormsForSubCategories: (state, action) => {
            state.openAddInputFormsForSubCategories = true;
           // console.log(action.payload);
           
        },
        openDeleteInputForms: (state, action) => {
            state.openDeleteInputForms = true;
           // console.log(action.payload);
           state.selectedId = action.payload;
           
        },
        openDeleteInputFormsForSubCategories: (state, action) => {
            state.openDeleteInputFormsForSubCategories = true;
           // console.log(action.payload);
           state.selectedId = action.payload;
           
        },
        closeInputForms: (state, action) => {
            state.openInputForms = false;
            state.openInputFormsForQuestions = false;
            state.openInputFormsForQuizes = false;
            state.openInputFormsForSubCategories = false;
            state.openInputFormsForCategories = false;
            state.openAddInputFormsForCategories = false;
            state.openDeleteInputForms = false;
            state.openAddInputFormsForSubCategories = false;
            state.openDeleteInputFormsForSubCategories = false;
        },
        getIdSelectedCategory: (state, action) => {
            state.selectedCategory = action.payload;
        },
        getIdSelectedSubCategory: (state, action) => {
            state.selectedSubCategory = action.payload;
        },
        getIdSelectedQuize: (state, action) => {
            state.selectedQuize = action.payload;
        },
        getIdSelectedQuestion: (state, action) => {
            state.selectedQuestion = action.payload;
        }

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
            state.selectedQuize = null;
            state.selectedQuestion = null;
            state.selectedSubCategory = null;
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
            state.selectedQuize = null;
            state.selectedQuestion = null;
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
            state.selectedQuestion = null;
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
                    item.value = action.payload.answer_value;
                    item.feedback = action.payload.answer_feedback;
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
         //UPDATE ID QUESTIONS
         [idQuestionUpdate.pending]: (state, action) => {
            state.isFetching = true;
            state.error = false;
        },
        [idQuestionUpdate.fulfilled]: (state, action) => {
           // state.dataAnswersId_1 = action.payload;
            

            state.dataQuestionsId.map(item => {
                if ( item.id === action.payload.question_id) {
                    item.text = action.payload.question_content;
                    
                }
            });
            state.openInputFormsForQuestions = false;
            state.isFetching = true;
            state.error= false;
        },
        [idQuestionUpdate.rejected]: (state, action) => {
            state.isFetching = false;
            state.error = action.payload;
            console.log("oh wrong!!!");
        },
         //UPDATE ID QUIZES
         [idQuizUpdate.pending]: (state, action) => {
            state.isFetching = true;
            state.error = false;
        },
        [idQuizUpdate.fulfilled]: (state, action) => {
           // state.dataAnswersId_1 = action.payload;
            

            state.dataQuizesId.map(item => {
                if ( item.id === action.payload.quiz_id) {
                    item.text = action.payload.quiz_name;
                    item.quiz_description = action.payload.quiz_description;
                }
            });
            state.openInputFormsForQuizes = false;
            state.isFetching = true;
            state.error= false;
        },
        [idQuestionUpdate.rejected]: (state, action) => {
            state.isFetching = false;
            state.error = action.payload;
            console.log("oh wrong!!!");
        },
                 //UPDATE ID QUIZES
         [idQuizUpdate.pending]: (state, action) => {
            state.isFetching = true;
            state.error = false;
        },
        [idQuizUpdate.fulfilled]: (state, action) => {
           // state.dataAnswersId_1 = action.payload;
            

            state.dataQuizesId.map(item => {
                if ( item.id === action.payload.quiz_id) {
                    item.text = action.payload.quiz_name;
                    item.quiz_description = action.payload.quiz_description;
                }
            });
            state.openInputFormsForQuizes = false;
            state.isFetching = true;
            state.error= false;
        },
        [idQuizUpdate.rejected]: (state, action) => {
            state.isFetching = false;
            state.error = action.payload;
            console.log("oh wrong!!!");
        },
         //UPDATE ID SUBCATEGORIES
         [idSubCategoriesUpdate.pending]: (state, action) => {
            state.isFetching = true;
            state.error = false;
        },
        [idSubCategoriesUpdate.fulfilled]: (state, action) => {
           // state.dataAnswersId_1 = action.payload;
            

            state.dataSubCategoryId.map(item => {
                if ( item.id === action.payload.sub_id) {
                    item.text = action.payload.sub_name;
                 }
            });
            state.openInputFormsForSubCategories = false;
            state.isFetching = true;
            state.error= false;
        },
        [idSubCategoriesUpdate.rejected]: (state, action) => {
            state.isFetching = false;
            state.error = action.payload;
            console.log("oh wrong!!!");
        },
        //UPDATE ID CATEGORIES
        [idCategoriesUpdate.pending]: (state, action) => {
            state.isFetching = true;
            state.error = false;
        },
        [idCategoriesUpdate.fulfilled]: (state, action) => {
           // state.dataAnswersId_1 = action.payload;
            

            state.dataCategories.map(item => {
                if ( item.id === action.payload.main_id) {
                    item.label = action.payload.main_name;
                 }
            });
            state.openInputFormsForCategories = false;
            state.isFetching = true;
            state.error= false;
        },
        [idCategoriesUpdate.rejected]: (state, action) => {
            state.isFetching = false;
            state.error = action.payload;
            console.log("oh wrong!!!");
        },
                //UPDATE ID CATEGORIES
        [idCategoriesUpdate.pending]: (state, action) => {
            state.isFetching = true;
            state.error = false;
        },
        [idCategoriesUpdate.fulfilled]: (state, action) => {
           // state.dataAnswersId_1 = action.payload;
            

            state.dataCategories.map(item => {
                if ( item.id === action.payload.main_id) {
                    item.label = action.payload.main_name;
                 }
            });
            state.openInputFormsForCategories = false;
            state.isFetching = true;
            state.error= false;
        },
        [idCategoriesUpdate.rejected]: (state, action) => {
            state.isFetching = false;
            state.error = action.payload;
            console.log("oh wrong!!!");
        },        
        //CREATE ID CATEGORIES
        [idCategoriesCreate.pending]: (state, action) => {
            state.isFetching = true;
            state.error = false;
        },
        [idCategoriesCreate.fulfilled]: (state, action) => {
           // state.dataAnswersId_1 = action.payload;
            

            state.dataCategories.push({id: action.payload.main_id, label:action.payload.main_name});
                 
            
            state.openAddInputFormsForCategories = false;
            state.isFetching = true;
            state.error= false;
        },
        [idCategoriesCreate.rejected]: (state, action) => {
            state.isFetching = false;
            state.error = action.payload;
            console.log("oh wrong!!!");
        },
                //CREATE ID CATEGORIES
        [idCategoriesCreate.pending]: (state, action) => {
            state.isFetching = true;
            state.error = false;
        },
        [idCategoriesCreate.fulfilled]: (state, action) => {
           // state.dataAnswersId_1 = action.payload;
            

            state.dataCategories.push({id: action.payload.main_id, label:action.payload.main_name});
                 
            
            state.openAddInputFormsForCategories = false;
            state.isFetching = true;
            state.error= false;
        },
        [idCategoriesCreate.rejected]: (state, action) => {
            state.isFetching = false;
            state.error = action.payload;
            console.log("oh wrong!!!");
        },
        //CREATE ID SUBCATEGORIES
        [idSubCategoriesCreate.pending]: (state, action) => {
            state.isFetching = true;
            state.error = false;
        },
        [idSubCategoriesCreate.fulfilled]: (state, action) => {
           // state.dataAnswersId_1 = action.payload;
            

            state.dataSubCategoryId.push({id: action.payload.sub_id, text:action.payload.sub_name});
                 
            
            state.openAddInputFormsForSubCategories = false;
            state.isFetching = true;
            state.error= false;
        },
        [idSubCategoriesCreate.rejected]: (state, action) => {
            state.isFetching = false;
            state.error = action.payload;
            console.log("oh wrong!!!");
        },        
         //DELETE ID CATEGORIES
         [idCategoriesDelete.pending]: (state, action) => {
            state.isFetching = true;
            state.error = false;
        },
        [idCategoriesDelete.fulfilled]: (state, action) => {
           // state.dataAnswersId_1 = action.payload;
            
           // console.log(action.payload);
            //state.dataCategories.push({id: action.payload.main_id, label:action.payload.main_name});
             // state.dataCategories.delete({id: action.payload.main_id, label:action.payload.main_name});   
             const index = state.dataCategories.findIndex(item => item.id === Number(state.selectedId));
             if (index !== -1) {
                state.dataCategories.splice(index, 1);
             }
            state.openDeleteInputForms= false;
            state.isFetching = true;
            state.error= false;
        },
        [idCategoriesDelete.rejected]: (state, action) => {
            state.isFetching = false;
            state.error = action.payload;
            console.log("oh wrong!!!");
        },
        //DELETE ID SUBCATEGORIES
        [idSubCategoriesDelete.pending]: (state, action) => {
            state.isFetching = true;
            state.error = false;
        },
        [idSubCategoriesDelete.fulfilled]: (state, action) => {
         
            const index = state.dataSubCategoryId.findIndex(item => item.id === Number(state.selectedId));
            if (index !== -1) {
                state.dataSubCategoryId.splice(index, 1);
            }
            state.openDeleteInputFormsForSubCategories= false;
            state.isFetching = true;
            state.error= false;
        },
        [idSubCategoriesDelete.rejected]: (state, action) => {
            state.isFetching = false;
            state.error = action.payload;
            console.log("oh wrong!!!");
        },                                 
    }

};

export const adminSlice = createSlice(options);
export const { openDeleteInputFormsForSubCategories, openAddInputFormsForCategories,openAddInputFormsForSubCategories, openDeleteInputForms, openInputForms, openInputFormsForQuestions, openInputFormsForQuizes,openInputFormsForSubCategories, openInputFormsForCategories, closeInputForms, getIdSelectedCategory, getIdSelectedSubCategory, getIdSelectedQuize, getIdSelectedQuestion } = adminSlice.actions;
export default adminSlice.reducer;