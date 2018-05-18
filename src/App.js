import React, { Component } from 'react'
import persist from 'react-localstorage-hoc'

import { config } from './config.js'
import './App.css'

import ListOfAmbassadors from './components/ListOfAmbassadors'
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
        console.log('Big ooooooops! ', err)
      })
  }

  render () {
    let { people } = this.state
    return (
      <div className='App'>
        {people && <ListOfAmbassadors ambassadors={people} />}
        {people && <ProfilesGrid people={people} />}
      </div>
    )
  }
}

function getPeople () {
  return window.fetch(config.apiPeople, {
    method: 'get'
  }).then((response) => {
    console.info('Api request success: ', response)
    return response.json()
  }).catch((err) => {
    console.error('Api request error: ', err)
  })
}
export default persist(App)
