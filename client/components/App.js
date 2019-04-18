import React from 'react'
// import * as api from '../api'
import {getSatellite} from "../api"
import Background from './Background'

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
        {Object.entries(this.state).map(([key, value]) => {
          return <h2 key={key}>{key}: {value}</h2>
        })}
        {/* {this.state.map((data)=> {
          return <h2>{data}</h2>
        })} */}
         <Background/>
      </div>

     
    );
  }
}

export default App;

