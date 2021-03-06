
import React from 'react';
import './TableQuestions.css';
import { idAnswersLoad, getIdSelectedQuestion, openInputFormsForQuestions,  openDeleteInputFormsForQuestions  } from '../../../../adminSlice.js';

export default class TableQuestions extends React.Component {
    constructor(props) {
        super(props);

       // this.onGetAllQuizes = this.onGetAllQuizes.bind(this);
       this.onEdit = this.onEdit.bind(this);
       this.onGetAnswers = this.onGetAnswers.bind(this);
       this.onDelete = this.onDelete.bind(this);
    }

   //GET ANSWERS BY ID
  
onGetAnswers(e) {
    const { state, dispatch } = this.props;
    //console.log(this.props.adminState.dataQuizes);
    const id= e.target.value ;
    
    console.log(id);
    dispatch(idAnswersLoad(id));
    dispatch(getIdSelectedQuestion(id));
}
onEdit(e) {
    const { state, dispatch } = this.props;

    const id = e.target.value;
    console.log(id);
    dispatch(openInputFormsForQuestions(id));

}
onDelete(e) {
    const { state, dispatch } = this.props;

    const id = e.target.value;
    console.log(id);
    dispatch(openDeleteInputFormsForQuestions(id));

}
   renderTable() {
    let  data =  this.props.data;
    return (
        data.map(item => {
           // console.log(item.id + " " + item.label);
            return(
                
                    <tr key={item.id}>
                        <td>{item.id}</td>
                        <td><button
                        onClick={this.onGetAnswers}
                         value={item.id}
                         >{item.text}</button>
                         <button className='btn'value={item.id} onClick={this.onEdit} >Edit<i className="fas fa-marker"></i></button>
                         <button className='btn'value={item.id} onClick={this.onDelete}>Delete<i className="fas fa-trash-alt"></i></button>
                         </td>
                    </tr>
                    
                

                )
            })
        )    
   }
   
    render() {

      //  const data = this.props.data;

        return(
            <div className="TableQuestions">
                
                <table>
                    <thead>
                        <tr>
                            <th>номер вопроса</th>
                            <th>название вопроса</th>
                        </tr>
                        
                    </thead>
                    <tbody>
                    {this.renderTable()}
                    
                    
                    </tbody>
                
                    
                    

                </table>
                
            </div>
        )
    }
}