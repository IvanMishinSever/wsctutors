import React from 'react';
import './AdminTableSubCategories.css';
//import {printQuizesCategory} from "../../../../../utils/helps.js";
import TableSubCategories from './TableSubCategories/TableSubCategories';
import { idSubCategoryLoad, openAddInputFormsForSubCategories  } from '../../../adminSlice';

export default class AdminTableSubCategories extends React.Component {
    constructor(props) {
        super(props);

     this.onAdd = this.onAdd.bind(this);
    }


onAdd() {
    const { state, dispatch } = this.props;

    dispatch(openAddInputFormsForSubCategories());

}
    render() {
        const { state, dispatch} = this.props;
        return (
            
            <div className="AdminTableCategories">
                   <h3>Список подкатегорий {this.props.adminState.selectedCategory} категории</h3>

                   <TableSubCategories 
                   dispatch={dispatch}
                   data={this.props.adminState.dataSubCategoryId}
                   
                   />
                   <button className='btn' onClick={this.onAdd}>Add<i className="fas fa-plus"></i></button> 
                    


                
            </div>
        )
    }
}