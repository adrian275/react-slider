import React, { Component } from 'react';
import './App.css';
import Zones from '../components/Zones/Zones';
import Cockpit from '../components/Cockpit/Cockpit'
import "../components/fontawesomeIcons";
import classes from './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    console.log('[App.js] constructor');
  }

  state = {
    zones: [
      { id:"0", name: "Bedroom", lightStatus: "true" },
      { id:"1", name: "Living Room", lightStatus: "true" },
      { id:"2", name: "Nursery", lightStatus: "false" }
    ],
    showZones: false
  }

  static getDerivedStateFromProps(props, state) {
    console.log('[App.js] get derived state from props');
    return state; 
  }


  deleteZoneHandler = (zoneIndex) => {
    const zones = [...this.state.zones];
    zones.splice(zoneIndex, 1);
    this.setState({zones: zones});
  }

/*   componentWillMount() {
    console.log('Component will mount...');
  } */

  componentDidMount() {
    console.log('[App.js] componentDidMount');
  }

  shouldComponentUpdate() {
    console.log('[App.js] shouldComponentUpdate')
    return true;
  }
  
  componentDidUpdate() {
    console.log('[App.js] componentDidUpdate')
  }

  nameChangedHandler = (event, id) => {
    const zoneIndex = this.state.zones.findIndex(z => {
        return z.id === id;
    });

    const zone = {
      ...this.state.zones[zoneIndex]
    }

    zone.name = event.target.value;

    const zones = [...this.state.zones];
    zones[zoneIndex] = zone;
    
    this.setState({zones: zones})
  }

  toggleZoneHandler = () => {
    const doesShow = this.state.showZones;
    this.setState({showZones: !doesShow})
  }



  render() {
    console.log('[App.js] render...');
    let zones = null;
    
    if ( this.state.showZones ) {
      zones = (
        <div>
          <Zones 
            zones={this.state.zones}
            clicked={this.deleteZoneHandler}
            changed={this.nameChangedHandler}
          />
  
          </div>
      );
    }
    
    return (
        <div className="App">
            <div className={classes.App}>
              <Cockpit 
              title={this.props.appTitle}
              showZones={this.state.showZones}
              zones={this.state.zones}
              clicked={this.toggleZoneHandler}
              />
              {zones}
            </div>   
        </div>
    );
  }
};

export default App;