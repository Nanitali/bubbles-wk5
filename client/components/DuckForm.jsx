import React from 'react'

import { addDuck } from '../api'

export default class DuckForm extends React.Component {
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
      .then(() => {
        this.setState({
          message: 'Your duck was added!',
          name: '',
          lat: '',
          lng: '',
          contact: '',
          details: '',
          timeframe: '',
          type: ''
        }, this.props.refresh)
      })
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
            className="input"
            name='name'/>
          <br/>
          <br/>
          Location: <input
            type='text'
            value={this.state.lat}
            onChange={this.changeHandler}
            placeholder='lat'
            className="input"
            name='lat'/>
          <input
            type='text'
            value={this.state.lng}
            onChange={this.changeHandler}
            placeholder='lng'
            className="input"
            name='lng'/>
          <br/>
          <br/>
          Details: <input
            type='text'
            value={this.state.details}
            onChange={this.changeHandler}
            placeholder='Need help with / are offering?'
            className="input"
            name='details'/>
          <br/>
          <br/>
          Timeframe: <input
            type='text'
            value={this.state.timeframe}
            onChange={this.changeHandler}
            placeholder='When?'
            className="input"
            name='timeframe'/>
          <br/>
          <br/>
          Type: <input
            type='text'
            value={this.state.type}
            onChange={this.changeHandler}
            placeholder='Request/Offer'
            className="input"
            name='type'/>
          <br/>
          <br/>
          <input className="button is-primary"
            type='submit'
            value='Add'/>
        </form>
        <p>{this.state.message}</p>
      </div>
    )
  }
}
