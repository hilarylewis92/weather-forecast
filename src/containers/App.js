import React, { Component } from 'react';
import { connect } from 'react-redux';

import Header from '../components/Header'

class App extends Component {
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
  // return an object of redux store data
  // that you'd like available in your component
  return {};
}

const mapDispatchToProps = dispatch => {
  // return an object of methods you'd like
  // to dispatch as redux actions
  return {};
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
