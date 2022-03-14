import React, { Component } from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

class LifeCycle extends Component {
  constructor(props) {
    super(props)
    console.log(`${Date.now()}. this is constructor`)
    this.state = {
      numberOfRefresh: 0
    }
    setInterval(() => {
      console.log(`${Date.now()}. Change State each 2 second`)
      this.setState(previousState => {
        return { numberOfRefresh: previousState.numberOfRefresh + 1 }
      })
    }, 2000)
  }

  componentWillMount() {
    console.log(`${Date.now()}. this is componentWillMount`)
  }

  componentDidMount() {
    console.log(`${Math.floor(Date.now())}. this is componentDidMount`)
  }

  shouldComponentUpdate() {
    console.log(`${Math.floor(Date.now())}. this is shouldComponentUpdate`)
    return false
  }

  componentWillUpdate() {
    console.log(`${Math.floor(Date.now())}. this is componentWillUpdate`)
  }

  componentDidUpdate() {
    console.log(`${Math.floor(Date.now())}. this is componentDidUpdate`)
  }

  render() {
    console.log(`${Math.floor(Date.now())}. this is render function`)
    return (
      <View style={{
        flex: 1,
        marginTop: 100,
      }}></View>
    )
  }
}

export default class LifeCycleComponent extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    var lifeCycle = <LifeCycle propA="abc"></LifeCycle>
    return (
      <View>
        {lifeCycle}
      </View>
    )
  }
}