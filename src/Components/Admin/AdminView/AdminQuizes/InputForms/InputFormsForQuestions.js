import React from 'react';
import './InputFormsForAnswers.css';
import { closeInputForms, idQuestionUpdate } from '../../../adminSlice';

export default class InputFormsForQuestions  extends React.Component {
    constructor(props) {
        super(props);
        this.state={
            userInputId: '',
            userInputContent: '',
           
          
        }
      
       this.handleUserInputContent = this.handleUserInputContent.bind(this);
       
       this.onSend = this.onSend.bind(this);
       this.onClose = this.onClose.bind(this);
    }

  
 // CLICK OK
onSend() {
        const { state, dispatch } = this.props;

        const item = {
            question_id: this.props.adminState.selectedId,
            question_content: this.state.userInputContent,
            
        }
        dispatch(idQuestionUpdate(item));  
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
     if (this.props.adminState.openInputFormsForQuestions) {
        return(
            <div className="InputFormsForAnswers">
                <p>id: {this.props.adminState.selectedId}</p>
                <p>Content:{this.props.adminState.dataAnswersId.map(item => {
               //console.log(this.props.adminState.selectedId)
                if (item.id === Number(this.props.adminState.selectedId))
                //{ console.log(item.text)}
                return item.text;
                })}
                </p>
                


             <p>Заменить содержание:</p>
             <form>
                 <label>
                     Content:
                 <input id="content" type="text"  onChange={this.handleUserInputContent} 
                 />
                 </label>


             </form>
             <button onClick={this.onSend}><i className="fas fa-check">OK</i></button>
             <button onClick={this.onClose}><i className="fas fa-window-close">Закрыть</i></button>
            </div>
        )
     } else return null;
       
     

        
    }
}