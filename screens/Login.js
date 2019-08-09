import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Image,
  Alert
} from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

export default class LoginView extends Component {

  constructor(props) {
    super(props);
    state = {
      email   : '',
      password: '',
    }
  }

  onClickListener = (viewId) => {
    //const { email, password } = this.state;
    //Alert.alert('Credentials', `${email} + ${password}`);
    Alert.alert("Alert", "Button pressed "+viewId);
  }

  // onLogin() {
  //   const { email, password } = this.state;
  //   Alert.alert('Credentials', `${email} + ${password}`);
  // }

  render() {
    return (
      <View style={styles.container}>

        {/* How to place an image next to textInput */}

        <View style={styles.inputContainer}>
          <Image style={styles.inputIcon} source={{uri: 'https://png.icons8.com/ultraviolet/40/000000/forward-message.png'}}/>
          <TextInput style={styles.inputs}
              placeholder="Email"
              keyboardType="email-address"
              underlineColorAndroid='transparent'
              onChangeText={(email) => this.setState({email})}/>
        </View>
        
        {/* This is an example of how to put two images next to each other, and also an textInput
          * please pay atention to the styles used to do it.
        */}
        <View style={styles.inputContainer}>
          <Image style={styles.inputIcon} source={{uri: 'https://png.icons8.com/ultraviolet/40/000000/forward-message.png'}}/>
          <Image style={styles.inputIcon} source={{uri: 'https://png.icons8.com/key-2/ultraviolet/50/3498db'}}/>
          <TextInput style={styles.inputs}
            placeholder= "Email"
            keyboardAppearance= "dark"
            underlineColorAndroid='transparent'
          />
        </View>

        <View style={styles.inputContainer}>
          <Image style={styles.inputIcon} source={{uri: 'https://png.icons8.com/key-2/ultraviolet/50/3498db'}}/>
          <TextInput style={styles.inputs}
              placeholder="Password"
              secureTextEntry={true}
              underlineColorAndroid='transparent'
              onChangeText={(password) => this.setState({password})}/>
        </View>

        {/* This is an example of button that changes its opacity upon interaction */}
        <TouchableOpacity style={[styles.buttonContainer, styles.loginButton]} onPress={() => this.onClickListener('login')}>
            <View>
                <Text style={styles.loginText}>Login</Text>
            </View>
        </TouchableOpacity>
    

        {/* <Button title={'Login'}
          style={styles.button}
          onPress={this.onLogin.bind(this)}
        /> */}

        {/* This is an example of button that changes its opacity upon interaction */}
        <TouchableOpacity style={styles.buttonContainer} onPress={() => this.onClickListener('restore_password')}>
            <Text>Forgot your password?</Text>
        </TouchableOpacity>

        {/* This is an example of button that changes its opacity upon interaction */}
        <TouchableOpacity style={styles.buttonContainer} onPress={() => this.onClickListener('register')}>
            <Text>Register</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

{/* Styles used to make the screen */}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#DCDCDC',
  },
  inputContainer: {
      borderBottomColor: '#F5FCFF',
      backgroundColor: '#FFFFFF',
      borderRadius:30,
      borderBottomWidth: 1,
      width:250,
      height:45,
      marginBottom:20,
      flexDirection: 'row',
      alignItems:'center'
  },
  inputs:{
      height:45,
      marginLeft:16,
      marginEnd: 10,
      borderBottomColor: '#FFFFFF',
      flex:1,
  },
  inputIcon:{
    width:30,
    height:30,
    marginLeft:15,
    justifyContent: 'center'
  },
  button:{
    height: 45,
    width:300
  },
  buttonContainer: {
    height:45,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom:20,
    width:250,
    borderRadius:30
  },
  loginButton: {
    backgroundColor: "#00b5ec",
  },
  loginText: {
    color: 'white',
  }
});