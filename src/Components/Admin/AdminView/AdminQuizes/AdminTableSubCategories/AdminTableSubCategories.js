import React from 'react';
import './AdminTableCategories.css';
//import {printQuizesCategory} from "../../../../../utils/helps.js";
import TableCategories from './TableCategories/TableCategories';
import { idSubCategoryLoad  } from '../../../adminSlice';

export default class AdminTableSubCategories extends React.Component {
    constructor(props) {
        super(props);

       // this.onGetAllQuizes = this.onGetAllQuizes.bind(this);
        this.onGetSubCategory = this.onGetSubCategory.bind(this);
    }


//GET ALL CATEGORIES
onGetSubCategory(id) {
    const { state, dispatch } = this.props;
    //console.log(this.props.adminState.dataQuizes);
    
    dispatch(idSubCategoryLoad(id));
}


    render() {
    
        return (
            
            <div className="AdminTableCategories">
                   <h3>Список подкатегорий</h3>

                   <TableCategories data={this.props.adminState.dataCategoryId}/>
                    
                    


                
            </div>
        )
    }
}