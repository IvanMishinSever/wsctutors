import React from 'react';
import './InputForms.css';
import { closeInputForms, sendInputForms } from '../../../adminSlice';

export default class InputForms extends React.Component {
    constructor(props) {
        super(props);

       // this.onGetAllQuizes = this.onGetAllQuizes.bind(this);
       // this.onGetQuestions = this.onGetQuestions.bind(this);
       this.onSend = this.onSend.bind(this);
       this.onClose = this.onClose.bind(this);
    }

   //GET SUBCATEGORY BY ID
 
onSend() {
        const { state, dispatch } = this.props;
        const item = {
            answer_id: 1,
            answer_content: "4200"
        }
        dispatch(sendInputForms(item));  
}
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
                 <input type="text"></input>
             </form>
             <button onClick={this.onSend}><i className="fas fa-check">OK</i></button>
             <button onClick={this.onClose}><i className="fas fa-window-close">Закрыть</i></button>
            </div>
        )
     } else return null;
       
     

        
    }
}