import React from 'react';
import './InputForms.css';
//import { idQuestionsLoad  } from '../../../../adminSlice.js';

export default class InputForms extends React.Component {
    constructor(props) {
        super(props);

       // this.onGetAllQuizes = this.onGetAllQuizes.bind(this);
       // this.onGetQuestions = this.onGetQuestions.bind(this);
    }

   //GET SUBCATEGORY BY ID
 
onGetQuestions(e) {
    const { state, dispatch } = this.props;
   
    //dispatch(idQuestionsLoad(id));
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
             <button><i className="fas fa-check">OK</i></button>
             <button><i className="fas fa-window-close">Закрыть</i></button>
            </div>
        )
     } else return null;
       
     

        
    }
}