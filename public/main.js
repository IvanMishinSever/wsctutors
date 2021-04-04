
import {printAllElements} from "./helps.js";
const url = "/api/users/";

//get all users
async function getAllUsers() {
    const urlToFetch = url;
    try {
        const response = await fetch(urlToFetch);
        console.log(response);
        if (response.ok) {
            const jsonResponse = await response.json();
            printAllElements(jsonResponse);
        }
    }
    catch (error) {
        console.log(error);
        console.log('SOMETHING WRONG!!!')
    }

}
/*
//getData();
let element = document.getElementById("press-refresh");
element.onclick = getData; 
*/