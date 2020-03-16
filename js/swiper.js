import React, { Component } from 'react'

import {Text,Image,View,Dimensions,Linking,TouchableOpacity,TouchableHighlight} from 'react-native'

import Swiper from 'react-native-swiper'

const {width, height}=Dimensions.get('window')

 class Swipe extends Component {
    render() {
        return (
       
<View style={{width:width,height:height*2,marginTop:40,position:'absolute',left:0,right:0,top:40}}>


<Swiper 
activeDotStyle={{backgroundColor:'white',marginTop:60,position:'absolute'}}
dotStyle={{borderColor:'white',borderWidth:1,marginTop:60}}
style={{height:height*0.8}} autoplay={true} showsButtons={false} autoplayTimeout={3} >

<View
style={{backgroundColor:'#C30F49',height:height*0.3,width:width*0.6,marginLeft:width*0.2}}
>

<Text style={{color:'white',fontSize:15,fontWeight:'bold',margin:'auto',position:'absolute',top:'42%',left:'35%'}}>
    Click Here
</Text>

<TouchableOpacity
onPress={()=>{
    this.props.navigation.jumpTo('tedx')
}
}>

<Image resizeMode="contain"  source={require('../kits/pic1.jpg')} style={{height:height*0.3,width:'100%'}} />

</TouchableOpacity>
</View>


<View
style={{backgroundColor:'#C30F49',height:height*0.3,width:width*0.6,marginLeft:width*0.2,padding:0}}
>

<Text style={{color:'white',fontSize:15,fontWeight:'bold',margin:'auto',position:'absolute',top:'42%',left:'35%'}}>
    Click Here
</Text>
<TouchableOpacity
onPress={()=>Linking.openURL('https://www.watcho.com/watch/spotlightSeries/details/dark-destinations/834787')}
>

<Image resizeMode="contain" style={{height:height*0.3,width:'100%'}} source={require('../kits/pic2.jpg')} />
</TouchableOpacity> 


</View>


<View
style={{backgroundColor:'#C30F49',height:height*0.3,width:width*0.6,marginLeft:width*0.2}}
>

<Text style={{color:'white',fontSize:15,fontWeight:'bold',margin:'auto',position:'absolute',top:'42%',left:'5%'}}>
https://gaana.com/season/paranormal-reality-season-1
</Text>

<TouchableOpacity
onPress={()=>Linking.openURL('https://gaana.com/season/paranormal-reality-season-1')}
>
<Image resizeMode="contain" style={{height:height*0.3,width:'100%'}} source={require('../kits/pic3.jpg')} />

</TouchableOpacity>

</View>



<View
style={{backgroundColor:'#C30F49',height:height*0.3,width:width*0.6,marginLeft:width*0.2}}
>

<Text style={{color:'white',fontSize:15,fontWeight:'bold',margin:'auto',position:'absolute',top:'42%',left:'20%'}}>
Get Your Copy Now
</Text>

<TouchableOpacity
onPress={()=>Linking.openURL('https://www.amazon.in/Haunted-Terrifying-Real-life-Encounters-Spirits/dp/0143444697/ref=sr_1_1?crid=1S6TK7W3PTFYP&keywords=haunted+jay+alani&qid=1581248117&sprefix=haunted+%2Caps%2C502&sr=8-1')}
>
<Image resizeMode="contain" style={{height:height*0.3,width:'100%'}} source={require('../kits/pic4.jpg')} />
</TouchableOpacity>


</View>



<View
style={{backgroundColor:'#C30F49',height:height*0.3,width:width*0.6,marginLeft:width*0.2}}
>

<Text style={{color:'white',fontSize:15,fontWeight:'bold',margin:'auto',position:'absolute',top:'42%',left:'35%'}}>
    Click Here
</Text>

<TouchableOpacity
onPress={()=>{
    this.props.navigation.jumpTo('media')
}}>
<Image resizeMode="contain" style={{height:height*0.3,width:'100%'}} source={require('../kits/pic5.jpg')} />
</TouchableOpacity>


</View>

<Image resizeMode="contain" style={{height:height*0.3,width:width}} source={require('../kits/pic6.jpg')} />

</Swiper>

</View>

        )
    }
}

export default Swipe
