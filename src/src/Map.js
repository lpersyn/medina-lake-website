import React from 'react';
import "./Map.css";

const paramCodes = {
    totalprecip: '00045',
    flowrate: '00060',
    gaugeheight: '00065',
    surfacearea: '00053',
    reservoirstorage: '00054',
    surfaceelevation: '62614',
};

const reservoirData = [
    {
        sitenumber: '08179500',
        location: 'Medina Lake Dam',
        getSE(result) {return result[this.sitenumber][paramCodes.surfaceelevation] + " ft"},
        getRC(result) {return result[this.sitenumber][paramCodes.reservoirstorage]},
    },
    {
        sitenumber: '08180010',
        location: 'Diversion Lake',
        getSE(result) {return result[this.sitenumber][paramCodes.surfaceelevation]},
        getRC(result) {return result[this.sitenumber][paramCodes.reservoirstorage]},
    },
];

const riverData = [
    {
        sitenumber: '08178861',
        location: 'North Prong',
        getGH(result) {return result[this.sitenumber][paramCodes.gaugeheight]},
        getFR(result) {return result[this.sitenumber][paramCodes.flowrate]},
    },
    {
        sitenumber: '08178871',
        location: 'West Prong',
        getGH(result) {return result[this.sitenumber][paramCodes.gaugeheight]},
        getFR(result) {return result[this.sitenumber][paramCodes.flowrate]},
    },
    {
        sitenumber: '0817887350',
        location: 'Medina',
        getGH(result) {return result[this.sitenumber][paramCodes.gaugeheight]},
        getFR(result) {return result[this.sitenumber][paramCodes.flowrate]},
    },
    {
        sitenumber: '08178880',
        location: 'Bandera',
        getGH(result) {return result[this.sitenumber][paramCodes.gaugeheight]},
        getFR(result) {return result[this.sitenumber][paramCodes.flowrate]},
    },
    {
        sitenumber: '08178980',
        location: 'English Crossing',
        getGH(result) {return result[this.sitenumber][paramCodes.gaugeheight]},
        getFR(result) {return result[this.sitenumber][paramCodes.flowrate]},
    },
    {
        sitenumber: '08179110',
        location: 'Red Bluff Creek',
        getGH(result) {return result[this.sitenumber][paramCodes.gaugeheight]},
        getFR(result) {return result[this.sitenumber][paramCodes.flowrate]},
    },
    {
        sitenumber: '08180500',
        location: 'South of Diversion Lake',
        getGH(result) {return result[this.sitenumber][paramCodes.gaugeheight]},
        getFR(result) {return result[this.sitenumber][paramCodes.flowrate]},
    },
];

class Map extends React.Component {
    render() {
        return (
            <div className='map-row row'>
                <div className='col-md-7'><MapContainer /></div>
                <div className='col-md-5'><MapInfo /></div>
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
    constructor(props) {
        super(props);
        this.state = ({
            isLoaded: false,
            data: 0,
            error: false,
            });
    }

    cleanData(result){
        result = result.value.timeSeries
        // console.log(result);

        var cleanedData = {};

        for(var i = 0; i < result.length; i++){
            var codes = result[i].name.split(':');
            var siteNum = codes[1];
            var paramCode = codes[2];
            if (Object.keys(cleanedData).includes(siteNum)){
                cleanedData[siteNum][paramCode] = result[i].values[0].value[0].value;
                cleanedData[siteNum]["name"] = result[i].sourceInfo.siteName;
            } else {
                cleanedData[siteNum] = {};
                cleanedData[siteNum][paramCode] = result[i].values[0].value[0].value;
                cleanedData[siteNum]["name"] = result[i].sourceInfo.siteName;
            }
        }

        // console.log(cleanedData);

        return cleanedData;
    }

    componentDidMount() {
        fetch("https://waterservices.usgs.gov/nwis/iv/?format=json&sites=08179500,08180010,08178861,08178871,0817887350,08178880,08178980,08179110,08180500&siteStatus=all")
          .then(res => res.json())
          .then(
            (result) => {
                this.setState({
                isLoaded: true,
                data: this.cleanData(result),
                error: false
                });
                // console.log(this.state.data);
            },
            (error) => {
                this.setState({
                isLoaded: true,
                error: true,
                data: null
                });
            }
          )
      }

    render() {
        var reservoirBody = [];
        for(var i = 0; i < reservoirData.length; i++){
            reservoirBody.push(
                <tr>
                <th scope="row">{reservoirData[i].sitenumber}</th>
                <td>{reservoirData[i].location}</td>
                <td>{(this.state.isLoaded && !this.state.error)? reservoirData[i].getSE(this.state.data) : "---"}</td>
                <td>{(this.state.isLoaded && !this.state.error)? reservoirData[i].getRC(this.state.data) : "---"}</td>
                </tr>
            );
        }

        var riverBody = [];
        for(i = 0; i < riverData.length; i++){
            riverBody.push(
                <tr>
                <th scope="row">{riverData[i].sitenumber}</th>
                <td>{riverData[i].location}</td>
                <td>{(this.state.isLoaded && !this.state.error)? riverData[i].getGH(this.state.data) : "---"}</td>
                <td>{(this.state.isLoaded && !this.state.error)? riverData[i].getFR(this.state.data) : "---"}</td>
                </tr>
            );
        }

        return (
            <div className='map-info'>
                <h3>Reservoir Data</h3>
                <table className="table">
                    <thead>
                        <tr>
                        <th scope="col">Site #</th>
                        <th scope="col">Location</th>
                        <th scope="col">Surface Elevation</th>
                        <th scope="col">Reservoir Storage</th>
                        </tr>
                    </thead>
                    <tbody>
                        {reservoirBody}
                    </tbody>
                </table>
                <h3>River Data</h3>
                <table className="table">
                    <thead>
                        <tr>
                        <th scope="col">Site #</th>
                        <th scope="col">Location</th>
                        <th scope="col">Gauge Height</th>
                        <th scope="col">Flow Rate</th>
                        </tr>
                    </thead>
                    <tbody>
                        {riverBody}
                    </tbody>
                </table>
            </div>
        );
    }
}

export default Map;