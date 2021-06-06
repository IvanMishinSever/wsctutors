import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
export const quizLoad = createAsyncThunk(
    "quiz/quizLoad", async (id) => {
        const urlQuestion = "http://localhost:4001/api/question/";
        const urlAnswer = "http://localhost:4001/api/answer/";
        const urlToFetchAnswerId = `${urlAnswer}${id}`
        const urlToFetchQuestionId = `${urlQuestion}${id}`
        
        console.log(id);
        
            const responseQuestion = await fetch(urlToFetchQuestionId);
            const responseAnswer = await fetch(urlToFetchAnswerId);
            let dataQuiz = [];
            //console.log(responseQuestion);
            //console.log(responseAnswer);
           // console.log(response3);
            if (responseQuestion.ok & responseAnswer.ok) {
                const jsonResponseQuestion = await responseQuestion.json();
                const jsonResponseAnswer = await responseAnswer.json();
               
               // console.log(jsonResponseQuestion);
               // console.log(jsonResponseAnswer);
      
                const data = [];
               // const answers= [];
      
                jsonResponseQuestion.map(element => {
                  element.answers = []; 
                  element.question = {};
                  element.question.text = element.question_text;
                  delete element.question_text;
                  data.push(element);
                 // element.answers = [];
      
                })
      
                jsonResponseAnswer.map(element => {
                 // console.log(element);
                  jsonResponseQuestion.map( question => {
                   // console.log(question.id);
                    //console.log(element.question_id);
      
                    if (question.id === element.question_id) {
                      question.answers.push(element);
                    }
      
                  })
      
                })
              //  console.log(data);
                dataQuiz = data;
            }
            return dataQuiz;
        
    }
);






 const options= {
    name: 'quiz',

    initialState: {
        categoryView: true,
        quizView: false,
       // expanded: false,
      //  nodesExist: false,
        dataQuiz: [],
        isFetching: false,
        error: ""

    },

    reducers: {
        showQuiz: (state, action) => {
            return { 
                categoryView: false,
                quizView: true,
               // expanded: !state.expanded
            }
        }
    },

    extraReducers: {
        [quizLoad.pending]: (state, action) => {
            state.isFetching = true;
            state.error = false;
        },
        [quizLoad.fulfilled]: (state, action) => {
                state.dataQuiz = action.payload;
                state.isFetching = true;
                state.error = false;
                state.categoryView = false;
                state.quizView = true;
               // state.expanded = !state.expanded;
        },
        [quizLoad.rejected]: (state, action) => {
                state.isFetching = false;
                state.error = action.payload;
                console.log("oh wrong!!!")
        }
    }
};
    export const quizSlice = createSlice(options);
    export default quizSlice.reducer;