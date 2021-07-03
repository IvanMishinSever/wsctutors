import React from 'react';
import './AdminTableQuestions.css';
//import {printQuizesCategory} from "../../../../../utils/helps.js";
import TableQuestions from './TableQuestions/TableQuestions';
//import { idSubCategoryLoad  } from '../../../adminSlice';

export default class AdminTableQuestions extends React.Component {
    constructor(props) {
        super(props);

       // this.onGetAllQuizes = this.onGetAllQuizes.bind(this);
     //   this.onGetQu = this.onGetSubCategory.bind(this);
    }

/*
//GET ALL CATEGORIES
onGetSubCategory(id) {
    const { state, dispatch } = this.props;
    //console.log(this.props.adminState.dataQuizes);
    
    dispatch(idSubCategoryLoad(id));
}

*/
    render() {
        const { state, dispatch} = this.props;
        return (
            
            <div className="AdminTableQuestions">
                   <h3>Список вопросов</h3>

                   <TableQuestions 
                   dispatch={dispatch}
                   data={this.props.adminState.dataQuestionsId}
                   />
                    <button className='btn'><i className="fas fa-plus"></i></button>
                    


                
            </div>
        )
    }
}