import React from 'react'
// import * as api from '../api'
import {getSatellite} from "../api"

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    }
    this.printSatellite = this.printSatellite.bind(this);
    this.refreshData = this.refreshData.bind(this);
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
    // console.log('first state: ', this.state)
  }

  refreshData (){
    setTimeout(getSatellite(this.printSatellite), 2000)
  }
  render() {
    return (
      <div>
        {Object.entries(this.state).map(([key, value]) => {
          return <h2 key={key}>{key}: {value}</h2>
        })}
        <button onClick={this.refreshData}>refresh</button>
        {/* {this.state.map((data)=> {
          return <h2>{data}</h2>
        })} */}
      </div>
    );
  }
}

export default App;

