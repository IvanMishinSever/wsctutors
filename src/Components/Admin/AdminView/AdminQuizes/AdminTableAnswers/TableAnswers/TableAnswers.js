
import React from 'react';
import './TableAnswers.css';
import { openInputForms, openDeleteInputFormsForAnswers  } from '../../../../adminSlice';

export default class TableAnswers extends React.Component {
    constructor(props) {
        super(props);

       this.onEdit = this.onEdit.bind(this);
       this.onDelete = this.onDelete.bind(this);
       
    }

onEdit(e) {
    const { state, dispatch } = this.props;

    const id = e.target.value;
    console.log(id);
    dispatch(openInputForms(id));

}
onDelete(e) {
    const { state, dispatch } = this.props;

    const id = e.target.value;
    console.log(id);
    dispatch(openDeleteInputFormsForAnswers(id));

}

   renderTable() {
    let  data =  this.props.data;
    return (
        data.map(item => {
           // console.log(item.id + " " + item.label);
            return(
                
                    <tr key={item.id}>
                        <td>{item.id}</td>
                        <td><button  value={item.id}>{item.text} значение {item.value}</button>
                        <p>значение {item.value}</p>
                        <p>feedback {item.feedback}</p>

                         <button className='btn'  value={item.id} onClick={this.onEdit} ><i className="fas fa-marker"></i>Edit</button>
                         <button className='btn' value={item.id} onClick={this.onDelete} ><i className="fas fa-trash-alt"></i>Delete</button>
                         </td>
                    </tr>
                    
                

                )
            })
        )    
   }
   
    render() {

      //  const data = this.props.data;

        return(
            <div className="TableAnswers">
                
                <table>
                    <thead>
                        <tr>
                            <th>номер ответа</th>
                            <th>ответ</th>
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