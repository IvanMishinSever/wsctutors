import React from 'react';
import './AdminTableQuizes.css';
import {printAllElements} from "../../../../../utils/helps.js";

//get all users
const url = "/api/users/";

async function getAllUsers() {
    const urlToFetch = url;
    try {
        const response = await fetch(urlToFetch);
        console.log(response);
        if (response.ok) {
            const jsonResponse = await response.json();
            printAllElements(jsonResponse);
            
            console.log('worki!!!')
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
                   <div id="all-quizes-container">
                    <button onClick={getAllUsers}>Обновить</button>
                   </div>
                    
                    


                
            </div>
        )
    }
}

