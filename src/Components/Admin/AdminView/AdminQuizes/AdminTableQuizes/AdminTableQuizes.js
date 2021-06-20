import React from 'react';
import './AdminTableQuizes.css';
import {printQuizesCategory} from "../../../../../utils/helps.js";
import TableQuiz from './TableQuiz/TableQuiz';
import { allQizesLoad, allCategoriesLoad  } from '../../../adminSlice';

export default class AdminTableQuizes extends React.Component {
    constructor(props) {
        super(props);

        this.onGetAllQuizes = this.onGetAllQuizes.bind(this);
        this.onGetAllCategories = this.onGetAllCategories.bind(this);
    }

//GET ALL QUIZES
onGetAllQuizes() {
    const { state, dispatch } = this.props;
    //console.log(this.props.adminState.dataQuizes);
    
    dispatch(allQizesLoad());
}
//GET ALL CATEGORIES
onGetAllCategories() {
    const { state, dispatch } = this.props;
    //console.log(this.props.adminState.dataQuizes);
    
    dispatch(allCategoriesLoad());
}


    render() {
    /*
    // НЕ ПОНЯТНО ЗАЧЕМ ISFETCHING  
    const  {dataTable, isFetching, error} = this.state;  
    if (isFetching) return <div>...Loading</div>;
    if (error) return <div>{`Error: ${error}`}</div>;
*/
        return (
            
            <div className="AdminTableQuizes">
                   <h3>Список тестов</h3>
                   <button onClick={this.onGetAllCategories}>Обновить</button>
                   <div id="all-quizes-container">
                    
                   </div>
                   <TableQuiz data={this.props.adminState.dataQuizes}/>
                    
                    


                
            </div>
        )
    }
}

