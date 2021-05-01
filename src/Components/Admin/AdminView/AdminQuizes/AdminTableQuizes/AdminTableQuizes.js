import React from 'react';
import './AdminTableQuizes.css';
import {printQuizesCategory} from "../../../../../utils/helps.js";
import TableQuiz from './TableQuiz/TableQuiz';
//get all users
//const url = "http://localhost:4001/api/users/";
/*
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
*/
export default class AdminTableQuizes extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            dataTable: [],
            isFetching: true,
            error: null
        }
        this.getAllUsers = this.getAllUsers.bind(this);
    }
    
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
            
           
            
           // console.log(jsonResponse);
        }
    }
<<<<<<< HEAD
    
    async getAllUsers() {
        const url = "http://localhost:4001/api/quizes/";
        const urlToFetch = url;
        try {
            const response = await fetch(urlToFetch);
            console.log(response);
            if (response.ok) {
                const jsonResponse = await response.json();
                printQuizesCategory(jsonResponse);
               // this.addDataTable(jsonResponse);
               const items = [];
               items.push(jsonResponse);
               this.setState({
                dataTable: items,
            });
                console.log(jsonResponse);
            }
        }
        catch (error) {
            console.log(error);
            console.log('SOMETHING WRONG!!!')
        }
    
    }
/*
 addDataTable(jsonResponse) {

    this.setState({
         dataTable: jsonResponse,
     });
     //console.log("dddddddd");

 }
*/

=======
    catch (error) {
        this.setState({
            isFetching: false,
            error:error.message
        })
        console.log(error);
        console.log('SOMETHING WRONG!!!')
       
    }
    
}
>>>>>>> master
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
                   <button onClick={this.getAllUsers}>Обновить</button>
                   <div id="all-quizes-container">
                    
                   </div>
                   <TableQuiz data={this.state.dataTable}/>
                    
                    


                
            </div>
        )
    }
}

