import React, { Component } from 'react';
import { Button, View, Text, TouchableOpacity } from 'react-native';
import {Audio} from 'expo-av';
export default class Stopbutton extends Component {
  render(){
    return(
      <TouchableOpacity style={{backgroundColor: 'red', borderRadius: 100, width:200, height:200, justifyContent: "center", alignItems: "center", marginLeft:80, borderWidth:3, borderColor:'orange'}}>
      <Text style={{ fontSize:30, fontWeight: "bold"}} onPress={() => {
        Audio.setIsEnabledAsync(false);
      }}>StopAllSounds</Text>
      </TouchableOpacity>
    )
  }
}