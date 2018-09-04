import React, { Component } from 'react';
import { View, Text, TextInput, TouchableOpacity, StatusBar } from 'react-native';
import { NavigationActions } from 'react-navigation';
import styles from './styles';
import API from "../../../lib/api";

export default class Login extends Component {

  static navigationOptions = {
    header: null
  }

  state = {
    email: '',
    senha: '',
    posts: []
  }

  handleLogin = async () => {
    const resetAction = NavigationActions.reset({
      index: 0,
      actions: [
        NavigationActions.navigate({ routeName: 'User' })
      ]
    })

    this.props.navigation.dispatch(resetAction);
  };

  render() {
    return (

      <View style={styles.loginView}>
        <StatusBar barStyle="light-content"/>
        <Text style={styles.title}>Getz Express</Text>
        <Text style={styles.subtitle}>Faça seu login</Text>
        <View style={styles.form}>

          <TextInput 
            style={styles.input}
            autoCapitalize="none"
            autoCorrect={false}
            placeholder="E-mail: "
            underlineColorAndroid="rgba(0,0,0,0)"
            onChange={(email) => this.setState({ email })}
          />
          <TextInput 
            style={styles.input}
            autoCapitalize="none"
            autoCorrect={false}
            placeholder="Senha: "
            underlineColorAndroid="rgba(0,0,0,0)"
            onChange={(senha) => this.setState({ senha })}
          />
          <TouchableOpacity 
            style={styles.button}
            onPress={this.handleLogin}> 
            <Text style={styles.buttonText}>Login</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

