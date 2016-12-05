import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { fetchCurrentLocationWeather, fetchPinnedLocationWeather, fetchSavedLocationWeather } from '../actions/index'
import Header from '../containers/Header'

class App extends Component {
  componentWillMount() {
    this.getCurrentLocation()

    let zipArray = JSON.parse(localStorage.getItem('zips'))
    if(zipArray === null){
      zipArray = [];
    }
    if(zipArray.length > 0){
      zipArray.forEach((zip)=>{
        this.props.fetchSavedLocationWeather(zip);
      });
    }
  }

  getCurrentLocation() {
    navigator.geolocation.getCurrentPosition((position) => {
      this.props.fetchCurrentLocationWeather(position)
    })
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

const mapStateToProps = (state) => {
  return {}
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({ fetchCurrentLocationWeather, fetchPinnedLocationWeather, fetchSavedLocationWeather }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
