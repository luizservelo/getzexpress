import React, { Component } from 'react';
import { ScrollView, View, Text, Image, TouchableOpacity, StatusBar } from 'react-native';
import HTML from 'react-native-render-html';

import styles from './styles';
import API from "../../../lib/api";

export default class Posts extends Component {

  state = {
    posts: [],
    pages: 0
  }

  handleGetPosts = async () => {
    const page = this.state.pages + 1;
    this.setState({ pages: page });

		const args = {
			page: page,
			per_page: 10
		};

    const getPosts = await API.getPosts(args);

    this.setState({
      posts: getPosts.posts
    });
  }

  handlePress = (props) => {
    const { post } = props;
    
    this.props.navigation.navigate('Single', {post});
    
  }

  componentDidMount(){
    this.handleGetPosts();
  }

  render() {

    const excerptStyles = {
      p:{
        fontSize: 10,
        margin: 0
      }
    }


    return (
      <ScrollView style={styles.postsContainer}>
        <StatusBar barStyle="dark-content" />
        {
          this.state.posts.map((post) => (
            <TouchableOpacity key={post.id} onPress={() => this.handlePress({ post: post })}>
              <View style={styles.postCard}>
                <Image 
                  source={{uri: post.acf.banner.sizes.thumbnail}}
                  style={styles.postImage}
                />
                <View style={styles.postContents}>
                  <Text style={styles.postTitle}>{post.title.rendered}</Text>
                  <HTML tagsStyles={excerptStyles} html={post.excerpt.rendered} />
                </View>
              </View>
            </TouchableOpacity>
          ))
        }
      </ScrollView>
    );
  }
}

