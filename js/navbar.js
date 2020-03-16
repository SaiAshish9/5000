import React,{useEffect,useState} from 'react'

import {Dimensions,Image,View,TouchableOpacity} from 'react-native'

// import {FontAwesome5} from '@expo/vector-icons'



import {faBars,faTimes} from '@fortawesome/free-solid-svg-icons'



import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome'


const {width, height} = Dimensions.get('window')


export const Navbar=({navigation})=>{

    const [check,setCheck] = useState(false)

    useEffect(() => {
        const unsubscribe = navigation.addListener('drawerOpen', e => {
       setCheck(true)
        });
      
        return unsubscribe;
      }, [navigation]);
    
    
      useEffect(() => {
        const unsubscribe = navigation.addListener('drawerClose', e => {
          setCheck(false)
        });
      
        return unsubscribe;
      }, [navigation]);

return (


<View style={{width:width,height:height*0.1,borderLeftColor:'white',borderWidth:0.5,position:'absolute',zIndex:2,top:0}}>

<Image source={require('../kits/redblue.jpg')} style={{width:width,height:height*0.1,position:'absolute',zIndex:-1}} resizeMode="cover"/>


<TouchableOpacity
  onPress={
    ()=>{
      navigation.jumpTo('home')
    }
  }
  style={{width:width*0.4}}
  >
  <Image source={require('../kits/logo.png')} style={{width:100,height:22,marginLeft:30,marginTop:height*0.035}}/>
  </TouchableOpacity>

<TouchableOpacity 
                      onPress={
                          ()=>{
                            navigation.openDrawer()
                            }   
                        } 
                      style={{position: 'absolute',top:height*0.035,right:15,width:50}} >
                      {
                        !check?(

                          <FontAwesomeIcon 
                          color={'white'} icon={faBars}  size={17}  />
                   

                      )
                      :
                      (
                        <FontAwesomeIcon 
                        color={'white'} icon={faTimes}  size={17}  />
                    )
                        
                    }
                        </TouchableOpacity>


</View>

)



}