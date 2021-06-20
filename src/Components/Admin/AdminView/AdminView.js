import React from 'react';
import './AdminView.css';
import AdminUsers from "./AdminUsers/AdminUsers";
import AdminQuizes from './AdminQuizes/AdminQuizes';


export default class AdminView extends React.Component {




    render() {
        const { state, dispatch} = this.props;
        
        return (
            
            <div className="AdminView">
                    <AdminUsers viewUsers={this.props.viewUsers} />
                    <AdminQuizes 
                    viewQuizers={this.props.viewQuizers}
                    
                    adminState={this.props.adminState}
                    dispatch={dispatch}
                    />
                    
                    


                
            </div>
        )
    }
}