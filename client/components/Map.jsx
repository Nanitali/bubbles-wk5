import React from 'react'
import {
  withGoogleMap,
  GoogleMap,
  InfoWindow,
  Marker
} from 'react-google-maps'

const Map = withGoogleMap(props => {
  const duckArray = props.ducks.map(marker => {
    return <Marker
      key={marker.id}
      position={{ lat: marker.lat, lng: marker.lng }}
      // onClick={() => this.props.onMarkerClick(marker)}
    />
  })
  return (
    <GoogleMap
      ref={props.onMapLoad}
      defaultZoom={16}
      defaultCenter={{ lat: -36.8650451, lng: 174.7751602 }}>
      <div>
        {duckArray}
      </div>
    </GoogleMap>
  )
})

export default Map
