import React, { Component } from 'react'
import persist from 'react-localstorage-hoc'

import { config } from './config.js'

import ListOfAmbassadors from './components/ListOfAmbassadors'
import ProfilesGrid from './components/ProfilesGrid'

class App extends Component {
  constructor () {
    super()
    this.state = {
      people: null,
      firstLoad: true
    }
  }

  componentDidMount () {
    getPeople()
      .then((data) => {
        console.log('getpeople data: ', data)
        this.setState({
          people: data
        })
        if (this.state.firstLoad) {
          this.setState({
            firstLoad: false
          })
          this.forceUpdate()
        }
      }).catch((err) => {
        console.log('Big ooooooops! ', err)
      })
  }

  render () {
    const { people } = this.state
    return (
      <div className='App'>
        {people && <ProfilesGrid people={Object.values(people)} />}
      </div>
    )
  }
}

function getPeople () {
  const url = config.apiPeople
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
