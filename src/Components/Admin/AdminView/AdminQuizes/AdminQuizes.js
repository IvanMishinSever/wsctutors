import React from 'react';
import './AdminQuizes.css';
import AdminTableCategories from "./AdminTableCategories/AdminTableCategories";
import AdminTableSubCategories from "./AdminTableSubCategories/AdminTableSubCategories";

export default class AdminQuizes extends React.Component {
    render() {
        const view = this.props.viewQuizers;
        const { state, dispatch} = this.props;
        
        if (view) {
            return (
            
                <div className="AdminQuizes">
                 <AdminTableCategories 
                        
                        adminState={this.props.adminState}
                        dispatch={dispatch}
                />
                <AdminTableSubCategories 
                        
                        adminState={this.props.adminState}
                        dispatch={dispatch}
                />
                        {/*<AdminView />*/}
                        
                        
    
    
                    
                </div>
            )
        } else return null;
        
    }
}