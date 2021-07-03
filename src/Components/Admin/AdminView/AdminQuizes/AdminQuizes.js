import React from 'react';
import './AdminQuizes.css';
import AdminTableCategories from "./AdminTableCategories/AdminTableCategories";
import AdminTableSubCategories from "./AdminTableSubCategories/AdminTableSubCategories";
import AdminTableQuizes from "./AdminTableQuizes/AdminTableQuizes";
import AdminTableQuestions from "./AdminTableQuestions/AdminTableQuestions";
import AdminTableAnswers from "./AdminTableAnswers/AdminTableAnswers";
import InputForms from './InputForms/InputForms';

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
                <AdminTableQuizes
                        
                        adminState={this.props.adminState}
                        dispatch={dispatch}
                /> 
                <AdminTableQuestions
                        
                        adminState={this.props.adminState}
                        dispatch={dispatch}
                /> 
                <AdminTableAnswers
                        
                        adminState={this.props.adminState}
                        dispatch={dispatch}
                />      
                <InputForms 
                         adminState={this.props.adminState}
                         dispatch={dispatch}
                />        
    
    
                    
                </div>
            )
        } else return null;
        
    }
}