import React, { Component } from 'react';
import { Button, View, Text } from 'react-native';
import {Audio} from 'expo-av';
import Soundbutton1 from './components/Button1';
import Soundbutton2 from './components/Button2';
import Soundbutton3 from './components/Button3';
import Soundbutton4 from './components/Button4';
import Soundbutton5 from './components/Button5';
import Soundbutton6 from './components/Button6';
import Soundbutton7 from './components/Button7';
import Stopbutton from './components/StopSound';

export default class App extends Component {
  render(){
    return(
     <View style={{marginTop:100, marginRight:70, marginLeft:70}}>
     <Text style={{fontSize:45, fontWeight:"bold"}}>Our Favourit-e BTS songs</Text>
     <Soundbutton1/>
     <Soundbutton2/>
     <Soundbutton3/>
     <Soundbutton4/>
     <Soundbutton5/>
     <Soundbutton6/>
     <Soundbutton7/>
     <Stopbutton/>
     </View> 
    )
  }
}