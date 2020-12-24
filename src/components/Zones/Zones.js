import React, { Component } from 'react';
import Zone from './Zone/Zone';

class Zones extends Component {
   /*  static getDerivedStateFromProps(props, state) {
        console.log('[Zones.js] getDerivedStateFromProps');
        return state
    } */
    
    

    shouldComponentUpdate(nextProps, nextState) {
        console.log('[Zones.js] shouldComponentUpdate.');
        return true;
    }

    getSnapshotBeforeUpdate(prevProps, prevState) {
        console.log('[Zones.js] getSnapshotBeforeUpdate');
        return { message: 'Snapshot!'};
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        console.log('[Zones.js] componentDidUpdate');
        console.log(snapshot);
    }

    render() {
        console.log('[Zones.js] rendering...');
        return this.props.zones.map((zone, index) => {
            return  (
                    <Zone 
                        click={() => this.props.clicked(index)} 
                        name={zone.name}
                        key={zone.id}
                        changed={(event) => this.props.changed(event, zone.id)}/>
                );
            });
    }
}

export default Zones;