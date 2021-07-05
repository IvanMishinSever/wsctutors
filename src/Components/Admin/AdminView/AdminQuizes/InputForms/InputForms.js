import React from 'react';
import './InputForms.css';
import { closeInputForms, idAnswersUpdate } from '../../../adminSlice';

export default class InputForms extends React.Component {
    constructor(props) {
        super(props);
        this.state={
            userInput: '',
            //selectedId: null
        }
       // this.onGetAllQuizes = this.onGetAllQuizes.bind(this);
       // this.onGetQuestions = this.bind(this);
       this.handleUserInput = this.handleUserInput.bind(this);
       this.onSend = this.onSend.bind(this);
       this.onClose = this.onClose.bind(this);
    }

  
 // CLICK OK
onSend() {
        const { state, dispatch } = this.props;

        const item = {
            answer_id: this.props.adminState.selectedId,
            answer_content: this.state.userInput
        }
        dispatch(idAnswersUpdate(item));  
}
// ENTER INPUT
handleUserInput(e) {
    this.setState(
        {
            userInput: e.target.value
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
             <p>Номер элемента</p>
             <p>Cодержание:</p>
             <p>Заменить содержание:</p>
             <form>
                 <input type="text"  onChange={this.handleUserInput}></input>
             </form>
             <button onClick={this.onSend}><i className="fas fa-check">OK</i></button>
             <button onClick={this.onClose}><i className="fas fa-window-close">Закрыть</i></button>
            </div>
        )
     } else return null;
       
     

        
    }
}