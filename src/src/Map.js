import React from 'react';
import "./Map.css";

class Map extends React.Component {
    render() {
        return (
            <div className='map-row row'>
                <div className='col-md-8'><MapContainer /></div>
                <div className='col-md-4'><MapInfo /></div>
            </div>
        );
    }
}

class MapContainer extends React.Component {
    render() {
        return (
            <div className='map-container'>
            </div>
        );
    }
}

class MapInfo extends React.Component {
    render() {
        return (
            <div className='map-info'>
                <table class="table">
                    <thead>
                        <tr>
                        <th scope="col">Site #</th>
                        <th scope="col">Location</th>
                        <th scope="col">Data</th>
                        <th scope="col">Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                        <th scope="row">1</th>
                        <td>Medina Dam</td>
                        <td>80ft</td>
                        <td>active</td>
                        </tr>
                        <tr>
                        <th scope="row">2</th>
                        <td>Bandera Dam</td>
                        <td>3ft</td>
                        <td>active</td>
                        </tr>
                        <tr>
                        <th scope="row">3</th>
                        <td>North Prong</td>
                        <td>2ft</td>
                        <td>active</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        );
    }
}

export default Map;