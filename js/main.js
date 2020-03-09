import React,{useState,useEffect} from 'react'

import {StyleSheet,Image,Text,View,Dimensions,TouchableOpacity} from 'react-native'


import {FontAwesome5} from '@expo/vector-icons'

const {width, height} = Dimensions.get('window')

import {Navbar} from './navbar'

import Home from './home'


export const Main =({navigation})=>{

 
         

return (
    <View style={{height:height,width:width,position:'absolute',backgroundColor:'black',borderLeftColor:'white',borderWidth:1}}>

<Navbar navigation={navigation} style={{borderWidth:0}}/>


<Home navigation={navigation}/>


                        </View>

)

}