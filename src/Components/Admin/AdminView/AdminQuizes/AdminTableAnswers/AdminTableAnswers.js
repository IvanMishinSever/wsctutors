import React from 'react';
import './AdminTableAnswers.css';
//import {printQuizesCategory} from "../../../../../utils/helps.js";
import TableAnswers from './TableAnswers/TableAnswers';
import { openAddInputFormsForAnswers  } from '../../../adminSlice';

export default class AdminTableAnswers extends React.Component {
    constructor(props) {
        super(props);
        
        this.onAdd = this.onAdd.bind(this);
    }

    onAdd() {
        const { state, dispatch } = this.props;
    
        dispatch(openAddInputFormsForAnswers());
    
    }
    render() {
        const { state, dispatch} = this.props;
        return (
            
            <div className="AdminTableAnswers">
                   <h3>Список ответов {this.props.adminState.selectedQuestion} вопроса</h3>

                   <TableAnswers 
                   dispatch={dispatch}
                   data={this.props.adminState.dataAnswersId}
                   />
                   <button className='btn' onClick={this.onAdd}>Add<i className="fas fa-plus"></i></button> 
                    


                
            </div>
        )
    }
}