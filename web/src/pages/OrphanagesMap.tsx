import React from "react";
import { Link } from 'react-router-dom';
import { FiPlus } from 'react-icons/fi';
import { Map, TileLayer } from 'react-leaflet';

import 'leaflet/dist/leaflet.css'; 

import mapMarker from "../images/logo-simplified.svg";

import '../styles/pages/orphanages.css'

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
      </Map>

      <div>
        <Link to="" className="create-orphanage">
          <FiPlus size={32} color="FFF" />
        </Link>
      </div>
    </div>
  );
}

export default OrphanagesMap;
