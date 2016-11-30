import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { fetchCurrentLocationWeather, fetchCurrentLocationForecast } from '../actions/index'

import Header from '../containers/Header'

class App extends Component {
  getCurrentLocation(){
    navigator.geolocation.getCurrentPosition((position) => {
      this.props.fetchCurrentLocationWeather(position)
      this.props.fetchCurrentLocationForecast(position)
    })
}
  testCurrentLocation(){
    console.log('test');
    this.getCurrentLocation();
  }
  componentDidMount(){
    // this.props.fetchCurrentLocationForecast()
    this.getCurrentLocation();
  }
  render() {
    return (
      <article>
        <Header />
        <button onClick={this.testCurrentLocation.bind(this)}>Test</button>
        {this.props.children}
      </article>
    )
  }
}

const mapStateToProps = state => {

  return {};
}

const mapDispatchToProps = (dispatch) => {
  // return an object of methods you'd like
  // to dispatch as redux actions
  return bindActionCreators({fetchCurrentLocationWeather, fetchCurrentLocationForecast}, dispatch);
  // return {test}
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
