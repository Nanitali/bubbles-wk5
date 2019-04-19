import React from 'react'

import { addDuck } from '../api'

export default class DuckFrom extends React.Component {
  state = {
    message: '',
    name: '',
    lat: '',
    lng: '',
    contact: '',
    details: '',
    timeframe: '',
    type: ''
  }

  changeHandler = e => {
    let message = ''
    if (e.target.name === 'lat' || e.target.name === 'lng') {
      if (isNaN(e.target.value)) {
        message = 'Lat and lng should be numbers'
      }
    }
    this.setState({
      [e.target.name]: e.target.value,
      message
    })
  }

  submitHandler = e => {
    e.preventDefault()
    const newDuck = {
      name: this.state.name,
      lat: this.state.lat,
      lng: this.state.lng,
      contact: this.state.contact,
      details: this.state.details,
      timeframe: this.state.timeframe,
      type: this.state.type
    }
    addDuck(newDuck)
  }

  render () {
    return (
      <div>
        <form onSubmit={this.submitHandler}>
          Name: <input
            type='text'
            value={this.state.name}
            onChange={this.changeHandler}
            placeholder='Your name'
            name='name'/>
          <br/>
          <br/>
          Location: <input
            type='text'
            value={this.state.lat}
            onChange={this.changeHandler}
            placeholder='lat'
            name='lat'/>
          <input
            type='text'
            value={this.state.lng}
            onChange={this.changeHandler}
            placeholder='lng'
            name='lng'/>
          <br/>
          <br/>
          Details: <input
            type='text'
            value={this.state.details}
            onChange={this.changeHandler}
            placeholder='Need help with / are offering?'
            name='details'/>
          <br/>
          <br/>
          Timeframe: <input
            type='text'
            value={this.state.timeframe}
            onChange={this.changeHandler}
            placeholder='When?'
            name='timeframe'/>
          <br/>
          <br/>
          Type: <input
            type='text'
            value={this.state.type}
            onChange={this.changeHandler}
            placeholder='Request/Offer'
            name='type'/>
          <br/>
          <br/>
          <input
            type='submit'
            value='Add'/>
        </form>
        <p>{this.state.message}</p>
      </div>
    )
  }
}
