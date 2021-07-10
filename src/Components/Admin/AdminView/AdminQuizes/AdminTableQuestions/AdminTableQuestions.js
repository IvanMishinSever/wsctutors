import React from 'react';
import { openAddInputFormsForQuestions } from '../../../adminSlice';
import './AdminTableQuestions.css';
//import {printQuizesCategory} from "../../../../../utils/helps.js";
import TableQuestions from './TableQuestions/TableQuestions';


export default class AdminTableQuestions extends React.Component {
    constructor(props) {
        super(props);

        this.onAdd = this.onAdd.bind(this);
    }

    onAdd() {
        const { state, dispatch } = this.props;
    
        dispatch(openAddInputFormsForQuestions());
    
    }
    render() {
        const { state, dispatch} = this.props;
        return (
            
            <div className="AdminTableQuestions">
                   <h3>Список вопросов {this.props.adminState.selectedQuize} теста</h3>

                   <TableQuestions 
                   dispatch={dispatch}
                   data={this.props.adminState.dataQuestionsId}
                   />
                    <button className='btn' onClick={this.onAdd}>Add<i className="fas fa-plus"></i></button>
                    


                
            </div>
        )
    }
}