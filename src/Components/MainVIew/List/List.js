import React from 'react';
import './List.css';
import {chooseLists} from "../../../utils/chooseSubCategory";

export default class List extends React.Component {

    renderList (nameCategory) {
        return (
        <ul> {
            nameCategory.map( (item, index) => (
                <li key={item.id}>
                    <button 
                        onClick={(e) => this.handleClick(e)} 
                        value={String(index)}>{item.label} in{index} id{item.id}
                    </button>
                </li>
                
            ))
            }
        </ul>
        )
    }
    handleClick(e) {
        const id = e.target.value;
        this.props.onClick(id);
       
       
    }

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
                    {this.renderList(nameCategory)}

                 </div>
            )
        } else return null;

    }
}