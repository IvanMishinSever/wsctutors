
import React from 'react';
import './TableCategories.css';
import { idSubCategoryLoad, getIdSelectedCategory, openInputFormsForCategories, openDeleteInputForms  } from '../../../../adminSlice.js';

export default class TableCategories extends React.Component {
    constructor(props) {
        super(props);
      
       // this.onGetAllQuizes = this.onGetAllQuizes.bind(this);
        this.onGetSubCategory = this.onGetSubCategory.bind(this);
        this.onEdit = this.onEdit.bind(this);
        this.onDelete = this.onDelete.bind(this);
    }

   //GET SUBCATEGORY BY ID
onGetSubCategory(e) {
    const { state, dispatch } = this.props;
    //console.log(this.props.adminState.dataQuizes);
    const id= e.target.value ;
 
    console.log(id);
    dispatch(idSubCategoryLoad(id));
    dispatch(getIdSelectedCategory(id));
  
}
onEdit(e) {
    const { state, dispatch } = this.props;

    const id = e.target.value;
    console.log(id);
    dispatch(openInputFormsForCategories(id));

}
onDelete(e) {
    const { state, dispatch } = this.props;

    const id = e.target.value;
    console.log(id);
    dispatch(openDeleteInputForms(id));

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
                         
                         onClick={this.onGetSubCategory}
                         value={item.id}
                         >{item.label}</button>
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
            <div className="TableCategories">
                
                <table>
                    <thead>
                        <tr>
                            <th>номер категории</th>
                            <th>название категории</th>
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