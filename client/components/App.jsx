import React from 'react'
// import request from 'superagent'
import Weather from './Weather.jsx'
import Profile from './Profile.jsx'
import Nav from './Nav.jsx'
import Header from './Header.jsx'

class App extends React.Component {
  render () {
    return (
      <div>
        <div className='row'>
          <Header />
        </div>
        <div className='row'>
          <Nav />
          <Profile />
        </div>
        <div className='row'>
          <Weather />
        </div>
      </div>
    )
  }
}

export default App
