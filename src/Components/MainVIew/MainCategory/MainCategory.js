import React from 'react';
import './MainCategory.css';
import {chooseMainCategory} from "../../../utils/chooseSubCategory";
import List from "../List/List";

export default class MainCategory extends React.Component {

    //RENDER CATEGORY

    renderMainCategory (nameCategory) {
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

    // ADD ID LIST TO STATE

    handleClick(e) {
        const id = e.target.value;
        const listExist = this.checkListExists();
        this.props.setIdList(id, listExist);
        
    }
    checkListExists() {
        return true;
    }
    // RENDER CHILD LIST

     renderList() {
         const listExist = this.props.listExist;

         if (listExist) {
         return (
             <List
                categoryView={this.props.categoryView} 
                idCategory={this.props.idCategory}
                
                idList={this.props.idList}
             />
                )
         } else return null;
     }



    render() {

        // IF CATEGORY EXISTS return CATEGORY, ELSE FALSE

        const idCategory = this.props.idCategory;
        const nameCategory = chooseMainCategory(idCategory);
        const viewComponent = (nameCategory === false) ? false : this.props.categoryView;
        //console.log(viewComponent);

        if (viewComponent) {
            return (
                <div  className="MainCategory">
                    <h3>Каталог {/*idCategory*/}</h3>

                    {this.renderMainCategory(nameCategory)}

                    {this.renderList()}


                 </div>
            )
        } else return null;

    }
}