import React from 'react';
import './InputForms.css';
import { closeInputForms, idAnswersUpdate } from '../../../adminSlice';

export default class InputForms extends React.Component {
    constructor(props) {
        super(props);
        this.state={
            userInputId: '',
            userInputContent: '',
            userInputValue: null,
            userInputFeedback: '',
          
        }
      
       this.handleUserInputContent = this.handleUserInputContent.bind(this);
       this.handleUserInputValue = this.handleUserInputValue.bind(this); 
       this.handleUserInputFeedback = this.handleUserInputFeedback.bind(this); 
       this.onSend = this.onSend.bind(this);
       this.onClose = this.onClose.bind(this);
    }

  
 // CLICK OK
onSend() {
        const { state, dispatch } = this.props;

        const item = {
            answer_id: this.props.adminState.selectedId,
            answer_content: this.state.userInputContent,
            answer_value: this.state.userInputValue,
            answer_feedback: this.state.userInputFeedback
        }
        dispatch(idAnswersUpdate(item));  
}
// ENTER INPUT
handleUserInputContent(e) {
    this.setState(
        {
            userInputContent: e.target.value
        }
    )
}
handleUserInputValue(e) {
    this.setState(
        {
            userInputValue: e.target.value
        }
    )
}
handleUserInputFeedback(e) {
    this.setState(
        {
            userInputFeedback: e.target.value
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
     if (this.props.adminState.openInputForms) {
        return(
            <div className="InputForms">
                <p>id: {this.props.adminState.selectedId}</p>
                <p>Content:{this.props.adminState.dataAnswersId.map(item => {
               //console.log(this.props.adminState.selectedId)
                if (item.id === Number(this.props.adminState.selectedId))
                //{ console.log(item.text)}
                return item.text;
                })}
                </p>
                <p>Feedback:{this.props.adminState.dataAnswersId.map(item => {
                   if (item.id === Number(this.props.adminState.selectedId))
                   return item.feedback;
                    })}
                </p>


             <p>Заменить содержание:</p>
             <form>
                 <label>
                     Content:
                 <input id="content" type="text"  onChange={this.handleUserInputContent} 
                 />
                 </label>

                 <label>
                     Value:
                 <input id="value" type="number" onChange={this.handleUserInputValue}  />
                 </label>

                 <label>
                     Feedback:
                 <input id="feedback" type="text" onChange={this.handleUserInputFeedback}  />
                 </label>

             </form>
             <button onClick={this.onSend}><i className="fas fa-check">OK</i></button>
             <button onClick={this.onClose}><i className="fas fa-window-close">Закрыть</i></button>
            </div>
        )
     } else return null;
       
     

        
    }
}