import React, { Component } from 'react';
import classes from './Zone.css'

class Zone extends Component {
   /*  static getDerivedStateFromProps(props, state) {
        console.log('[Zone.js] getDerivedStateFromProps');
        return state;
    } */
    
    shouldComponentUpdate(nextProps, nextState) {
        console.log('[Zone.js] shouldComponentUpdate.');
        return true;
    }

    render() {
        console.log('[Zone.js] rendering....')

    return (
        <div className="card">
            <h1 className="card-text">{this.props.name}</h1>
            <p className="card-text" onClick={this.props.click}>Delete {this.props.name} {this.props.id}</p>
            <input type="text" onChange={this.props.changed} value={this.props.name} />       
        </div>
    );
  }
};

export default Zone;