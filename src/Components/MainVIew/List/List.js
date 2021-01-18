import React from 'react';
import './List.css';
import {chooseCategory} from "../../../utils/chooseSubCategory";

export default class List extends React.Component {


    render() {
        let idCategory = this.props.idCategory;
        let nameCategory = chooseCategory(idCategory);

        if(this.props.categoryView) {
            return (
                <div  className="List">
                    <h3>Каталог {/*idCategory*/}</h3>
                    <ul> {
                        nameCategory.map( (item, index) => (
                            <li key={item.id}>
                                <button 
                                    onClick={this.handleClick} 
                                    value={String(index)}>{item.label} in{index} id{item.id}
                                </button>
                            </li>
                            
                        ))
                        }
                    </ul>
                 </div>
            )
        } else return null;

    }
}