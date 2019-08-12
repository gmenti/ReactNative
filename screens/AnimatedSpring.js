import React, { Component } from 'react';
import { AppRegistry,
    StyleSheet,
    Text,
    View,
    Animated,
    Image,
    Easing 
} from 'react-native';

export default class App extends Component {
    constructor () {
        super()
        this.springValue = new Animated.Value(0.3)
      }
      spring () {
        this.springValue.setValue(0.3)
        Animated.spring(
          this.springValue,
          {
            toValue: 1,
            friction: 1,
            tension: 1
          }
        ).start()
      }
      render () {
        return (
          <View style={styles.container}>
            <Text style={{marginBottom: 100}} onPress={this.spring.bind(this)}>Spring</Text>
            <Animated.Image
              style={{ width: 227, height: 200, transform: [{scale: this.springValue}] }}
            //   source={{uri: 'https://s3.amazonaws.com/media-p.slid.es/uploads/alexanderfarennikov/images/1198519/reactjs.png'}}/>
            source={{uri: 'https://img.icons8.com/color/480/000000/chrome--v1.png'}}/>
          </View>
        )
      }
    }
    
    const styles = StyleSheet.create({
      container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
      }
    })