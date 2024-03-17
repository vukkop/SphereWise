import React, { useState, useEffect } from 'react'
import { Loader } from "@googlemaps/js-api-loader"

const GoogleMap = () => {
  const [mapLoaded, setMapLoaded] = useState(false);
  const position = { lat: 49.27481316766672, lng: -123.12589421817452 };

  useEffect(() => {
    loadGoogleMaps();
  }, [position]);

  const loadGoogleMaps = async () => {
    const loader = new Loader({
      apiKey: process.env.REACT_APP_GOOGLE_MAP_KEY,
      version: 'weekly',
      libraries: ['maps', 'marker'],
    });
    try {
      const google = await loader.load();
      initMap(google, position);
    } catch (error) {
      console.error('Error loading Google Maps');
    }
  };

  const initMap = (google, position) => {
    const map = new google.maps.Map(document.getElementById('map'), {
      zoom: 11,
      center: position,
      mapId: "DEMO_MAP_ID",
    });
    const marker = new google.maps.marker.AdvancedMarkerElement({
      map: map,
      position: position,
      title: 'SphereWise Tech',
    });
    const infoWindow = new google.maps.InfoWindow({
      content: `<div style="color: #15191e; display: flex; align-items: center;">
                  <div>
                    <img src='https://spherewise.ca/favicon.ico'>
                  </div >
                  <div style='padding: 10px;'>
                    <h3 style="font-weight: bold; font-size: 16px; margin-bottom: 5px;" >
                    SphereWise Tech
                    </h3>
                    <p>From amazing websites to innovative app solutions and bespoke software development</p>
                  </div >
                </div > `,
    });
    infoWindow.open(map, marker);
    marker.addListener('click', () => {
      infoWindow.open(map, marker);
    });
    setMapLoaded(true);
  };

  return (
    <div className='mt-5 mb-7 flex flex-col items-center justify-center'>
      <img src="" alt="" />
      <div id='map' hidden={!mapLoaded} className='w-[80%] h-[400px]'>
      </div>
      {!mapLoaded &&
        <div className='w-[80%] h-[400px] flex flex-col items-center justify-center'><span className="loading loading-spinner text-info loading-lg"></span></div>
      }
    </div >
  )
}

export default GoogleMap
