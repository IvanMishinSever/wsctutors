import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

export const loadMenuNodes = createAsyncThunk(
    "menuSide/loadMenuNodes",
    async () => {
 
      const urlCategory = "http://localhost:4001/api/category/";
      const urlSubCategory = "http://localhost:4001/api/subcategory/";
      const urlQuizes = "http://localhost:4001/api/quizes/";

      const responseCategory = await fetch(urlCategory);
      const responseSubCategory = await fetch(urlSubCategory);
      const responseQuizes = await fetch(urlQuizes);
      
      let dataMenuNodes = [];

      
      if (responseCategory.ok & responseSubCategory.ok & responseQuizes.ok) {
        const jsonResponseCategory = await responseCategory.json();
        const jsonResponseSubCategory = await responseSubCategory.json();
        const jsonResponseQuizes = await responseQuizes.json();
        const data = [];
        const subdata = [];

        jsonResponseCategory.map(element => {
          data.push(element);
          element.nodes = [];
        })
        jsonResponseSubCategory.map(element => {
          subdata.push(element);
          element.nodes = [];
        })
       // console.log(subdata);

        jsonResponseQuizes.map(element => {
          subdata[element.id_category - 1].nodes.push(element);
        })
        //console.log("dddd");       
        //console.log(subdata);

        subdata.map(element => {
          data[element.id_category - 1].nodes.push(element);
        })


        dataMenuNodes = data;
       // console.log(data);
        }
        return dataMenuNodes;
    }
);




 const options= {
    name: 'menuSide',

    initialState: {
        categoryView: false,
        idCategory: 0,
        firstContentView: true,
        quizView: false,
        dataMenuNodes: [],
        isFetching: false,
        error: ""
    },

    reducers: {
        addMenuNodes: (state, action) => {
            
            return { 
                categoryView: true,
                idCategory: action.payload,
                firstContentView: false,
                quizView: false,
                

                }
            },
        showFirstContentView: (state, action) => {
                return { 
                    firstContentView: true,
                    
                  }
                }    
        },
        extraReducers: {
            [loadMenuNodes.pending]: (state, action) => {
                
                    state.isFetching = true;
                    state.error = false;
                
                
            },
            [loadMenuNodes.fulfilled]: (state, action) => {
                
                state.dataMenuNodes = action.payload;
                state.isFetching = true;
                state.error = false;
                state.categoryView = true;
                
                state.firstContentView = false;
                state.quizView = false;
                
            },
            [loadMenuNodes.rejected]: (state, action) => {
               
                state.isFetching = false;
                state.error = action.payload;
               
            }



        }
    
    };
    
    export const menuSideSlice = createSlice(options);
    export const  {addMenuNodes, showFirstContentView} = menuSideSlice.actions;
    export default menuSideSlice.reducer;