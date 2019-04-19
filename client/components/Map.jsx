import React from 'react'
import {
  withGoogleMap,
  GoogleMap,
  InfoWindow,
  Marker
} from 'react-google-maps'

const Map = withGoogleMap(props => {
  return (
    <GoogleMap
      ref={props.onMapLoad}
      defaultZoom={8}
      defaultCenter={{ lat: 39.174413, lng: 8.263783 }}>
      <Marker
      // key={this.props.id}
        position={{ lat: 42.720514, lng: 18.999225 }}
        onClick={() => this.props.onMarkerClick(marker)}
      />

    </GoogleMap>
  )
})

export default Map
