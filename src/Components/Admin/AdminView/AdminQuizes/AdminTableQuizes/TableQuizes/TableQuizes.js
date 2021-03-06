
import React from 'react';
import './TableQuizes.css';
import { idQuestionsLoad, getIdSelectedQuize, openInputFormsForQuizes, openDeleteInputFormsForQuizes  } from '../../../../adminSlice.js';

export default class TableQuizes extends React.Component {
    constructor(props) {
        super(props);

       // this.onGetAllQuizes = this.onGetAllQuizes.bind(this);
        this.onGetQuestions = this.onGetQuestions.bind(this);
        this.onEdit = this.onEdit.bind(this);
        this.onDelete = this.onDelete.bind(this);
    }

   //GET SUBCATEGORY BY ID
 
onGetQuestions(e) {
    const { state, dispatch } = this.props;
    //console.log(this.props.adminState.dataQuizes);
    const id= e.target.value ;
    
   // console.log(id);
    dispatch(idQuestionsLoad(id));
    dispatch(getIdSelectedQuize(id));
}
onEdit(e) {
    const { state, dispatch } = this.props;

    const id = e.target.value;
    //console.log(id);
    dispatch(openInputFormsForQuizes(id));

}
onDelete(e) {
    const { state, dispatch } = this.props;

    const id = e.target.value;
    console.log(id);
    dispatch(openDeleteInputFormsForQuizes(id));

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
                        onClick={this.onGetQuestions}
                         value={item.id}
                         >{item.text}</button>
                         <p>Description: {item.quiz_description}</p>
                         <button className='btn' value={item.id} onClick={this.onEdit} >Edit<i className="fas fa-marker"></i></button>
                         <button className='btn' value={item.id} onClick={this.onDelete}>Delete<i className="fas fa-trash-alt"></i></button>
                         </td>
                    </tr>
                    
                

                )
            })
        )    
   }
   
    render() {

      //  const data = this.props.data;

        return(
            <div className="TableQuizes">
                
                <table>
                    <thead>
                        <tr>
                            <th>номер теста</th>
                            <th>название теста</th>
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