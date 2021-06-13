import React, { Component } from 'react';
import { Button, View, Text, TouchableOpacity } from 'react-native';
import {Audio} from 'expo-av';
export default class Soundbutton7 extends Component {
playSound = async () => {
     await Audio.Sound.createAsync(
       {
         uri:'https://snack-code-uploads.s3.us-west-1.amazonaws.com/~asset/78ffd221b45d0e31f5bcd3e889ef6aca'
       },
       {
         shouldPlay: true
       }
     )
}
  render(){
    return(
      <TouchableOpacity style={{backgroundColor: 'purple', borderRadius: 100, width:200, height:200, justifyContent: "center", alignItems: "center", marginLeft:80, borderWidth:3, borderColor:'orange'}}>
      <Text style={{ fontSize:30, fontWeight: "bold"}} onPress={this.playSound}>Mic Drop</Text>
      </TouchableOpacity>
    )
  }
}