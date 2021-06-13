import React, { Component } from 'react';
import { Button, View, Text, TouchableOpacity } from 'react-native';
import {Audio} from 'expo-av';
export default class Soundbutton6 extends Component {
playSound = async () => {
     await Audio.Sound.createAsync(
       {
         uri:'https://snack-code-uploads.s3.us-west-1.amazonaws.com/~asset/e433f3abb32eae74f55e102ec37607bf'
       },
       {
         shouldPlay: true
       }
     )
}
  render(){
    return(
      <TouchableOpacity style={{backgroundColor: 'white', borderRadius: 100, width:200, height:200, justifyContent: "center", alignItems: "center", marginLeft:80, borderWidth:3, borderColor:'orange'}}>
      <Text style={{ fontSize:30, fontWeight: "bold"}} onPress={this.playSound}>BloodSweatandTears</Text>
      </TouchableOpacity>
    )
  }
}