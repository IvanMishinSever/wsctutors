import React from 'react';
import './AdminTableSubCategories.css';
//import {printQuizesCategory} from "../../../../../utils/helps.js";
import TableSubCategories from './TableSubCategories/TableSubCategories';
import { idSubCategoryLoad  } from '../../../adminSlice';

export default class AdminTableSubCategories extends React.Component {
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
            
            <div className="AdminTableCategories">
                   <h3>Список подкатегорий</h3>

                   <TableSubCategories 
                   dispatch={dispatch}
                   data={this.props.adminState.dataSubCategoryId}
                   
                   />
                   <button className='btn'><i className="fas fa-plus"></i></button> 
                    


                
            </div>
        )
    }
}