import React from 'react';
import './Category.css';
import SubCategory from './SubCategory/SubCategory';

export default class Category extends React.Component {
        constructor(props) {
            super(props);
            this.state = {
                subCategory_1: false,
            }
            this.handleClick = this.handleClick.bind(this);
        }
    handleClick() {
        this.setState({
            subCategory_1: true
        })
    }
    render() {
        let showInfo = this.props.categoryView;
       // let showInfo = true;
       if (showInfo) {
        return (
            <div  className="Category">
                <ul>
                    <li><button onClick={this.handleClick}>Инженерная геология</button></li>
                    <li><button>Строительная механика</button></li>
                    <li><button>Железобетоные конструкции</button></li>
                </ul>
                <SubCategory subcategoryView={this.state.subCategory_1} />
            </div>
       

            )
        }  else return null;
    }
}