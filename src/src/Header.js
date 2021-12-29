import React from 'react';
import "./Header.css";
// import BigInfo from './BigInfo.js';

const headerData = [
    {   name: 'Spillway Elevation',
        getData(result) { return "1,064.20 ft" }
    },
    {   name: 'Current Surface Elevation',
        getData(result) { return result.value.timeSeries[10].values[0].value[0].value + " ft"; }
    },
    {   name: 'Feet Low',
        getData(result) { return (1064.20 - result.value.timeSeries[6].values[0].value[0].value).toFixed(2) + " ft"; }
    },
    {   name: 'Max Capacity',
    getData(result) { return "254,823 acre-ft" }
    },
    {   name: 'Current Capacity',
    getData(result) { return (result.value.timeSeries[5].values[0].value[0].value).toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",") + " acre-ft"; }
    },
    {   name: 'Percent Full',
        getData(result) { return ((result.value.timeSeries[5].values[0].value[0].value / 254823)*100).toFixed(2) + '%'; }
    },
];

class Header extends React.Component {
    constructor(props) {
        super(props);
        this.state = ({
            isLoaded: false,
            data: 0,
            error: false,
            });
    }

    componentDidMount() {
        fetch("https://waterservices.usgs.gov/nwis/dv/?format=json&sites=08179500&siteStatus=all")
          .then(res => res.json())
          .then(
            (result) => {
                this.setState({
                isLoaded: true,
                data: result,
                error: false
                });
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
        var headerInfos = [];
        for(var i = 0; i < headerData.length; i++){
            headerInfos.push(
                <div className='col-md'>
                    <HeaderInfo 
                        title={headerData[i].name} 
                        data={(this.state.isLoaded && !this.state.error)? headerData[i].getData(this.state.data) : "---"} 
                    />
                </div>
            );
        }
        return (
            <div className='header'>
                <div className='row justify-content-evenly'>
                    {headerInfos}
                </div>
            </div>
        );
    }
}

class HeaderInfo extends React.Component {
    render() {
        return (
            <div className='header-info row'>
                <div className='col justify-content-center'>
                    {this.props.title}
                </div>
                <div class="w-100 d-none d-md-block"></div>
                <div className='col justify-content-center'>
                    {this.props.data}
                </div>
            </div>
        );
    }
}

export default Header;