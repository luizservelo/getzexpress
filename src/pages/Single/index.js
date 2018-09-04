import React, { Component } from 'react';
import { ScrollView, View, Text, Image, TouchableOpacity, StatusBar, Dimensions } from 'react-native';
import HTML from 'react-native-render-html';

const { width, height } = Dimensions.get('window');

import styles from './styles';
export default class Single extends Component {

  state = {
    post: this.props.navigation.state.params.post,
    coverSize: {
      width: width,
      height: height,
      marginBottom: 15,
    }
  }

  componentDidMount(){
    console.log(this.state.post, width, height);

    var coverWidth = width - 30;
    var coverHeight = this.state.post.acf.banner.sizes['large-height'] / this.state.post.acf.banner.sizes['large-width'] * coverWidth;

    this.setState({
      coverSize: {
        width: coverWidth,
        height: coverHeight
      }
    })
  }
  
  render() {

    const excerptStyles = {
      p:{
        fontSize: 14,
        margin: 0,
        padding: 15,
        color: '#ffffff'
      },
      b:{
        fontWeight: 'bold'
      },
      strong:{
        fontWeight: 'bold'
      }
    }

    return (
      <ScrollView style={styles.postContainer}>
        <StatusBar barStyle="dark-content" />
        <Text style={styles.title}>{this.state.post.title.rendered}</Text>
        <View style={styles.cover}>
          <Image 
            source={{uri: this.state.post.acf.banner.sizes.large}}
            style={this.state.coverSize}
          />
        </View>
        <HTML tagsStyles={excerptStyles} html={this.state.post.content.rendered} imagesMaxWidth={this.state.coverWidth} />
      </ScrollView>
    );
  }
}

