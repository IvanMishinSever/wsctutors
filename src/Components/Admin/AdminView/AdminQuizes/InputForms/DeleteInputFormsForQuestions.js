import React from 'react';
import './InputFormsForAnswers.css';
import { closeInputForms, idQuestionsDelete } from '../../../adminSlice';

export default class DeleteInputFormsForQuestions  extends React.Component {
    constructor(props) {
        super(props);
        
       
       this.onSend = this.onSend.bind(this);
       this.onClose = this.onClose.bind(this);
    }

  
 // CLICK OK
onSend() {
        const { state, dispatch } = this.props;

        const item = {
            question_id: this.props.adminState.selectedId,
           // main_name: this.state.userInputContent,
            
        }
        console.log(item);
        dispatch(idQuestionsDelete(item));  
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
     if (this.props.adminState.openDeleteInputFormsForQuestions) {
        return(
            <div className="InputFormsForAnswers">
                <p>id: {this.props.adminState.selectedId}</p>
                <p>Content:{this.props.adminState.dataQuestionsId.map(item => {
              // console.log(item)
                if (item.id === Number(this.props.adminState.selectedId))
               //console.log(item.label)
                return item.text;
                })}
                </p>
                


             <p><b>Вы действительно хотите удалить данный вопрос?</b></p>
             <p>Удалить возможно только <strong> пустой </strong> вопрос</p>
             <button onClick={this.onSend}><i className="fas fa-check">Да</i></button>
             <button onClick={this.onClose}><i className="fas fa-window-close">Отмена</i></button>
            </div>
        )
     } else return null;
       
     

        
    }
}