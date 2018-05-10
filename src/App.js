import React, { Component } from 'react';
import persist from 'react-localstorage-hoc'

import './App.css';

import ProfilesGrid from './components/ProfilesGrid'

class App extends Component { 
  
  // set up our intial highest level react state   
  constructor() {
    super()
    this.state = {
      people: null
    }
  }

  // calls getPeople and sets the state to the returned data
  componentDidMount(){
    getPeople()
    .then((data) => {
      this.setState({
        people: data
      }) 
    }).catch((err) => {
      console.log("Big ooooooops! ", err)
    })
  }

  render() {
    let { people } = this.state
    return (
      <div className="App">
        {people ? <ProfilesGrid people={people}/> : <div/>}
      </div>
    )
  }
}

// getPeople fetchs data from the api
function getPeople() {
  return fetch(process.env.PERSON_API_URL, {
    method: 'get'
  }).then((response) => {
    return response
  }).catch((err) => {
    console.log('Request error: ', err)
  }) 
}

// Wrapping App in the react localStorage higher order component
export default persist(App);
