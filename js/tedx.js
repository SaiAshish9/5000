import React from 'react'

import {ScrollView,Image,TouchableOpacity,Animated,Text,View,Dimensions,Linking} from 'react-native'

import {Navbar} from './navbar'

const {width, height} = Dimensions.get("window")


export class Tedx extends React.Component{

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

return(



    <View style={{borderLeftColor:'white',borderWidth:1,flex:1,backgroundColor:'black',justifyContent:'center',alignItems:'center'}}>

        <Navbar navigation={this.props.navigation}/>

        <Image  source= {require('../kits/tedx.jpg')} style={{opacity:0.28,zIndex:-1,position:'absolute',height:height,width: width*2.9,top:height*0.1,right:0,left:0}} />

   <ScrollView>
 
<View style={{alignItems:'center',justifyContent:'center',marginTop:height*0.1}}>



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
Tedx Talks
    </Text>
</View>

        </Animated.View>
    


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
<TouchableOpacity
onPress={()=>Linking.openURL('https://youtu.be/vsA_5MiLCsk')}
>
<Image
source={require('../kits/t1.jpg')}
style={{height:height*0.3,marginBottom:20,width:width*0.8,borderColor:'white',borderWidth:3}}
/>

</TouchableOpacity>
<TouchableOpacity
onPress={()=>Linking.openURL('https://youtu.be/fLQSXQR99jI')}
>
<Image
source={require('../kits/t2.jpg')}
style={{height:height*0.3,marginBottom:20,width:width*0.8,borderColor:'white',borderWidth:3}}
/>

</TouchableOpacity>

<TouchableOpacity
onPress={()=>Linking.openURL('https://youtu.be/xlZA0khw2GE')}
>
<Image
source={require('../kits/t3.jpg')}
style={{height:height*0.3,marginBottom:20,width:width*0.8,borderColor:'white',borderWidth:3}}
/>

</TouchableOpacity>

<TouchableOpacity
onPress={()=>Linking.openURL('https://youtu.be/L0fAaC0aoDk')}
>
<Image
source={require('../kits/t4.jpg')}
style={{height:height*0.3,marginBottom:20,width:width*0.8,borderColor:'white',borderWidth:3}}
/>


</TouchableOpacity>





</Animated.View>



        </View>
        </ScrollView>


    
    </View>


)

}

}