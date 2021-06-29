
import React from 'react';
import './TableQuestions.css';
//import { idQuizLoad  } from '../../../../adminSlice.js';

export default class TableQuestions extends React.Component {
    constructor(props) {
        super(props);

       // this.onGetAllQuizes = this.onGetAllQuizes.bind(this);
       // this.onGetQuizes = this.onGetQuizes.bind(this);
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
                         >{item.text}</button></td>
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