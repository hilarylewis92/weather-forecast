import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import{ fetchCurrentLocationWeather, fetchPinnedLocationWeather } from '../actions/index'

import Header from '../containers/Header'

class App extends Component {
  getCurrentLocation(){
    navigator.geolocation.getCurrentPosition((position) => {
      this.props.fetchCurrentLocationWeather(position)
    })
  }

  componentWillMount(){
    this.getCurrentLocation();
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
  return bindActionCreators({fetchCurrentLocationWeather, fetchPinnedLocationWeather}, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
