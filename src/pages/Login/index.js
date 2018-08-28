import React, { Component} from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import styles from './styles';

export default class Login extends Component {

  state = {
    email: '',
    senha: ''
  }

  render() {
    return (
      <View>
        <Text>Getz Express</Text>
        <Text>Faça seu login</Text>
        <View style={styles.form}>

          <TextInput 
            style={styles.input}
            autoCapitalize="none"
            autoCorrect={false}
            placeholder="E-mail: "
            underlineColorAndroid="rgba(0,0,0,0)"
            onChange={(email) => this.setState({ email })}
          />
          <TouchableOpacity onPress={() => {
            console.log(this.state.email)
          }}> 
            <Text>Login</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

