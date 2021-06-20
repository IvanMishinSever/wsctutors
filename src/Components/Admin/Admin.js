import React from 'react';
import './Admin.css';
import AdminMenu from "./AdminMenu/AdminMenu";
import AdminView from "./AdminView/AdminView";

export default class Admin extends React.Component {
    constructor(props) {
        super(props);
        this.state ={
        adminQuizersView: false,
        adminUsersView: false,
        }
       
        this.handlerAdminView = this.handlerAdminView.bind(this);
    }

//SHOW AdminID COMPONENT
handlerAdminView(id) {
    if (id === "1") {
        this.setState(
            { 
              adminUsersView: false,
              adminQuizersView: true
            }
      
          )
    } else if (id === "2") {
        this.setState(
            { 
              adminUsersView: true,
              adminQuizersView: false
            }
      
          )  
    } 

  }


    render() {
      const { state, dispatch} = this.props;
      
        return (
            
            <div className="Admin">
                    <AdminMenu handlerAdminView ={this.handlerAdminView}/>
                    <AdminView 
                    viewUsers={this.state.adminUsersView} 
                    viewQuizers={this.state.adminQuizersView}


                    adminState={this.props.adminState}
                    dispatch={dispatch}
                    
                    />
                    
                    


                
            </div>
        )
    }
}