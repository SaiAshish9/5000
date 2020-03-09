import React, { Component } from 'react'

import {Image,View,Dimensions} from 'react-native'

import Swiper from 'react-native-swiper'

const {width, height}=Dimensions.get('window')

 class Swipe extends Component {
    render() {
        return (
       
<View style={{width:width,height:height*0.4,marginTop:40,position:'absolute',left:0,right:0,top:40}}>


<Swiper 
activeDotStyle={{backgroundColor:'white'}}
dotStyle={{borderColor:'white',borderWidth:1}}
style={{height:width/2}} autoplay={true} showsButtons={false} autoplayTimeout={3} >
<Image resizeMode="contain"  source={require('../kits/pic1.jpg')} style={{height:height*0.3,width:width}} />
    
<Image resizeMode="contain" style={{height:height*0.3,width:width}} source={require('../kits/pic2.jpg')} />


<Image resizeMode="contain" style={{height:height*0.3,width:width}} source={require('../kits/pic3.jpg')} />

</Swiper>

</View>

        )
    }
}

export default Swipe
