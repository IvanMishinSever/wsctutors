import React from 'react';
import './AdminTableQuizes.css';
import {printQuizesCategory} from "../../../../../utils/helps.js";
import TableQuiz from './TableQuiz/TableQuiz';
//get all users
//const url = "http://localhost:4001/api/users/";
const url = "http://localhost:4001/api/quizes/";
async function getAllUsers() {
    const urlToFetch = url;
    try {
        const response = await fetch(urlToFetch);
        console.log(response);
        if (response.ok) {
            const jsonResponse = await response.json();
            printQuizesCategory(jsonResponse);
            
            console.log(jsonResponse);
        }
    }
    catch (error) {
        console.log(error);
        console.log('SOMETHING WRONG!!!')
    }

}

export default class AdminTableQuizes extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            dataTable: [],
        }
    }
    render() {
        return (
            
            <div className="AdminTableQuizes">
                   <h3>Список тестов</h3>
                   <button onClick={getAllUsers}>Обновить</button>
                   <div id="all-quizes-container">
                    
                   </div>
                   <TableQuiz data={this.state.dataTable}/>
                    
                    


                
            </div>
        )
    }
}

