import React from 'react';
import './SubCategory.css';


export default class SubCategory extends React.Component  {

    render() {
        let showInfo = true;
       // let showInfo = true;
       if (showInfo) {
        return (
            <div  className="SubCategory">
                <ul>
                    <li><button>Грунты</button></li>
                    <li><button>СП</button></li>
                    <li><button>ГОСТ</button></li>
                </ul>
            </div>
       

            )
        }  else return null;

    }
}
