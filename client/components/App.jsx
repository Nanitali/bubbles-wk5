import React from 'react'

import DuckForm from './DuckForm'

import { getDucks } from '../api'

const App = () => {
  getDucks()
    .then(ducks => console.log(ducks))
  return (
    <DuckForm />
  )
}

export default App
