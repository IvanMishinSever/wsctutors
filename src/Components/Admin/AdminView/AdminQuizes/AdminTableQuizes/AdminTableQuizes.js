import React from 'react';
import './AdminTableQuizes.css';
import {printQuizesCategory} from "../../../../../utils/helps.js";
import TableQuiz from './TableQuiz/TableQuiz';
import { allQizesLoad } from '../../../adminSlice';

export default class AdminTableQuizes extends React.Component {
    constructor(props) {
        super(props);
        /*this.state = {
            dataTable: [],
            isFetching: true,
            error: null
        }*/
       // this.getAllUsers = this.getAllUsers.bind(this);
        this.onGetAllQuizes = this.onGetAllQuizes.bind(this);
    }
 /*   
async getAllUsers() {
    const url = "http://localhost:4001/api/quizes/";
    const urlToFetch = url;
    try {
        const response = await fetch(urlToFetch);
        console.log(response);
        if (response.ok) {
            const jsonResponse = await response.json();
            this.setState({
                dataTable: jsonResponse,
                isFetching: false,
             
            })   
           // printQuizesCategory(jsonResponse);
            
           
            
            console.log(jsonResponse);
        }
    }
    catch (error) {
        this.setState({
            isFetching: false,
            error:error.message
        })
        console.log(error);
        console.log('SOMETHING WRONG!!!')
       
    }
    
}
*/

onGetAllQuizes() {
    const { state, dispatch } = this.props;
    console.log(this.props.adminState.dataTable);
    
    dispatch(allQizesLoad());
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
                   <button onClick={this.onGetAllQuizes}>Обновить</button>
                   <div id="all-quizes-container">
                    
                   </div>
                   <TableQuiz data={this.props.adminState.dataTable}/>
                    
                    


                
            </div>
        )
    }
}

