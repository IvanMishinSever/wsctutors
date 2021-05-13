
import React from 'react';
import './TableQuiz.css';

export default class TableQuiz extends React.Component {
   
   renderTable() {
    let  data =  this.props.data;
    return (
        data.map(item => {
           // console.log(item.id + " " + item.label);
            return(
                <tr key={item.id}>
                    <td>{item.id}</td>
                    <td>{item.label}</td>
                </tr>
                )
            })
        )    
   }
   
    render() {

      //  const data = this.props.data;

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