import React from 'react';
import { StyleSheet, Text, View,Dimensions,Image } from 'react-native';

import {createDrawerNavigator,DrawerContentScrollView,DrawerItemList,DrawerItem} from '@react-navigation/drawer'

import {NavigationContainer} from '@react-navigation/native'

import {Main} from './js/main'

import {About} from './js/about'

import {Work} from './js/work'

import {Tedx} from './js/tedx'

import Video from './js/videos'

import {Contact} from './js/contact'

import {Podcast} from './js/podcast'

import {Media} from './js/media'


import {faHeadphones,faLink,faMicrophone,faVideo,faPlaceOfWorship,faPhone,faHome,faInfoCircle} from '@fortawesome/free-solid-svg-icons'
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome'

// import {FontAwesome5} from '@expo/vector-icons'




const {width,height} = Dimensions.get('window')

const Drawer=createDrawerNavigator()

console.disableYellowBox=true

function CustomDrawerNavigator(props){

return (
  <DrawerContentScrollView {...props} style={{backgroundColor:'black'}}>


<DrawerItemList {...props}>

<DrawerItem
label="Close Drawer"
onPress={
  ()=>props.navigation.closeDrawer()
}>
        </DrawerItem>


        <DrawerItem
label="Toggle Drawer"
onPress={
  ()=>props.navigation.toggleDrawer()
}
>
        </DrawerItem>

</DrawerItemList>

  </DrawerContentScrollView>

)

}

export default function App() {
  return (
  
    <NavigationContainer
 
    >


    <Drawer.Navigator 
    
    drawerContentOptions={{
      activeTintColor:'red',
      inactiveTintColor:'white',
    activeBackgroundColor:'black',
    itemStyle:{
      margin:10,
      width:'100%',
    
      marginRight:'130%',
      height:90 ,
      marginTop:0
           },
           labelStyle:{
       position:'absolute',
left:-15
      }
    }}
    
    drawerStyle={{
    backgroundColor:'white',
    width:width*0.6,
    color:'white',
    borderRightColor:'white',
    borderWidth:1
    }}
    
    drawerContent={
      props =>CustomDrawerNavigator(props)
    } initialRouteName="home" >

<Drawer.Screen
  name="home"
  options={{
drawerLabel:'Home',
drawerIcon:({focused})=>{
  return  <FontAwesomeIcon icon={faHome} color={focused?'red':'white'} size={15} style={{position:'absolute', left:0,top:14}} />
}

  }
  }
  component={Main}/>

 

<Drawer.Screen
  name="about"
  options={{
    drawerIcon:({focused})=>{
      return  <FontAwesomeIcon icon={faInfoCircle} color={focused?'red':'white'} size={15} style={{position:'absolute', left:0,top:14}}  />
    }  , 
  drawerLabel:'about'

  }}
  component={About}/>



<Drawer.Screen
  name="work"
  options={{
    drawerIcon:({focused})=>{
      return  <FontAwesomeIcon icon={faPlaceOfWorship} color={focused?'red':'white'} size={15} style={{position:'absolute', left:0,top:14}} />
    },
  drawerLabel:'Work'

  }}
  component={Work}/>

  

<Drawer.Screen
  name="latest videos"
  options={{
    drawerIcon:({focused})=>{
      return  <FontAwesomeIcon icon={faVideo} color={focused?'red':'white'} size={15} style={{position:'absolute', left:0,top:14}}  />
    }  , 
  
  drawerLabel:'Latest Videos'

  }}
  component={Video}/>


<Drawer.Screen
  name="podcast"
  options={{
    drawerIcon:({focused})=>{
      return  <FontAwesomeIcon icon={faHeadphones} color={focused?'red':'white'} size={15} style={{position:'absolute', left:0,top:14}}/>
    }  ,
  drawerLabel:'Podcast'

  }}
  component={Podcast}/>

 

<Drawer.Screen
  name="contact"
  options={{
     drawerIcon:({focused})=>{
    return  <FontAwesomeIcon icon={faPhone} color={focused?'red':'white'} size={15}  style={{position:'absolute', left:0,top:14}} />
  }  ,
  drawerLabel:'Contact'
  }}
  component={Contact}/>

<Drawer.Screen
  name="tedx"
  options={{
     drawerIcon:({focused})=>{
    return  <FontAwesomeIcon icon={faMicrophone} color={focused?'red':'white'}  size={15} style={{position:'absolute', left:0,top:14}} />
  }, 
  drawerLabel:'Tedx talks'
  
  }

}
  component={Tedx}/>


<Drawer.Screen
  name="media"
  options={{
     drawerIcon:({focused})=>{
    return  <FontAwesomeIcon icon={faLink} color={focused?'red':'white'}  size={15} style={{position:'absolute', left:0,top:14}} />
  }, 
  drawerLabel:'media links'
  
  }

}
  component={Media}/>


    </Drawer.Navigator>


    </NavigationContainer>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
