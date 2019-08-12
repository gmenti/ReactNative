import React, { Component } from 'react';
import {   
    ppRegistry,
  StyleSheet,
  View,
  Animated,
  Image,
  Easing
} from 'react-native'


export default class App extends Component {
    constructor () {
    super()
    this.state = {
      spinValue: new Animated.Value(0)
    }
  }
  componentDidMount () {
    this.spin()
  }
  spin () {
    this.state.spinValue.setValue(0)
    Animated.timing(
      this.state.spinValue,
      {
        toValue: 1,
        duration: 4000,
        easing: Easing.linear
      }
    ).start(() => this.spin())
  }
  render () {
    const getStartValue = () => '0deg'
    const getEndValue = () => '360deg'
    const spin = this.state.spinValue.interpolate({
      inputRange: [0, 1],
      outputRange: [getStartValue(), getEndValue()]
    })
    /* This also works, just using above example to show functions instead of strings /*
    /*
    const spin = this.state.spinValue.interpolate({
       inputRange: [0, 1],
       outputRange: ['0deg', '360deg']
    }) */
    return (
      <Animated.View style={styles.container}>
        <Animated.Image
          style={{ width: 227, height: 200, transform: [{rotate: spin}] }}
        //   source={{uri: 'https://s3.amazonaws.com/media-p.slid.es/uploads/alexanderfarennikov/images/1198519/reactjs.png'}}/>
        source={{uri: 'https://img.icons8.com/color/480/000000/chrome--v1.png'}}/>
      </Animated.View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF'
  },
  welcome: {
    fontSize: 28,
    textAlign: 'center',
    margin: 10
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    fontSize: 19,
    marginBottom: 5
  }
})