import React from 'react'
import Map from './Map'

export default class MapContainer extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      markers: [{
        position: {
          lat: 42.720514,
          lng: 18.999225
        }
      }]
    }
  }

  render () {
    return (
      <div style={{ height: '100%' }}>
        <Map
          containerElement={
            <div style={{ height: '100%' }}/>
          }
          mapElement={
            <div style={{ height: '100%' }} />
          }
          markers={this.state.markers}
        />
      </div>
    )
  }
}
