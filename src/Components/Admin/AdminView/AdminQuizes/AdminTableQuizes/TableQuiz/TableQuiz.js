
import React from 'react';
import './TableQuiz.css';

export default class TableQuiz extends React.Component {
   
   renderTable() {
    let  data =  this.props.data;
    return (
        data.map(item => {
            console.log(item.quiz_id + " " + item.quiz_name);
            return(
                <tr key={item.quiz_id}>
                    <td>{item.quiz_id}</td>
                    <td>{item.quiz_name}</td>
                </tr>
                )
            })
        )    
   }
   
    render() {
        
        return(
            <div className="TableQuiz">
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