import React from 'react';
import './InputFormsForAnswers.css';
import { closeInputForms, idQuizesDelete } from '../../../adminSlice';

export default class DeleteInputFormsForQuizes  extends React.Component {
    constructor(props) {
        super(props);
        
       
       this.onSend = this.onSend.bind(this);
       this.onClose = this.onClose.bind(this);
    }

  
 // CLICK OK
onSend() {
        const { state, dispatch } = this.props;

        const item = {
            quiz_id: this.props.adminState.selectedId,
           // main_name: this.state.userInputContent,
            
        }
        console.log(item);
        dispatch(idQuizesDelete(item));  
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
     if (this.props.adminState.openDeleteInputFormsForQuizes) {
        return(
            <div className="InputFormsForAnswers">
                <p>id: {this.props.adminState.selectedId}</p>
                <p>Content:{this.props.adminState.dataQuizesId.map(item => {
              // console.log(item)
                if (item.id === Number(this.props.adminState.selectedId))
               //console.log(item.label)
                return item.text;
                })}
                </p>
                


             <p><b>Вы действительно хотите удалить данный тест?</b></p>
             <p>Удалить возможно только <strong> пустой</strong> тест</p>
             <button onClick={this.onSend}><i className="fas fa-check">Да</i></button>
             <button onClick={this.onClose}><i className="fas fa-window-close">Отмена</i></button>
            </div>
        )
     } else return null;
       
     

        
    }
}