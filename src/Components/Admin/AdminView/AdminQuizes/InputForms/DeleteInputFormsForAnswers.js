import React from 'react';
import './InputFormsForAnswers.css';
import { closeInputForms, idAnswersDelete } from '../../../adminSlice';

export default class DeleteInputFormsForAnswers  extends React.Component {
    constructor(props) {
        super(props);
        
       
       this.onSend = this.onSend.bind(this);
       this.onClose = this.onClose.bind(this);
    }

  
 // CLICK OK
onSend() {
        const { state, dispatch } = this.props;

        const item = {
            answer_id: this.props.adminState.selectedId,
           // main_name: this.state.userInputContent,
            
        }
        console.log(item);
        dispatch(idAnswersDelete(item));  
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
     if (this.props.adminState.openDeleteInputFormsForAnswers) {
        return(
            <div className="InputFormsForAnswers">
                <p>id: {this.props.adminState.selectedId}</p>
                <p>Content:{this.props.adminState.dataAnswersId.map(item => {
              // console.log(item)
                if (item.id === Number(this.props.adminState.selectedId))
               //console.log(item.label)
                return item.text;
                })}
                </p>
                


             <p><b>Вы действительно хотите удалить данный ответ?</b></p>
             
             <button onClick={this.onSend}><i className="fas fa-check">Да</i></button>
             <button onClick={this.onClose}><i className="fas fa-window-close">Отмена</i></button>
            </div>
        )
     } else return null;
       
     

        
    }
}