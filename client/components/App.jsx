import React from 'react'
import { getDucks } from '../api'

import MapContainer from './MapContainer'

class App extends React.Component {
  state = {
    ducks: {},
    recievedData: false
  }

  componentDidMount () {
    getDucks()
      .then(ducks => {
        this.setState({
          ducks: ducks,
          recievedData: true
        })
      })
  }

  render () {
    return (
      <React.Fragment>
        <h1>Quackity Quack-Quack!!</h1>
        {this.state.recievedData && <MapContainer ducks={this.state.ducks}/>}
      </React.Fragment>
    )
  }
}

export default App
