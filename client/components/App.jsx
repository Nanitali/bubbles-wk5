import React from 'react'

import DuckForm from './DuckForm'
import { getDucks } from '../api'
import MapContainer from './MapContainer'
import secretKeys from '../../secretKeys'

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
    document.getElementById('gmscript').src = secretKeys
    return (
      <React.Fragment>
        <h1>Quackity Quack-Quack!!</h1>
        {this.state.recievedData && <MapContainer ducks={this.state.ducks}/>}
        <DuckForm />
      </React.Fragment>
    )
  }
}

export default App
