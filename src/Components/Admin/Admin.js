import React from 'react';
import './Admin.css';
import AdminMenu from "./AdminMenu/AdminMenu";
import AdminView from "./AdminView/AdminView";

export default class Admin extends React.Component {
    render() {
        return (
            
            <div className="Admin">
                    <AdminMenu />
                    <AdminView />
                    
                    


                
            </div>
        )
    }
}