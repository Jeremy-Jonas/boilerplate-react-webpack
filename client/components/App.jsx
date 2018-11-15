import React from 'react'
import request from 'superagent'

class App extends React.Component {
  
  state = {
    temp: null,
    updated: null,
    locationURL: null,
    ip: null,
    city: null
  }

  componentDidMount () {
    this.getIP()
  }

  getIP () {
    request.get('https://api.ipify.org?format=json')
    .then(res => {this.setState({
      ip: res.body.ip,
      locationURL: 'https://geo.ipify.org/api/v1?apiKey=at_SEaLHHzyDOtWBhKfMMh9HiRxcVM1j&ipAddress=' + res.body.ip
    })})
    let url = 'https://geo.ipify.org/api/v1?apiKey=at_SEaLHHzyDOtWBhKfMMh9HiRxcVM1j&ipAddress=' + res.body.ip
    this.getCity (url)
    
    

    /*request.get('http://api.apixu.com/v1/current.json?key=3beb485786ef46ad9f8223822181311&q=auckland')
    .then(res => {
      this.setState({
        temp: res.body.current.temp_c + '°C',
        updated: res.body.current.last_updated//,
        // city: res.body.location.name
      })
    })*/
  }

  getCity (url) {
    console.log(url)
    let locReq = this.state.locationURL
    request.get(locReq)
    .then(res => {this.setState({city: res.body.location.city})})
    
  }



  render () {
    return (
      <div>
        <p><button>Add new data</button></p>
        <p><button>View existing</button></p>
        <p className='temp'>Today's outdoor temp: {this.state.temp}</p>
        <p className='updated'>(as at {this.state.updated})</p>
        <p>{this.state.ip}</p>
        <p className='location'>Location set as {this.state.city}. (Determined by your IP) [{this.state.locationURL}]</p>
      </div>
    )
  }
}

export default App

// ip api key at_SEaLHHzyDOtWBhKfMMh9HiRxcVM1j