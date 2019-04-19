import React from 'react'
import {
  withGoogleMap,
  GoogleMap,
  InfoWindow,
  Marker
} from 'react-google-maps'

const infoStyle = {
  color: 'rebeccaPurple',
  backgroundColor: 'aliceBlue',
  textAlign: 'center'
}

const Map = withGoogleMap(props => {
  const duckArray = props.ducks.map(marker => {
    return <Marker
      key={marker.id}
      position={{ lat: marker.lat, lng: marker.lng }}
      onClick={true}>

      {
        < InfoWindow>
          <div id="info-window">
            <p id="info-details">{marker.details}</p>
            <p style={infoStyle} id="info-type">{marker.type}</p>
            <p id="info-timeframe">{marker.timeframe}</p>
          </div>
        </InfoWindow>
      }
    </Marker>
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
