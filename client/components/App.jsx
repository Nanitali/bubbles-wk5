import React from 'react'

import DuckForm from './DuckForm'
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

  refreshData = () => {
    this.setState({
      recievedData: false
    }, () => {
      getDucks()
        .then(ducks => {
          this.setState({
            ducks: ducks,
            recievedData: true
          })
        })
    })
  }

  render () {
    return (
      <React.Fragment>
        <div style={{ marginLeft: '10%', marginRight: '10%' }}>
          <h1 className="title is-1">Quackity Quack-Quack!!</h1>
          {this.state.recievedData && <MapContainer ducks={this.state.ducks}/>}
          <DuckForm refresh={this.refreshData} />
        </div>
      </React.Fragment>
    )
  }
}

export default App
