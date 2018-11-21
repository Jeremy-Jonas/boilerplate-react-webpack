import React from 'react'
import request from 'superagent'

class Weather extends React.Component {
  state = {
    weather: {
      icon: null,
      temp: null,
      condition: null,
      humidity: null,
      updated: null
    },
    ip: {
      ipAddress: null,
      urlIPapi: null
    },
    location: {
      returnedCity: "Determining location",
      urlWeatherApi: null
    }
  }

  componentDidMount () {
    this.getIP() //start by executing the first function which will get the device's IP
  }

  getIP () {
    request.get('https://api.ipify.org?format=json') //make the request to the API to return device's IP address
    .then(res => {
      this.setState({
        ip: {
          ipAddress: res.body.ip, //set the IP address in state
          urlIPapi: 'https://geo.ipify.org/api/v1?apiKey=at_SEaLHHzyDOtWBhKfMMh9HiRxcVM1j&ipAddress=' + res.body.ip //append the returned IP address to the URL ready to send to the location API
        }
        
      })
      this.getCity() //now run the next function which will use the url created above to request the device's location
    })
  }

  getCity () {
    request.get(this.state.ip.urlIPapi) //make the request to the API to return device's location
    .then(res => {
      this.setState({
        location: {
          returnedCity: res.body.location.city,
          urlWeatherApi: 'http://api.apixu.com/v1/current.json?key=3beb485786ef46ad9f8223822181311&q=' + res.body.location.city //append the returned device location to the URL ready to send to the weather API
        }
      })
      this.getWeather() //now run the next function which will use the url created above to request the weather for the location
    })
  }

  getWeather () {
    request.get(this.state.location.urlWeatherApi) //make the request to the API to return the weather for the device's current location
      .then(res => {
        this.setState({
          weather:{
            temp: res.body.current.temp_c + '°C',
            condition: res.body.current.condition.text,
            humidity: res.body.current.humidity + "%",
            icon: res.body.current.condition.icon,
            updated: res.body.current.last_updated
          }
        })
      })
  }

  render () { //render all the gathered data in the component to display on the site
    return (
      <div className='weather twelve columns'>
        <h3 className='temp'>It is currently {this.state.weather.temp} outside.</h3>
        <h4 className='temp'>The humidity is {this.state.weather.humidity}.</h4>
        <h4 className='conditions'>Conditions: {this.state.weather.condition} <img src={'http:' + this.state.weather.icon}></img></h4>
        <p>Location determined by your IP is {this.state.location.returnedCity}<br />
        Weather data last updated {this.state.weather.updated}</p>

        {/* <h1>Current weather in {this.state.location.returnedCity}</h1>
        <h2>{this.state.weather.condition}</h2>
        <img src={'http:' + this.state.weather.icon}></img>
        <h3>The temparature is {this.state.weather.temp} and the humidity is {this.state.weather.humidity}.</h3>
        <p>Weather data last updated {this.state.weather.updated}</p> */}

        {/* 
        used to test all APIs were returning the data we wanted
        
        <h4>ip: {this.state.ip.ipAddress}</h4>
        <h4>url generated: {this.state.ip.urlIPapi}</h4>
        <h4>returned city: {this.state.location.returnedCity}</h4> */} 
      </div>
    )
  }
}

export default Weather