import React, { Component } from 'react';
import { Button, View, Text, TouchableOpacity } from 'react-native';
import {Audio} from 'expo-av';
export default class Soundbutton5 extends Component {
playSound = async () => {
     await Audio.Sound.createAsync(
       {
         uri:'https://snack-code-uploads.s3.us-west-1.amazonaws.com/~asset/10c0e0ad7aa1cad889b6cf9887395bb3'
       },
       {
         shouldPlay: true
       }
     )
}
  render(){
    return(
      <TouchableOpacity style={{backgroundColor: 'orange', borderRadius: 100, width:200, height:200, justifyContent: "center", alignItems: "center", marginLeft:80, borderWidth:3, borderColor:'orange'}}>
      <Text style={{ fontSize:30, fontWeight: "bold"}} onPress={this.playSound}>Fake Love</Text>
      </TouchableOpacity>
    )
  }
}