import React from 'react'

import {Animated,TouchableWithoutFeedback,Image,Linking,View,Text,Dimensions,TouchableOpacity} from 'react-native'

import {Navbar} from './navbar'


import {Video} from 'expo-av'

const {width, height} = Dimensions.get("window")





 export default class Videos extends React.Component{
   
constructor(props){
    super(props)
    this.state={
        fadeAnim:new Animated.Value(0)
    }
}

componentDidMount(){

        this.display=setInterval(   
  ()=>{
    Animated.timing(
      this.state.fadeAnim,
      {toValue:1},
    ).start()
  
  },200)


}


componentWillUnmount(){
  
        
    clearInterval(this.display)
        }

   render(){

    const {navigation}=this.props

    return(
        <View style={{borderLeftColor:'white',borderWidth:1,flex:1,backgroundColor:'black',justifyContent:'center',alignItems:'center'}}>

<Image source= {require('../kits/videos.jpg')} style={{opacity:0.28,zIndex:-1,position:'absolute',height:height,width: width,top:height*0.1,right:0,left:0}} />

<Navbar navigation={this.props.navigation} style={{borderLeftColor:'white',borderWidth:1}} />

<View style={{alignItems:'center',justifyContent:'center'}}>


<Animated.View
        style={{opacity:this.state.fadeAnim,
        transform:[{
          translateX:this.state.fadeAnim.interpolate({
            inputRange:[0,1],
            outputRange:[150,0]
          })
        }]
        
        }}
        >

<View>
    <Text style={{fontSize:20,marginTop:30,marginBottom:20,color:'white',fontWeight:'bold',alignItems:'center'}}>
        Latest Videos
    </Text>
</View>

</Animated.View>



<TouchableOpacity
// onPress={()=>Video.seek(0)}
> 

</TouchableOpacity>


<Animated.View
        style={{opacity:this.state.fadeAnim,
        transform:[{
          translateY:this.state.fadeAnim.interpolate({
            inputRange:[0,1],
            outputRange:[150,0]
          })
        }]
        
        }}
        >


{/* <TouchableWithoutFeedback>
<Video
source={require('../kits/video.mp4')}
// source={{ uri: 'http://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4' }}
resizeMode="cover"
rate={1.0}
ref={(ref:Video)=>this.video=ref}
volume={1.0}
isMuted={false}
shouldPlay
isLooping
style={{height:height*0.3,marginBottom:10,width:width*0.8,borderColor:'white',borderWidth:3}}
/>
</TouchableWithoutFeedback> */}

<TouchableOpacity
onPress={()=>Linking.openURL('https://youtu.be/DGBpfUTDavc')}
>
{/* <Video
source={V}
ref={(ref:Video)=>this.video=ref}
resizeMode="cover"
progressUpdateInterval={250.0} 
paused={false}
style={{height:height*0.3,width:width*0.8,borderColor:'white',borderWidth:3}}
/> */}

<Image
source={require('../kits/video1.jpg')}
style={{height:height*0.3,marginBottom:20,width:width*0.8,borderColor:'white',borderWidth:3}}
/>


</TouchableOpacity>


<TouchableOpacity
onPress={()=>Linking.openURL('https://youtu.be/oL1cPkd1mxA')}
>
{/* <Video
source={V}
ref={(ref:Video)=>this.video=ref}
resizeMode="cover"
progressUpdateInterval={250.0} 
paused={false}
style={{height:height*0.3,width:width*0.8,borderColor:'white',borderWidth:3}}
/> */}

<Image
source={require('../kits/video2.jpg')}
style={{height:height*0.3,width:width*0.8,borderColor:'white',borderWidth:3}}
/>


</TouchableOpacity>

<View style={{alignItems:'center',justifyContent:'center'}}>
<TouchableOpacity 
onPress={()=>Linking.openURL('https://www.youtube.com/channel/UCtg5jAbdQf6YLXjhNQuSHXg')}
style={{width:100,borderColor:'white',margin:10,borderWidth:2,borderRadius:8,padding:7}}
>

    <Text style={{color:'white',fontWeight:'bold'}}>
          Watch More
    </Text>
</TouchableOpacity>

</View>

</Animated.View>

</View>

        </View>
    )
}
 }

