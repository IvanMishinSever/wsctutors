
import React from 'react';
import '../../../AdminQuizes/AdminTableCategories/TableCategories/TableCategories';

export default class TableUsers extends React.Component {
   
   renderTable() {
    let  data =  this.props.data;
    return (
        data.map(item => {
            console.log(item);
            return(
                <tr key={item.id}>
                    <td>{item.id}</td>
                    <td>{item.nickname}</td>
                    <td>{item.city}</td>
                    <td>{item.mail}</td>
                    <td>{item.password}</td>
                    <td>{item.occupation_kind}</td>
                    <td>{item.subscription_kind}</td>
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
                            <th>Id</th>
                            <th>Nickname</th>
                            <th>City</th>
                            <th>Mail</th>
                            <th>Password</th>
                            <th>Occupation</th>
                            <th>Subscription</th>
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