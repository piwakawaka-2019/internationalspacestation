import React from 'react'
// import * as api from '../api'
import {getSatellite} from "../api"

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    }
    this.printSatellite = this.printSatellite.bind(this);
  }
  componentDidMount(){
    getSatellite(this.printSatellite)
  }
  
  printSatellite(err, data) {
    this.setState({
      name: data.name,
      latitude: data.latitude,
      longitude: data.longitude,
      altitude: data.altitude,
      velocity: data.velocity
    })
    console.log(this.state)
  }

  render() {
    return (
      <div>
        <h2>{this.state.name}</h2>
      </div>
    );
  }
}

export default App;

