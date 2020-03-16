import React,{useState} from 'react'

import {View,Text,Dimensions,Image,TouchableOpacity} from 'react-native'

// import {FontAwesome5} from '@expo/vector-icons'


import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome'

import {faArrowRight,faArrowLeft} from '@fortawesome/free-solid-svg-icons'

import {Navbar} from './navbar'

import Swipe from './swiper'



const {width,height}=Dimensions.get("window")




export const About =({navigation})=> {
    
   

const [selectedRight,setSelectedRight]=useState(true)

        return(
        <View style={{height:height,width:width,borderLeftColor:'white',borderWidth:1,backgroundColor:'black',height:height*1.1}}>

<Navbar navigation={navigation}/>


<Image source= {require('../kits/image.jpg')} style={{zIndex:-1,position:'absolute',opacity:0.46,top:height*0.1,bottom:0,height:height,width: width,right:0,left:0}} />


<Text style={{marginTop:height*0.15,textAlign:'center',fontWeight:'bold',fontSize:17,color: 'white'}}>

HAUNTINGS SO FAR

</Text>



<View style={{width:width,height:height*0.4,marginTop:40,position:'absolute',left:0,right:0,top:40}}>


<Swipe navigation={navigation}/>

</View>






 <View style={{alignItems:'center',justifyContent:'center',padding:width*0.2,height:height*0.3,width:width,position:'absolute',top:height*0.55}}> 

 {
selectedRight?
(<Text style={{color:'white',fontWeight:'bold',textAlign:'center'}}>
Jay, the founder and CEO of The Paranormal Company is a paranormal researcher and investigator. A writer and TedX speaker, Jay has dedicated his career towards exploring the unknown and educating the masses about paranormal reality. 
</Text>):(
<Text style={{color:'white',fontWeight:'bold',alignItems:'center',justifyContent:'center',textAlign:'center'}}>

Being a pioneer in the field of Paranormal Investigation in India, Jay has an array of accolades to his name. He is the official representative of 14 international paranormal research troops including the prestigious Piedmont-Triad Paranormal Investigations and Grey Wolf Paranormal Networking.

</Text>
)
    }

 </View>

{
selectedRight?
(
    <TouchableOpacity 
    onPress={()=>setSelectedRight(false)}
    style={{height:25,width:25,position:'absolute',left:width*0.35,top:height*0.863}}>
<FontAwesomeIcon  color={'white'} icon={faArrowLeft}  size={15}  />
</TouchableOpacity>
):(
    <TouchableOpacity 
    onPress={()=>setSelectedRight(true)}
    style={{justifyContent:'center',alignItems:'center',borderRadius:50,height:25,width:25,position:'absolute',left:width*0.35,top:height*0.855,backgroundColor:'white'}}>
<FontAwesomeIcon  color={'black'} icon={faArrowLeft}  size={12}  />
</TouchableOpacity>
)
}

{
selectedRight?
(
<TouchableOpacity 
    onPress={()=>setSelectedRight(false)}
    style={{borderRadius:50,height:25,width:25, position:'absolute',left:width*0.58,justifyContent:'center',alignItems:'center',top:height*0.855,backgroundColor:'white'}} >
<FontAwesomeIcon  color={'black'} icon={faArrowRight}  size={15}  />
</TouchableOpacity>
):(
    <TouchableOpacity 
    onPress={()=>setSelectedRight(true)}
    style={{ height:25,width:25, position:'absolute',left:width*0.58,top:height*0.862}} >
<FontAwesomeIcon  color={'white'} icon={faArrowRight}  size={12}  />
</TouchableOpacity>
)
}

        </View>
    )}

