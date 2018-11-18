import React from 'react'
// import request from 'superagent'
import Weather from './Weather.jsx'
import Profile from './Profile.jsx'

class App extends React.Component {
  render () {
    return (
      <div>
        <Profile />
        <Weather />
      </div>
    )
  }
}

export default App
