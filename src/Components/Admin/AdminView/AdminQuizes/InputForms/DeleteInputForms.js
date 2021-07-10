import React from 'react';
import './InputFormsForAnswers.css';
import { closeInputForms, idCategoriesDelete } from '../../../adminSlice';

export default class DeleteInputForms  extends React.Component {
    constructor(props) {
        super(props);
        
       
       this.onSend = this.onSend.bind(this);
       this.onClose = this.onClose.bind(this);
    }

  
 // CLICK OK
onSend() {
        const { state, dispatch } = this.props;

        const item = {
            main_id: this.props.adminState.selectedId,
           // main_name: this.state.userInputContent,
            
        }
        console.log(item);
        dispatch(idCategoriesDelete(item));  
}


// CLOSE FORM
onClose() {
    const { state, dispatch } = this.props;
    dispatch(closeInputForms());

}

   renderTable() {
    let  data =  this.props.data;
    return null;
   }
   
    render() {
        //console.log(this.props.adminState.openInputForms);
     if (this.props.adminState.openDeleteInputForms) {
        return(
            <div className="InputFormsForAnswers">
                <p>id: {this.props.adminState.selectedId}</p>
                <p>Content:{this.props.adminState.dataCategories.map(item => {
              // console.log(item)
                if (item.id === Number(this.props.adminState.selectedId))
               //console.log(item.label)
                return item.label;
                })}
                </p>
                


             <p><b>Вы действительно хотите удалить данную категорию?</b></p>
             <p>Удалить возможно только <strong> пустую </strong>категорию</p>
             <button onClick={this.onSend}><i className="fas fa-check">Да</i></button>
             <button onClick={this.onClose}><i className="fas fa-window-close">Отмена</i></button>
            </div>
        )
     } else return null;
       
     

        
    }
}