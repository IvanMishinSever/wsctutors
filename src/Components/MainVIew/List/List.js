import React from 'react';
import './List.css';
import {chooseCategory, chooseLists} from "../../../utils/chooseSubCategory";

export default class List extends React.Component {


    render() {
        const idCategory = this.props.idCategory;
        const nameCategory = chooseLists(idCategory);
        //const viewComponent = nameCategory  ? false : this.props.categoryView;


        const viewComponent = (nameCategory === false) ? false : this.props.categoryView;
        console.log(viewComponent);

        if (viewComponent) {
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