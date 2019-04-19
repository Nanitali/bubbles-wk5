import React from 'react'
import Map from './Map'

export default class MapContainer extends React.Component {
    state = {
      ducks: this.props.ducks
    }

    render () {
      return (
        <div style={{ height: '500px' }}>
          <Map
            containerElement={
              <div style={{ height: '100%' }}/>
            }
            mapElement={
              <div style={{ height: '100%' }}/>
            }
            ducks={this.state.ducks}
            // markers={this.state.markers}
          />
        </div>
      )
    }
}
