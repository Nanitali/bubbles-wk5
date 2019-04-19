import React from 'react'

import { getDucks } from '../api'

import Map from './Map'
import MapContainer from './MapContainer'

const App = () => {
  getDucks()
    .then(ducks => console.log(ducks))
  return (
    <React.Fragment>
      <h1>React development has begun!</h1>
      <MapContainer />
    </React.Fragment>
  )
}

export default App
