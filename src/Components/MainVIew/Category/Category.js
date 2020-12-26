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
       //RECEIVE ID CATEGORY
        let idCategory = this.props.idCategory;
        //ADD CATEGORY
        const courseCategory = ['Инженерная геология','Строительная механика','Железобетоные конструкции'];
        const testCategory = ['Инженерная геология-test','Строительная механика-test','Жеезобетоные конструкции-test'];

       if (showInfo) {
        return (
            <div  className="Category">
                <ul>
                    <li><button onClick={this.handleClick}>{testCategory[1]}</button></li>
                    <li><button>Строительная механика</button></li>
                    <li><button>Железобетоные конструкции</button></li>
                </ul>
                <SubCategory subcategoryView={this.state.subCategory_1} />
            </div>
       

            )
        }  else return null;
    }
}