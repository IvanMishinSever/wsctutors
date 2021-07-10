import React from 'react';
import './AdminTableQuizes.css';
//import {printQuizesCategory} from "../../../../../utils/helps.js";
import TableQuizes from './TableQuizes/TableQuizes';
import { openAddInputFormsForQuizes  } from '../../../adminSlice';

export default class AdminTableQuizes extends React.Component {
    constructor(props) {
        super(props);

        this.onAdd = this.onAdd.bind(this);
    }

onAdd() {
    const { state, dispatch } = this.props;

    dispatch(openAddInputFormsForQuizes());

}
    render() {
        const { state, dispatch} = this.props;
        return (
            
            <div className="AdminTableQuizes">
                   <h3>Список тестов {this.props.adminState.selectedSubCategory} подкатегории</h3>

                   <TableQuizes 
                   dispatch={dispatch}
                   data={this.props.adminState.dataQuizesId}
                   />
                    <button className='btn'onClick={this.onAdd}>Add<i className="fas fa-plus"></i></button>
                    


                
            </div>
        )
    }
}