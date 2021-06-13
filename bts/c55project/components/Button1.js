import React, { Component } from 'react';
import { Button, View, Text, TouchableOpacity } from 'react-native';
import {Audio} from 'expo-av';
export default class Soundbutton1 extends Component {
playSound = async () => {
     await Audio.Sound.createAsync(
       {
         uri:'https://snack-code-uploads.s3.us-west-1.amazonaws.com/~asset/54402f60ae488a54b59a2ba859ab6ebe'
       },
       {
         shouldPlay: true
       }
     )
}
  render(){
    return(
      <TouchableOpacity style={{backgroundColor: 'black', borderRadius: 100, width:200, height:200, justifyContent: "center", alignItems: "center", marginLeft:80, borderWidth:3, borderColor:'orange'}}>
      <Text style={{ fontSize:30, fontWeight: "bold", color: 'white'}} onPress={this.playSound}>DNA</Text>
      </TouchableOpacity>
    )
  }
}