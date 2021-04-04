import React from 'react';
import './AdminView.css';
import AdminUsers from "./AdminUsers/AdminUsers";
import AdminQuizes from './AdminQuizes/AdminQuizes';


export default class AdminView extends React.Component {
    render() {
        return (
            
            <div className="AdminView">
                    <AdminUsers />
                    <AdminQuizes />
                    
                    


                
            </div>
        )
    }
}