import React from 'react';
import classes from './Cockpit.css';


const cockpit = (props) => {
    const assignedClasses = [];
    let btnClass = '';

    if (props.showZones) {
        btnClass = classes.Red;
    }

    if (props.zones.length <= 1) {
      assignedClasses.push( classes.Red );
    }
    if (props.zones.length <= 2) {
        assignedClasses.push( classes.Bold );
      }

    return(
        <div className={classes.Cockpit}>
            <h1>{props.name}</h1>
                <p className={assignedClasses.join(' ')}>Light Switches</p>
                <button
                    className={btnClass}
                    onClick={props.clicked}
                    >Show / Hide Lights 
                </button>
        </div>
    );
};

export default cockpit;