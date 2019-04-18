import React from 'react'

import { getDucks } from '../api'

const App = () => {
  getDucks()
    .then(ducks => console.log(ducks))
  return (
    <h1>React development has begun!</h1>
  )
}

export default App
