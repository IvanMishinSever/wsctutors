import React from 'react';
import './AdminUsers.css';
import AdminTableUsersMain from "./AdminTableUsersMain/AdminTableUsersMain";


export default class AdminUsers extends React.Component {
    render() {

        const view = this.props.viewUsers;
        if(view) {
            return (
            
                <div className="AdminUsers">
                        <AdminTableUsersMain />
                        {/*<AdminView />*/}
                        
                        
    
    
                    
                </div>
            )
        } else return null;
        

    }
}