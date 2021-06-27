import React from 'react';
import './AdminQuizes.css';
import AdminTableCategories from "./AdminTableCategories/AdminTableCategories";


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
                        {/*<AdminView />*/}
                        
                        
    
    
                    
                </div>
            )
        } else return null;
        
    }
}