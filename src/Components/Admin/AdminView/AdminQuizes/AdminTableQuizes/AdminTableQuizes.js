import React from 'react';
import './AdminTableQuizes.css';
//import {printQuizesCategory} from "../../../../../utils/helps.js";
import TableQuizes from './TableQuizes/TableQuizes';
//import { idSubCategoryLoad  } from '../../../adminSlice';

export default class AdminTableQuizes extends React.Component {
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
            
            <div className="AdminTableQuizes">
                   <h3>Список тестов</h3>

                   <TableQuizes 
                   dispatch={dispatch}
                   data={this.props.adminState.dataQuizesId}
                   />
                    
                    


                
            </div>
        )
    }
}