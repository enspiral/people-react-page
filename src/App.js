import React, { Component } from 'react'
import persist from 'react-localstorage-hoc'

import './App.css'

import Ambassadors from './components/Ambassadors'
import ProfilesGrid from './components/ProfilesGrid'

class App extends Component {
  constructor () {
    super()
    this.state = {
      people: null
    }
  }

  componentDidMount () {
    getPeople()
      .then((data) => {
        console.log('getpeople data: ', data)
        this.setState({
          people: data
        })
      }).catch((err) => {
        // console.log('Big ooooooops! ', err)
      })
  }

  render () {
    let { people } = this.state
    return (
      <div className='App'>
        <div className='community-titles'>Ambassadors</div>
        {people ? <Ambassadors ambassadors={people} /> : <div />}
        <div className='community-titles'>Members & Contributors</div>
        {people ? <ProfilesGrid people={people} /> : <div />}
      </div>
    )
  }
}

function getPeople () {
  return window.fetch(process.env.REACT_APP_PERSON_API_URL, {
    method: 'get'
  }).then((response) => {
    console.info('Api request success: ', response)
    return response.json()
  }).catch((err) => {
    console.error('Api request error: ', err)
  })
}
export default persist(App)
