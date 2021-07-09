import React from 'react';
import './AdminQuizes.css';
import AdminTableCategories from "./AdminTableCategories/AdminTableCategories";
import AdminTableSubCategories from "./AdminTableSubCategories/AdminTableSubCategories";
import AdminTableQuizes from "./AdminTableQuizes/AdminTableQuizes";
import AdminTableQuestions from "./AdminTableQuestions/AdminTableQuestions";
import AdminTableAnswers from "./AdminTableAnswers/AdminTableAnswers";
import InputFormsForAnswers  from './InputForms/InputFormsForAnswers';
import InputFormsForQuestions  from './InputForms/InputFormsForQuestions';
import InputFormsForQuizes  from './InputForms/InputFormsForQuizes';
import InputFormsForSubCategories  from './InputForms/InputFormsForSubCategories';
import InputFormsForCategories  from './InputForms/InputFormsForCategories';
import AddInputFormsForCategories  from './InputForms/AddInputFormsForCategories';
import DeleteInputForms  from './InputForms/DeleteInputForms';
import AddInputFormsForSubCategories  from './InputForms/AddInputFormsForSubCategories';
import DeleteInputFormsForSubCategories  from './InputForms/DeleteInputFormsForSubCategories';

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
                <InputFormsForAnswers 
                         adminState={this.props.adminState}
                         dispatch={dispatch}
                />
                <InputFormsForQuestions 
                         adminState={this.props.adminState}
                         dispatch={dispatch}
                />         
                <InputFormsForQuizes 
                         adminState={this.props.adminState}
                         dispatch={dispatch}
                />
                 <InputFormsForSubCategories
                         adminState={this.props.adminState}
                         dispatch={dispatch}
                />
                 <InputFormsForCategories
                         adminState={this.props.adminState}
                         dispatch={dispatch}
                />
                <AddInputFormsForCategories
                         adminState={this.props.adminState}
                         dispatch={dispatch}
                />
                <DeleteInputForms
                         adminState={this.props.adminState}
                         dispatch={dispatch}
                />
                <AddInputFormsForSubCategories
                         adminState={this.props.adminState}
                         dispatch={dispatch}
                />
                <DeleteInputFormsForSubCategories
                         adminState={this.props.adminState}
                         dispatch={dispatch}
                />
    
                    
                </div>
            )
        } else return null;
        
    }
}