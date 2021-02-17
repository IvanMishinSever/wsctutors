

import React from 'react';
//import PropTypes from 'prop-types';





class ListItem extends React.Component{
   /* propTypes: {
        onClick: React.PropTypes.func.isRequired,
        isSelected: React.PropTypes.bool
    },*/
    constructor(props) {
          super(props);
         this.state ={ hover_flag: false}
    }
   /* getDefaultProps() {
        return {
            isSelected: false
        };
    }*/
    /*getInitialState() {
        return {
            hover_flag: false
        };
    }*/
    hoverEvent() {
        this.setState({hover_flag: !this.state.hover_flag});
    }
    render() {
        var liStyle = {
            background: '#eee'
        };
        if (this.props.isSelected || this.state.hover_flag) {
            liStyle['background'] = '#ff7f7f';
        }
        return (
            <li
                onClick={this.props.onClick}
                onMouseEnter={this.hoverEvent}
                onMouseLeave={this.hoverEvent}
                style={liStyle}>{this.props.name}
            </li>
        );
    }
};
// LIST

 class List extends React.Component{
    constructor(props) {
        super(props);
       this.state ={ selectedItem: null}
  }
   /* getInitialState() {
        return {
            selectedItem: null
        };
    }*/
    clickHandler(idx) {
        this.setState({selectedItem: idx});
    }
    render() {
        var ulStyle = {
            padding: '0px',
            margin: '20px'
        };
        var items = this.props.data.map(function (item, idx) {
            var is_selected = this.state.selectedItem === idx;
            return <ListItem
                key={idx}
                name={item.name}
                onClick={this.clickHandler.bind(this, idx)}
                isSelected={is_selected}
                />;
        }.bind(this));
        return (
            <ul style={ulStyle}>
                {items}
            </ul>
        );
    }
};

export default class Example extends React.Component{
    render() {
       var data = [];
        for (var i=0; i<10; i++) {
            data.push({name: 'Item ' + i});
        }
        return (
            <div>
                <List data={data} />

            </div>
        );
    }
};
 
//React.render(<App />, document.getElementById('app'));