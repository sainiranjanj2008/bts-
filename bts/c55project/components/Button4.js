import React, { Component } from 'react';
import { Button, View, Text, TouchableOpacity } from 'react-native';
import {Audio} from 'expo-av';
export default class Soundbutton4 extends Component {
  playSound = async () => {
     await Audio.Sound.createAsync(
       {
         uri:'https://ia601700.us.archive.org/16/items/bts-boy-with-luv-feat.-halsey-official-mv-army-with-luv-ver./BTS%20%28%EB%B0%A9%ED%83%84%EC%86%8C%EB%85%84%EB%8B%A8%29%20%27%EC%9E%91%EC%9D%80%20%EA%B2%83%EB%93%A4%EC%9D%84%20%EC%9C%84%ED%95%9C%20%EC%8B%9C%20%28Boy%20With%20Luv%29%20%28feat.%20Halsey%29%27%20Official%20MV%20%28%27ARMY%20With%20Luv%27%20ver.%29.mp3'
       },
       {
         shouldPlay: true
       }
     )
}
  render(){
    return(
      <TouchableOpacity style={{backgroundColor: 'yellow', borderRadius: 100, width:200, height:200, justifyContent: "center", alignItems: "center", marginLeft:80, borderWidth:3, borderColor:'orange'}}>
      <Text style={{ fontSize:30, fontWeight: "bold"}} onPress={this.playSound}>Boy With Luv</Text>
      </TouchableOpacity>
    )
  }
}