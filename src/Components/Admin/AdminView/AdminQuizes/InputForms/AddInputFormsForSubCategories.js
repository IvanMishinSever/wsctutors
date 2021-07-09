import React from 'react';
import './InputFormsForAnswers.css';
import { closeInputForms, idSubCategoriesCreate } from '../../../adminSlice';

export default class AddInputFormsForSubCategories  extends React.Component {
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
            sub_name: this.state.userInputContent,
            main_id: this.props.adminState.selectedCategory
            
        }
        console.log(item);
        dispatch(idSubCategoriesCreate(item));  
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
     if (this.props.adminState.openAddInputFormsForSubCategories) {
        return(
            <div className="InputFormsForAnswers">
                           


             <p>Создать новую подкатегорию:</p>
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