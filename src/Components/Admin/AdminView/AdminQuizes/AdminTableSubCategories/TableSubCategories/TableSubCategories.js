
import React from 'react';
import './TableSubCategories.css';
import { idQuizLoad, getIdSelectedSubCategory, openInputFormsForSubCategories, openDeleteInputFormsForSubCategories  } from '../../../../adminSlice.js';

export default class TableSubCategories extends React.Component {
    constructor(props) {
        super(props);

       // this.onGetAllQuizes = this.onGetAllQuizes.bind(this);
       this.onGetQuizes = this.onGetQuizes.bind(this);
       this.onEdit = this.onEdit.bind(this);
       this.onDelete = this.onDelete.bind(this);
    }

   //GET QUIZES BY ID
  
onGetQuizes(e) {
    const { state, dispatch } = this.props;
    //console.log("RRRRRRRRRRRR");
    //console.log(this.props.adminState.dataQuizes);
    const id= e.target.value ;
    
    console.log(id);
    dispatch(idQuizLoad(id));
    dispatch(getIdSelectedSubCategory(id));
}
onEdit(e) {
    const { state, dispatch } = this.props;

    const id = e.target.value;
    console.log(id);
    dispatch(openInputFormsForSubCategories(id));

}
onDelete(e) {
    const { state, dispatch } = this.props;

    const id = e.target.value;
    console.log(id);
    dispatch(openDeleteInputFormsForSubCategories(id));

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
                        onClick={this.onGetQuizes}
                        value={item.id}
                         >{item.text}  ({data.length})</button>
                         <button className='btn' value={item.id} onClick={this.onEdit}>Edit<i className="fas fa-marker"></i></button>
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
            <div className="TableSubCategories">
                
                <table>
                    <thead>
                        <tr>
                            <th>номер подкатегории</th>
                            <th>название подкатегории</th>
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