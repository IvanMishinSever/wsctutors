import React from 'react';
import './AdminQuizes.css';
import AdminTableQuizes from "./AdminTableQuizes/AdminTableQuizes";


export default class AdminQuizes extends React.Component {
    render() {
        return (
            
            <div className="AdminQuizes">
                    <AdminTableQuizes />
                    {/*<AdminView />*/}
                    
                    


                
            </div>
        )
    }
}