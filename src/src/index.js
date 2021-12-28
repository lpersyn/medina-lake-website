import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.css';
import './index.css';
import Header from './Header.js';
import Map from './Map.js';

ReactDOM.render(
  <React.StrictMode>
    <div className='main-container container h-100 d-flex flex-column justify-content-evenly'>
      <div className='row'>
        <Header />
      </div>
      <div className='row flex-grow-1'>
        <Map/>
      </div>
    </div>
  </React.StrictMode>,
  document.getElementById('root')
);
