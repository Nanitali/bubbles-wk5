import React from 'react'
import {
  withGoogleMap,
  GoogleMap,
  InfoWindow,
  Marker
} from 'react-google-maps'

const apiKey = 'AIzaSyAyVeosTZnr1Aldn4YKc5RJ4FcLelQlX5Y'

export default class Map extends React.Component {
  render () {
    return (
      <GoogleMap defaultZoom={8} defaultCenter={{ lat: 39.174413, lng: 8.263783 }}>
        <Marker
          key={index}
          position={{ lat: 42.720514, lng: 18.999225 }}
          onClick={() => this.props.onMarkerClick(marker)}
        />

      </GoogleMap>
    )
  }
}
