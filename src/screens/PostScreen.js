import React from 'react';
import {
  View,
  Text,
  Image,
  Dimensions,
  ScrollView,
  TouchableOpacity
} from 'react-native';

class PostScreen extends React.Component {
  handleCommentPress = () => {
    this.props.navigation.navigate('commentList');
  };
  render() {
    const { ItemBlog } = this.props.navigation.state.params;
    const imageWidth = Dimensions.get('window').width;

    return (
      <View style={styles.container}>
        <ScrollView>
          <Image
            source={{ uri: ItemBlog.imageUrl }}
            style={{ width: imageWidth, height: imageWidth }}
            resizeMode="cover"
          />
          <Text style={styles.content}>{ItemBlog.content}</Text>
        </ScrollView>
        <View style={styles.meta}>
          <Text style={styles.metaText}>{ItemBlog.author}</Text>
          <TouchableOpacity onPress={this.handleCommentPress}>
            <Text style={styles.metaText}>comments: {ItemBlog.viewed}</Text>
          </TouchableOpacity>
          <Text style={styles.metaText}>viewed: {ItemBlog.viewed}</Text>
        </View>
      </View>
    );
  }
}

const styles = {
  container: {
    flex: 1,
    backgroundColor: '#FFF'
  },
  content: {
    padding: 16,
    fontSize: 16,
    lineHeight: 16 * 1.5,
    textAlign: 'justify'
  },
  meta: {
    flexDirection: 'row',
    padding: 16,
    paddingTop: 8,
    paddingBottom: 8,
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: '#005ea0'
  },
  metaText: {
    color: '#f8f8f8',
    fontWeight: 'bold'
  }
};

export default PostScreen;
