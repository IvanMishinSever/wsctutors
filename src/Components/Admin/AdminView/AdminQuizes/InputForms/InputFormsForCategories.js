import React from 'react';
import './InputFormsForAnswers.css';
import { closeInputForms, idCategoriesUpdate } from '../../../adminSlice';

export default class InputFormsForCategories  extends React.Component {
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
            main_id: this.props.adminState.selectedId,
            main_name: this.state.userInputContent,
            
        }
        console.log(item);
        dispatch(idCategoriesUpdate(item));  
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
     if (this.props.adminState.openInputFormsForCategories) {
        return(
            <div className="InputFormsForAnswers">
                <p>id: {this.props.adminState.selectedId}</p>
                <p>Content:{this.props.adminState.dataCategories.map(item => {
              // console.log(item)
                if (item.id === Number(this.props.adminState.selectedId))
               //console.log(item.label)
                return item.label;
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