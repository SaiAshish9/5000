import React,{Component,useState,useEffect} from 'react'

import {ScrollView,View,Text,Image,Dimensions,TouchableOpacity} from 'react-native'


import AnimateNumber from 'react-native-countup'

const {height,width}=Dimensions.get('window')

import {Testimonial} from './testimonial'

import {Navbar} from './navbar'

export class Work extends Component{
 

render(){

    const {navigation}=this.props

    return (

<ScrollView
style={{backgroundColor:'black',borderLeftColor:'white',borderWidth:1}}
>

<View style={{ flex:1,justifyContent:'center',alignItems:'center',backgroundColor:'black',borderLeftColor:'black',borderWidth:1}}>



<Image source= {require('../kits/background.jpg')} style={{position:'absolute',height:height,zIndex:-1,width: width*1.2,bottom:0,top:40,right:-40,left:0,opacity:0.3}} resizeMode={'cover'} />


<Navbar navigation={navigation}/>


<Text style={{fontSize:30,color:'white',fontWeight:'bold',marginTop:110}}>

<AnimateNumber initial={1} timing="linear" countBy={1} value={100} size={30} style={{color:'white'}}/> +
    {/* {this.state.x}  + */}
</Text>




<Text style={{color:'white',marginBottom:50}}>



    Locations Investigated
</Text>

<Text style={{fontSize:30,color:'white',fontWeight:'bold'}}>
<AnimateNumber initial={1} timing="linear" countBy={1} value={150} size={30} style={{color:'white'}}/> +
    {/* {this.state.y}  + */}
</Text>

<Text style={{color:'white',marginBottom:50}}>
    Cases Investigated
</Text>

<Text style={{fontSize:30,color:'white',fontWeight:'bold'}}>
<AnimateNumber initial={1} timing="linear" countBy={1} value={50} size={30} style={{color:'white'}}/> +
 {/* {this.state.z}  + */}
</Text>

<Text style={{color:'white',marginBottom:50}}>
    Publications
</Text>


<Text style={{fontSize:30,color:'white',fontWeight:'bold'}}>
<AnimateNumber initial={1} timing="linear" countBy={1} value={10} size={30} style={{color:'white'}}/> M+
 {/* {this.state.t}  M+ */}
</Text>

<Text style={{color:'white',marginBottom:50}}>
    Podcast Listeners
</Text>

</View>


<View style={{position:'relative',top:-10}}>
    <Testimonial/>
</View>


</ScrollView>

)
}}