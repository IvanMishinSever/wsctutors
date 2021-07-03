
import React from 'react';
import './TableAnswers.css';
import { openInputForms  } from '../../../../adminSlice';

export default class TableAnswers extends React.Component {
    constructor(props) {
        super(props);

       // this.onGetAllQuizes = this.onGetAllQuizes.bind(this);
       // this.onGetQuizes = this.onGetQuizes.bind(this);
       this.onEdit = this.onEdit.bind(this);
    }

   //GET SUBCATEGORY BY ID
 /*  
onGetQuizes(e) {
    const { state, dispatch } = this.props;
    //console.log(this.props.adminState.dataQuizes);
    const id= e.target.value ;
    
    console.log(id);
    dispatch(idQuizesLoad(id));
}
*/
onEdit() {
    const { state, dispatch } = this.props;
    dispatch(openInputForms());

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
                        
                         value={item.id}
                         >{item.text}</button>
                         <button className='btn'onClick={this.onEdit}><i className="fas fa-marker"></i></button>
                         <button className='btn'><i className="fas fa-trash-alt"></i></button>
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