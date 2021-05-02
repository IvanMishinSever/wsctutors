import React from 'react';
import './AdminQuizes.css';
import AdminTableQuizes from "./AdminTableQuizes/AdminTableQuizes";


export default class AdminQuizes extends React.Component {
    render() {
        const view = this.props.viewQuizers;
        if (view) {
            return (
            
                <div className="AdminQuizes">
                        <AdminTableQuizes />
                        {/*<AdminView />*/}
                        
                        
    
    
                    
                </div>
            )
        } else return null;
        
    }
}