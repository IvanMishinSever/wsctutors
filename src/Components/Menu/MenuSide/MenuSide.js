import React from 'react';
import './MenuSide.css';


export default class MenuSide extends React.Component {
 /*   constructor(props) {
        super(props);
        this.state = {
            categoryView: false,
        }
        this.onClick = this.onClick.bind(this);
    }
    
    onClick() {
        this.setState({
            categoryView: true
        })
        //console.log(this.state.categoryView);
          }
          
          onPress() {
              let visible = false;

            alert(visible);
          }
*/

    render() {
        return (
            <div className="MenuSide">
                <ul>
                    <li>
                        <button  >Курсы</button>
                    </li>
                    <li>
                        <button>Тесты</button>
                        <button onClick={this.props.onClick}>Example</button>
                        
                    </li>
                    
                </ul>
            </div>
        )
    }
}