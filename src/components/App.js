import React, { Component, Fragment } from 'react'
import {Header, Footer} from './Layouts'
import Exercises from './excercises'

export default class App extends Component {
  render() {
    return <Fragment>
            <Header/>
            <Exercises/>
            <Footer/>
          </Fragment>
  }
}

