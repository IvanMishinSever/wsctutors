import React from 'react';
import './AdminTableQuizes.css';
import {printAllElements} from "../../../../../utils/helps.js";

//get all users
const url = "http://localhost:4001/api/users/";

async function getAllUsers() {
    const urlToFetch = url;
    try {
        const response = await fetch(urlToFetch);
        console.log(response);
        if (response.ok) {
            const jsonResponse = await response.json();
            printAllElements(jsonResponse);
            
           // console.log(jsonResponse);
        }
    }
    catch (error) {
        console.log(error);
        console.log('SOMETHING WRONG!!!')
    }

}

export default class AdminTableQuizes extends React.Component {
    render() {
        return (
            
            <div className="AdminTableQuizes">
                   <h3>Список тестов</h3>
                   <button onClick={getAllUsers}>Обновить</button>
                   <div id="all-quizes-container">
                    
                   </div>
                    
                    


                
            </div>
        )
    }
}

