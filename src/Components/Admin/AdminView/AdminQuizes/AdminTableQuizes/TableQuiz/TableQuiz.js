
import React from 'react';
import './TableQuiz.css';

export default class TableQuiz extends React.Component {
   
   
   
    render() {
      //  const data = this.props.data;
        return(
            <div className="TableQuiz">
                <table>
                    <thead>
                        <tr>
                            <th>id</th>
                            <th>название теста</th>
                        </tr>
                        
                    </thead>
                    <tbody>
                        <tr>
                            <td>1</td>
                            <td>gtht</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        )
    }
}