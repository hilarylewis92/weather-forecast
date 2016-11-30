import React, { Component } from 'react';
import { connect } from 'react-redux';
import {bindActionCreators} from 'redux';

import {fetchCurrentLocationForecast} from '../actions/index'

import Header from '../components/Header'

class App extends Component {
  getCurrentLocation(){
    navigator.geolocation.getCurrentPosition((position) => {
      // localForecast = position.coords.latitude;
      //call action to fetch current weather
      return this.props.fetchCurrentLocationForecast(position)
      // console.log(position.coords.latitude, position.coords.longitude)
    });
  }
  componentWillMount(){
    // this.props.fetchCurrentLocationForecast()
    this.getCurrentLocation();
  }
  render() {
    console.log(this.props);
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

function test(){
  console.log('this is a test');
}

const mapDispatchToProps = dispatch => {
  // return an object of methods you'd like
  // to dispatch as redux actions
  return bindActionCreators({fetchCurrentLocationForecast}, dispatch);
  // return {test}
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
