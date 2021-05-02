import React from 'react';
import './AdminMenu.css';

export default class AdminMenu extends React.Component {
    constructor(props) {
        super(props);
       
        this.handleClick = this.handleClick.bind(this);
    }
    
    handleClick(e) {
        const id = e.target.value;
        //const id = 1;
        this.props.handlerAdminView(id);
       // console.log(id);

      }  
   
   
    render() {
        return (
            
            <div className="AdminMenu">
                    <button onClick={this.handleClick} value="0">Курсы</button>
                    <button onClick={this.handleClick} value="1">Тесты</button>
                    <button onClick={this.handleClick} value="2">Пользователи</button>
                    
                    


                
            </div>
        )
    }
}