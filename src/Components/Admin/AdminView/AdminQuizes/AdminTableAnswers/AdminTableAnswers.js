import React from 'react';
import './AdminTableAnswers.css';
//import {printQuizesCategory} from "../../../../../utils/helps.js";
import TableAnswers from './TableAnswers/TableAnswers';
//import { idSubCategoryLoad  } from '../../../adminSlice';

export default class AdminTableAnswers extends React.Component {
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
            
            <div className="AdminTableAnswers">
                   <h3>Список ответов</h3>

                   <TableAnswers 
                   dispatch={dispatch}
                   data={this.props.adminState.dataAnswersId}
                   />
                   <button className='btn'><i class="fas fa-plus"></i></button> 
                    


                
            </div>
        )
    }
}