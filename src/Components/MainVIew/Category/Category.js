import React from 'react';
import './Category.css';

export default class Category extends React.Component {


    render() {
        return (
            <div className="Category">
                <ul>
                    <li><button>Инженерная геология</button></li>
                    <li><button>Строительная механика</button></li>
                    <li><button>Железобетоные конструкции</button></li>
                </ul>
            </div>
        )
    }
}