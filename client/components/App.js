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
    // this.refreshData()
    // console.log('first state: ', this.state)
  }

  refreshData (){
    setTimeout(getSatellite(this.printSatellite), 5000)
  }
  render() {
    let style = {
        borderRadius: '35px',
        padding: '20px',
        fontFamily: 'Helvetica',
        fontWeight: 'Light',
        backgroundColor: 'rgba(189, 195, 199, 0.5)',
        fontSize: '20px',
        width: '28%'
    }
    let textStyle = {
        color: 'rgba(0,0,0,1)'
    }
    return (
      <div style={style}>
        {Object.entries(this.state).map(([key, value]) => {
          return <h2 style={textStyle} key={key}>{key}: {value}</h2>
        })}
        {/* <button onClick={this.refreshData}>refresh</button> */}
        {/* {this.state.map((data)=> {
          return <h2>{data}</h2>
        })} */}
      </div>
    );
  }
}

export default App;

