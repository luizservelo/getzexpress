import React, { Component } from 'react';
import { ScrollView, View, Text, Image, TouchableOpacity, StatusBar, Dimensions, TextInput } from 'react-native';
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
    },
    comments: [
      {
        id: 1,
        author: 'Luiz Servelo',
        comment: 'Aqui tem um bando de louco, louco por ti cigarros...'
      },
      {
        id: 2,
        author: 'Luiz Servelo',
        comment: 'Aqui tem um bando de louco, louco por ti cigarros...'
      },
      {
        id: 3,
        author: 'Luiz Servelo',
        comment: 'Aqui tem um bando de louco, louco por ti cigarros...'
      },
      {
        id: 4,
        author: 'Luiz Servelo',
        comment: 'Aqui tem um bando de louco, louco por ti cigarros...'
      },
      {
        id: 5,
        author: 'Luiz Servelo',
        comment: 'Aqui tem um bando de louco, louco por ti cigarros...'
      },
      {
        id: 6,
        author: 'Luiz Servelo',
        comment: 'Aqui tem um bando de louco, louco por ti cigarros...'
      },

      {
        id: 7,
        author: 'Luiz Servelo',
        comment: 'Aqui tem um bando de louco, louco por ti cigarros...'
      },
      {
        id: 8,
        author: 'Luiz Servelo',
        comment: 'Aqui tem um bando de louco, louco por ti cigarros...'
      },
    ]
  }

  componentDidMount(){
    console.log(this.state.post, width, height);

    var coverWidth = width;
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
        fontSize: 16,
        margin: 0,
        padding: 20,
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
        <View style={styles.commentBar}>
          <Text style={styles.commentBarText}>Fala malandro! Deixe seu comentário!</Text>
        </View>
        <View style={styles.commentContainer}>
          <TextInput 
            style={styles.commentInput}
            multiline={true}
            placeholder="Opa! É só comentar aqui..."
          />
          <TouchableOpacity style={styles.commentButton}>
            <Text style={styles.commentButtonText}>Enviar</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.userCommentArea}>
            {
              this.state.comments.map(comment => (
                <View style={styles.userCommentContainer}>
                  <View style={styles.userCircleName}>
                    <Text style={styles.userCircleNameText}>{comment.author[0]}</Text>
                  </View>
                  <View style={styles.commentContent}>
                    <Text style={styles.commentContentAuthor}>{comment.author}</Text>
                    <Text style={styles.commentContentText}>{comment.comment}</Text>
                  </View>
                </View>
              ))
            }
          </View>
      </ScrollView>
    );
  }
}

