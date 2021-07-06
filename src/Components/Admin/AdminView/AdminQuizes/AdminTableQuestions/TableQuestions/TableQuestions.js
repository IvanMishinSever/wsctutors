
import React from 'react';
import './TableQuestions.css';
import { idAnswersLoad, getIdSelectedQuestion  } from '../../../../adminSlice.js';

export default class TableQuestions extends React.Component {
    constructor(props) {
        super(props);

       // this.onGetAllQuizes = this.onGetAllQuizes.bind(this);
       this.onGetAnswers = this.onGetAnswers.bind(this);
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
                         <button className='btn'><i className="fas fa-marker"></i></button>
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