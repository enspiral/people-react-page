import React, { Component } from 'react'
import persist from 'react-localstorage-hoc'

import { config } from './config.js'

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
        {people && <ListOfAmbassadors people={people} />}
        {people && <ProfilesGrid people={people} />}
      </div>
    )
  }
}

function getPeople () {
  const url = process.env.NODE_ENV === 'development' ? config.apiPeople : config.shopifyProxy
  return window.fetch(url, {
    method: 'get'
  }).then((response) => {
    console.info('Api request success: ', response)
    return response.json()
  }).catch((err) => {
    console.error('Api request error: ', err)
  })
}
export default persist(App)
