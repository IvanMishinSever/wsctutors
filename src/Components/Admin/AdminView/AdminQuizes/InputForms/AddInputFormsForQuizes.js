import React from 'react';
import './InputFormsForAnswers.css';
import { closeInputForms, idQuizesCreate } from '../../../adminSlice';

export default class AddInputFormsForQuizes  extends React.Component {
    constructor(props) {
        super(props);
        this.state={
            userInputId: '',
            userInputContent: '',
            userInputDescription: ''
          
        }
      
       this.handleUserInputContent = this.handleUserInputContent.bind(this);
      this.handleUserInputDescription = this.handleUserInputDescription.bind(this);
       
       this.onSend = this.onSend.bind(this);
       this.onClose = this.onClose.bind(this);
    }

  
 // CLICK OK
onSend() {
        const { state, dispatch } = this.props;
        const item = {
            quiz_name: this.state.userInputContent,
            quiz_description: this.state.userInputDescription,
            sub_id: this.props.adminState.selectedSubCategory
            
        }
        console.log(item);
        dispatch(idQuizesCreate(item));  
}
// ENTER INPUT
handleUserInputContent(e) {
    this.setState(
        {
            userInputContent: e.target.value
        }
    )
}
handleUserInputDescription(e) {
    this.setState(
        {
            userInputDescription: e.target.value
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
     if (this.props.adminState.openAddInputFormsForQuizes) {
        return(
            <div className="InputFormsForAnswers">
                           


             <p>Создать новый тест:</p>
             <form>
             
                 <label>
                     Content:
                 <input id="content" type="text"  onChange={this.handleUserInputContent} 
                 />
                 </label>

                 <label>
                     Description:
                 <input id="content" type="text"  onChange={this.handleUserInputDescription} 
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