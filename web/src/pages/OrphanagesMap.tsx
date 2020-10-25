import React from "react";
import { Link } from 'react-router-dom';
import { FiPlus, FiArrowRight } from 'react-icons/fi';
import { Map, TileLayer, Marker, Popup } from 'react-leaflet';
import Leaflet from 'leaflet';

import 'leaflet/dist/leaflet.css'; 

import mapMarker from "../images/logo-simplified.svg";

import '../styles/pages/orphanages.css'

const mapIcon = Leaflet.icon({
  iconUrl: mapMarker,
  iconSize: [58, 68],
  iconAnchor: [29, 68],
  popupAnchor: [170, 2],
})

function OrphanagesMap() {
  return (
    <div id="page-orphanages">
      <aside>
        <header>
          <img src={mapMarker} alt="Logo de Happy" />
          <h2>Escolha um orfanato no mapa</h2>
          <p>Muitas crianças estão esperando a sua visita :)</p>
        </header>
        <footer>
          <strong>Atibaia</strong>
          <span>São Paulo</span>
        </footer>
      </aside>

      <Map
        center={[-23.1184729, -46.5555224]}
        zoom={14}
        style={{width: '100%', height: '100%'}}
      >
        <TileLayer
          url={`https://api.mapbox.com/styles/v1/mapbox/outdoors-v11/tiles/256/{z}/{x}/{y}@2x?access_token=${process.env.REACT_APP_MAPBOX_TOKEN}`}
        />

        <Marker 
          position={[-23.1110297, -46.5599524]}
          icon={mapIcon}
        >
          <Popup closeButton={false} min-width={240} maxWidth={240} className="map-popup">
            Lar Dona Mariquinha do Amaral
            <Link to="/orphanages/1">
              <FiArrowRight size={20} color="#FFF" />
            </Link>
          </Popup>
        </Marker>
      </Map>

      <div>
        <Link to="/orphanages/create" className="create-orphanage">
          <FiPlus size={32} color="FFF" />
        </Link>
      </div>
    </div>
  );
}

export default OrphanagesMap;
