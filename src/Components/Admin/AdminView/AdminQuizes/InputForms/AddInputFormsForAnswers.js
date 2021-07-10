import React from 'react';
import './InputFormsForAnswers.css';
import { closeInputForms, idAnswersCreate } from '../../../adminSlice';

export default class AddInputFormsForAnswers  extends React.Component {
    constructor(props) {
        super(props);
        this.state={
            
            userInputContent: '',
            userInputFeedback: '',
            userInputValue: '',
          
        }
      
       this.handleUserInputContent = this.handleUserInputContent.bind(this);
       this.handleUserInputFeedback = this.handleUserInputFeedback.bind(this);
       this.handleUserInputValue = this.handleUserInputValue.bind(this);
      // this.handleUserInputId = this.handleUserInputId.bind(this);
       
       this.onSend = this.onSend.bind(this);
       this.onClose = this.onClose.bind(this);
    }

  
 // CLICK OK
onSend() {
        const { state, dispatch } = this.props;
        const item = {
            answer_content: this.state.userInputContent,
            answer_feedback: this.state.UserInputFeedback,
            answer_value: this.state.UserInputValue,

            question_id: this.props.adminState.selectedQuestion,
            quiz_id: this.props.adminState.selectedQuize
            
        }
        console.log(item);
        dispatch(idAnswersCreate(item));  
}
// ENTER INPUT
handleUserInputContent(e) {
    this.setState(
        {
            userInputContent: e.target.value
        }
    )
}
handleUserInputFeedback(e) {
    this.setState(
        {
            UserInputFeedback: e.target.value
        }
    )
}
handleUserInputValue(e) {
    this.setState(
        {
            UserInputValue: e.target.value
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
     if (this.props.adminState.openAddInputFormsForAnswers) {
        return(
            <div className="InputFormsForAnswers">
                           


             <p>Создать новый вопрос:</p>
             <form>
             
                 <label>
                     Content:
                 <input id="content" type="text"  onChange={this.handleUserInputContent} 
                 />
                 </label>


                 <label>
                     Value:
                 <input id="value" type="text"  onChange={this.handleUserInputValue} 
                 />
                 </label>


                 <label>
                     Feedback:
                 <input id="feedback" type="text"  onChange={this.handleUserInputFeedback} 
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