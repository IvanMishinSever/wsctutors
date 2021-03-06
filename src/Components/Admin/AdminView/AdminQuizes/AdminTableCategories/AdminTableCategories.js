import React from 'react';
import './AdminTableCategories.css';
//import {printQuizesCategory} from "../../../../../utils/helps.js";
import TableCategories from './TableCategories/TableCategories';
import { allCategoriesLoad, openAddInputFormsForCategories  } from '../../../adminSlice';

export default class AdminTableCategories extends React.Component {
    constructor(props) {
        super(props);

       // this.onGetAllQuizes = this.onGetAllQuizes.bind(this);
       this.onAdd = this.onAdd.bind(this);
        this.onGetAllCategories = this.onGetAllCategories.bind(this);
    }
/*
//GET ALL QUIZES
onGetAllQuizes() {
    const { state, dispatch } = this.props;
    //console.log(this.props.adminState.dataQuizes);
    
    dispatch(allQizesLoad());
}
*/
//GET ALL CATEGORIES
onGetAllCategories() {
    const { state, dispatch } = this.props;
    //console.log(this.props.adminState.dataQuizes);
    
    dispatch(allCategoriesLoad());
}
onAdd() {
    const { state, dispatch } = this.props;

    dispatch(openAddInputFormsForCategories());

}



    render() {
    /*
    // НЕ ПОНЯТНО ЗАЧЕМ ISFETCHING  
    const  {dataTable, isFetching, error} = this.state;  
    if (isFetching) return <div>...Loading</div>;
    if (error) return <div>{`Error: ${error}`}</div>;
*/ 
    const { state, dispatch} = this.props;
        return (
            
            <div className="AdminTableCategories">
                   <h3>Список категорий</h3>
                   <button onClick={this.onGetAllCategories}>Обновить категории</button>
                   
                   <div id="all-quizes-container">
                    
                   </div>
                   <TableCategories 
                   dispatch={dispatch}
                   data={this.props.adminState.dataCategories}
                   />

                <button className='btn'onClick={this.onAdd}>Add <i className="fas fa-plus"></i></button>
                    
                    


                
            </div>
        )
    }
}

