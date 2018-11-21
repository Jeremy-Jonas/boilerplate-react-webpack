import React from 'react'
import request from 'superagent'

class Profile extends React.Component {
  state = {
    joke: 'Finding a joke...'
  }

  componentDidMount () {
    this.getJoke()
  }

  getJoke () {
    request.get('https://geek-jokes.sameerkumar.website/api')
    .then(res => {
      this.setState({
        joke: res.body
      })
    })
  }

  render () {
    return (
      <div className='profile eight columns'>
        <h4 className='profileText'>This is the profile component!</h4>
        <h5 className='profileText'>Here's a joke while you wait...</h5>
        <h5 className='profileText'>{this.state.joke}</h5>
      </div>
    )
  }
}

export default Profile
