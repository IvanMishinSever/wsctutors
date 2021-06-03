import React from 'react';
import './Menu.css';
import MenuSide from './MenuSide/MenuSide';

/*
export default class Menu extends React.Component {
    render() {
        return (
            <div className="Menu">
                <MenuSide chooseCategory={this.props.chooseCategory}
                chooseCategoryRedux={this.props.chooseCategoryRedux}
                dispatch={this.props.dispatch}
                />
                
            </div>
        )
    }
}
*/
 const Menu = (props) => {
    const { state, dispatch } = props;
           return (
            <div className="Menu">
                <MenuSide chooseCategory={props.chooseCategory}
                chooseCategoryRedux={props.chooseCategoryRedux}
                dispatch={dispatch}
                />
            </div>
            )
   }
   export default Menu;