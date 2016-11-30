import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { fetchCurrentLocationWeather, fetchCurrentLocationForecast, fetchPinnedLocationWeather, fetchPinnedLocationForecast } from '../actions/index'

import Header from '../containers/Header'

class App extends Component {
  getCurrentLocation(){
    navigator.geolocation.getCurrentPosition((position) => {
      this.props.fetchCurrentLocationWeather(position)
      this.props.fetchCurrentLocationForecast(position)
    })
  }

  getPinnedLocation() {
    this.props.fetchPinnedLocationWeather()
    this.props.fetchPinnedLocationForecast()
  }

  componentDidMount(){
    this.getCurrentLocation();
    this.getPinnedLocation();
  }
  render() {
    return (
      <article>
        <Header />
        {this.props.children}
      </article>
    )
  }
}

const mapStateToProps = state => {

  return {};
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({fetchCurrentLocationWeather, fetchCurrentLocationForecast, fetchPinnedLocationWeather, fetchPinnedLocationForecast}, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
