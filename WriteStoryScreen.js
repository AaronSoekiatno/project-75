import React from 'react';
import { KeyboardAvoidingView } from 'react-native';
import {StyleSheet, Text, View, TouchableOpacity, TextInput, ToastAndroid} from 'react-native';
import {Header} from 'react-native-elements';
import db from '../config.js';

export default class WriteStoryScreen extends React.Component {
constructor(){
    super();
    this.state={
        title:'',
        author:'',
        story:''
    }
}

submitStory=async()=>{
  console.log("hi")
  db.collection("story").doc("s001").update({
    'author':this.state.author,
    'title':this.state.title,
    'story':this.state.story
  })
  this.setState({
    title:'',
    author:'',
    story:''
  })
  var message = 'You story has been submitted.';
  ToastAndroid.show(message,ToastAndroid.SHORT);
  console.log("hi")
}
  render(){
    return(
      <View>
          <KeyboardAvoidingView style = {styles.container}behavior="padding"enabled>
        <Header backgroundColor={'pink'} 
        centerComponent={{text:'Story Hub',style:{width:100,height:50}}}/>
        <TextInput 
        style={styles.title}
        placeholder="Story Title"
        onChangeText={(text)=>{
            this.setState({
                title:text
            })
        }}
        />

        <TextInput 
        style={styles.author}
        placeholder="Author"
        onChangeText={(text)=>{
            this.setState({
                author:text
            })
        }}
        />

        <TextInput 
        style={styles.story}
        placeholder="Write your Story"
        multiline={true}
        onChangeText={(text)=>{
            this.setState({
                story:text
            })
        }}
        />
        <TouchableOpacity 
        onPress={this.submitStory}
        style={styles.submit}>
        <Text>Submit</Text>
        </TouchableOpacity>
        
        </KeyboardAvoidingView>
        </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title:{
    borderWidth:2,
    marginTop:50,
    width:200
  },
  author:{
      borderWidth:2,
      margin:50,
      width:200
  },
  story:{
      borderWidth:2,
      margin:-15,
      height:200,
      width:200
  },
  submit:{
      backgroundColor:'pink',
      width:50,
      height:25,
      borderRadius:12,
      justifyContent:'center',
      alignItems:'center',
      marginTop:50,
  }
});