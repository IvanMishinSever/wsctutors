import React from 'react';
import './InputFormsForAnswers.css';
import { closeInputForms, idQuestionsCreate } from '../../../adminSlice';

export default class AddInputFormsForQuestions  extends React.Component {
    constructor(props) {
        super(props);
        this.state={
            userInputId: '',
            userInputContent: '',
            userInputId: ''
          
        }
      
       this.handleUserInputContent = this.handleUserInputContent.bind(this);
      // this.handleUserInputId = this.handleUserInputId.bind(this);
       
       this.onSend = this.onSend.bind(this);
       this.onClose = this.onClose.bind(this);
    }

  
 // CLICK OK
onSend() {
        const { state, dispatch } = this.props;
        const item = {
            question_content: this.state.userInputContent,
            quiz_id: this.props.adminState.selectedQuize
            
        }
        console.log(item);
        dispatch(idQuestionsCreate(item));  
}
// ENTER INPUT
handleUserInputContent(e) {
    this.setState(
        {
            userInputContent: e.target.value
        }
    )
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
     if (this.props.adminState.openAddInputFormsForQuestions) {
        return(
            <div className="InputFormsForAnswers">
                           


             <p>Создать новый вопрос:</p>
             <form>
             
                 <label>
                     Content:
                 <input id="content" type="text"  onChange={this.handleUserInputContent} 
                 />
                 </label>


             </form>
             <button onClick={this.onSend}><i className="fas fa-check">OK</i></button>
             <button onClick={this.onClose}><i className="fas fa-window-close">Отмена</i></button>
            </div>
        )
     } else return null;
       
     

        
    }
}