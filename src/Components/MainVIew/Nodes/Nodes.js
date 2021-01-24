import React from 'react';
import './Nodes.css';

export default class Nodes extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            expanded: false
        }
    }
    render() {
        console.log(this.props.element);
        return (
            <div className="Node-container">
                <div className="Node">
                    <button
                        type="button"
                        onClick={this.toggle}
                    >+</button>
                    <h6>{this.props.element.label}
                    <small>{this.props.element.id}</small>
                    </h6>
                    {this.state.expanded && 
                        <div>
                            {this.showNodes()}
                        </div>
                    }
                </div>

            </div>
            
        );
    }

    
}