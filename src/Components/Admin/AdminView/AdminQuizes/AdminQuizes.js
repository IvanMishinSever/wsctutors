import React from 'react';
import './AdminQuizes.css';
import AdminTableQuizes from "./AdminTableQuizes/AdminTableQuizes";


export default class AdminQuizes extends React.Component {
    render() {
        const view = this.props.viewQuizers;
        const { state, dispatch} = this.props;
        
        if (view) {
            return (
            
                <div className="AdminQuizes">
                        <AdminTableQuizes 
                        
                        adminState={this.props.adminState}
                        dispatch={dispatch}
                        />
                        {/*<AdminView />*/}
                        
                        
    
    
                    
                </div>
            )
        } else return null;
        
    }
}