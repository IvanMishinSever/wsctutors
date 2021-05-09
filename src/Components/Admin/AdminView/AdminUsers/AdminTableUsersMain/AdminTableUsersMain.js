import React from 'react';
import './AdminTableUsersMain.css';
import TableQuiz from './TableUsers/TableUsers';

export default class AdminTableUsersMain extends React.Component {
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
    const url = "http://localhost:4001/api/users/";
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
    render() {
    /*
    // НЕ ПОНЯТНО ЗАЧЕМ ISFETCHING  
    const  {dataTable, isFetching, error} = this.state;  
    if (isFetching) return <div>...Loading</div>;
    if (error) return <div>{`Error: ${error}`}</div>;
*/
        return (
            
            <div className="AdminTableUsersMain">
                   <h3>Список пользователей</h3>
                   <button onClick={this.getAllUsers}>Обновить</button>
                   <div id="all-users-container">
                    
                   </div>
                   <TableQuiz data={this.state.dataTable}/>
                    
                    


                
            </div>
        )
    }
}