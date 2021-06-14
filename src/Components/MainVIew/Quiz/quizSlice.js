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

const initialState = {
  quizView: false,
  dataQuiz: [],
  isFetching: false,
  error: "",
  quizId:'',

  question: '',
  counter: 0,
  answerOptions: [],
  questionId: 1,
  answer: '',
  styleAnswer:{
    flag: false},
  selectedItem: null,
  answersCount: {
    trueAnswer: 0,
  },
  result: '',
  questionLength: 0,
};



 const options= {
    name: 'quiz',

    initialState: {
       
        quizView: false,
        dataQuiz: [],
        isFetching: false,
        error: "",
        quizId:'',

        question: '',
        counter: 0,
        answerOptions: [],
        questionId: 1,
        answer: '',
        styleAnswer:{
          flag: false},
        selectedItem: null,
        answersCount: {
          trueAnswer: 0,
        },
        result: '',
        questionLength: 0,


    },

    reducers: {
        showQuiz: (state, action) => {
            return { 
                categoryView: true,
                quizView: true,
               // expanded: !state.expanded
            }
        },

        //  RIGHT ANSWER
        userAnswerRight: (state, action) => {
            console.log(action);
            state.answer = action.payload.answer;
            state.answersCount = {
              trueAnswer: state.answersCount.trueAnswer + 1
            };
            state.styleAnswer = {
              flag: true
            };
            state.selectedItem = action.payload.idx; 
        },

        // WRONG ANSWER

        userAnswerWrong: (state, action) => {
            state.selectedItem = action.payload; 
        },


        //NEXT QUESTION
        nextQuestion: (state, action) => {
            state.counter = state.counter + 1;;
            //console.log(action.payload);

            state.questionId = state.questionId + 1;
            state.question = state.dataQuiz[state.counter].question.text;
            state.answerOptions = state.dataQuiz[state.counter].answers;
            state.answer = '';
            state.styleAnswer = {
            flag: false
            };
            state.selectedItem = null;

        },
        //GET RESULT
        getResult: (state, action) => {
            state.result = action.payload;
        },
        // GET first INITIAL STATE
        getInitialState: state  => 
           initialState,

           //REPEAT QUIZ
        repeatQuiz: (state, action) => {
            state.quizView = true;
            state.question = state.dataQuiz[0].question.text;
            state.answerOptions = state.dataQuiz[0].answers;
            state.result = '';
            state.selectedItem = null;
            state.counter = 0;
            state.answer = '';
            state.styleAnswer = {
              flag: false
              };
              state.questionId = 1;
            state.answersCount = {
                trueAnswer: 0,
              };
        },
        
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
                 state.quizView = true;
                state.question = state.dataQuiz[0].question.text;
                state.answerOptions = state.dataQuiz[0].answers;
                state.questionLength = state.dataQuiz.length;
               // state.quizId = action.payload; // NO ????????








        },
        [quizLoad.rejected]: (state, action) => {
                state.isFetching = false;
                state.error = action.payload;
                console.log("oh wrong!!!")
        }
    }
};
    export const quizSlice = createSlice(options);
    export const {userAnswerRight, userAnswerWrong, nextQuestion, getResult, getInitialState, repeatQuiz } = quizSlice.actions;
    export default quizSlice.reducer;
    