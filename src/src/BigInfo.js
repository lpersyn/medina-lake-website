import React from 'react';
import "./BigInfo.css";

/* <BigInfo title="Medina Lake water level: " dataSource="https://waterservices.usgs.gov/nwis/dv/?format=json&sites=08179500&siteStatus=all"/> */


class BigInfo extends React.Component {
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
                // console.log("test");
                // console.log(result);
                this.setState({
                isLoaded: true,
                data: result.value.timeSeries[6].values[0].value[0].value
                });
            },
            // Note: it's important to handle errors here
            // instead of a catch() block so that we don't swallow
            // exceptions from actual bugs in components.
            (error) => {
                this.setState({
                isLoaded: true,
                error
                });
                // console.log("ERROR!!!");
            }
          )
      }

    render() {
        return (
            <h1 classname='BigInfo-h1'>{this.props.title}<span class-name='BigInfo-data'>{this.state.data}</span></h1>
        );
    }
}

export default BigInfo;