import React from 'react';
import "./Header.css";
import BigInfo from './BigInfo.js';

class Header extends React.Component {
    render() {
        return (
            <div className='header'>
                {/* <BigInfo title="Medina Lake water level: " dataSource="https://waterservices.usgs.gov/nwis/dv/?format=json&sites=08179500&siteStatus=all"/> */}
                <div className='row justify-content-evenly'>
                    <div className='col-sm'><HeaderInfo title="Medina Lake water level: " dataSource="https://waterservices.usgs.gov/nwis/dv/?format=json&sites=08179500&siteStatus=all"/></div>
                    <div className='col-sm'><HeaderInfo title="Medina Lake water level: " dataSource="https://waterservices.usgs.gov/nwis/dv/?format=json&sites=08179500&siteStatus=all"/></div>
                    <div className='col-sm'><HeaderInfo title="Medina Lake water level: " dataSource="https://waterservices.usgs.gov/nwis/dv/?format=json&sites=08179500&siteStatus=all"/></div>
                    <div className='col-sm'><HeaderInfo title="Medina Lake water level: " dataSource="https://waterservices.usgs.gov/nwis/dv/?format=json&sites=08179500&siteStatus=all"/></div>
                    <div className='col-sm'><HeaderInfo title="Medina Lake water level: " dataSource="https://waterservices.usgs.gov/nwis/dv/?format=json&sites=08179500&siteStatus=all"/></div>
                </div>
            </div>
        );
    }
}

class HeaderInfo extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            error: null,
            isLoaded: false,
            data: 0
          };
    }

    componentDidMount() {
        fetch(this.props.dataSource)
          .then(res => res.json())
          .then(
            (result) => {
                this.setState({
                isLoaded: true,
                data: result.value.timeSeries[6].values[0].value[0].value
                });
            },
            (error) => {
                this.setState({
                isLoaded: true,
                error
                });
            }
          )
      }

    render() {
        return (
            <div className='header-info'>
                <div className='row justify-content-center'>
                    {this.props.title}
                </div>
                <div className='row justify-content-center'>
                    {this.state.data}
                </div>
            </div>
        );
    }
}

export default Header;