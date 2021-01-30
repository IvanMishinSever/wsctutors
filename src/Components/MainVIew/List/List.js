import React from 'react';
import './List.css';
import { chooseLists } from "../../../utils/chooseSubCategory";

export default class List extends React.Component {

    renderList (nameList) {
        return (
        <ul> {
            nameList.map( (item, index) => (
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
    /*
    handleClick(e) {
        const id = e.target.value;
        this.props.onClick(id);
       
       
    }
*/
    render() {
        const idCategory = this.props.idCategory;
        const idList = this.props.idList;
       
        const nameList = chooseLists(idCategory,idList);
        
        //const viewComponent = nameCategory  ? false : this.props.categoryView;


        const viewComponent = (nameList === false) ? false : this.props.categoryView;
        console.log(viewComponent);
       

        if (viewComponent) {
            return (
                <div  className="List">
                    <h3>Каталог {/*idCategory*/}</h3>
                    {this.renderList(nameList)}

                 </div>
            )
        } else return null;

    }
}