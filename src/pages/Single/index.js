import React, { Component } from 'react';
import { ScrollView, View, Text, Image, TouchableOpacity, StatusBar } from 'react-native';
import HTML from 'react-native-render-html';

import styles from './styles';
export default class Single extends Component {

  state = {
    post: this.props.navigation.getParam('post', 'NO-ID')
  }
  
  render() {

    console.log(this.state);

    return (
      <ScrollView style={styles.postContainer}>
        <StatusBar barStyle="dark-content" />
        <Text style={styles.title}>{this.state.post.title.rendered}</Text>
        <Image 
        
          source={{uri: this.setState.post.acf.banner.sizes.large}}
          style={{ width: this.setState.post.acf.banner.sizes.large-width , height: this.setState.post.acf.banner.sizes.large-height}}
        />
      </ScrollView>
    );
  }
}

