
import React from 'react';
import './TableCategories.css';

export default class TableCategories extends React.Component {
   
   renderTable() {
    let  data =  this.props.data;
    return (
        data.map(item => {
           // console.log(item.id + " " + item.label);
            return(
                <tr key={item.id}>
                    <td>{item.id}</td>
                    <td><button>{item.label}</button></td>
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