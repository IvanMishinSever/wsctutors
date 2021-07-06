
import React from 'react';
import './TableCategories.css';
import { idSubCategoryLoad, getIdSelectedCategory  } from '../../../../adminSlice.js';

export default class TableCategories extends React.Component {
    constructor(props) {
        super(props);
      
       // this.onGetAllQuizes = this.onGetAllQuizes.bind(this);
        this.onGetSubCategory = this.onGetSubCategory.bind(this);
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
                         <button className='btn'><i className="fas fa-marker"></i></button>
                         

                         
                         
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