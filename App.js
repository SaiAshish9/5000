import React from 'react';
import { StyleSheet, Text, View,Dimensions,Image } from 'react-native';

import {createDrawerNavigator,DrawerContentScrollView,DrawerItemList,DrawerItem} from '@react-navigation/drawer'

import {NavigationContainer} from '@react-navigation/native'

import {Main} from './js/main'

import {About} from './js/about'

import {Work} from './js/work'

import Video from './js/videos'

import {Contact} from './js/contact'

import {Podcast} from './js/podcast'


import {FontAwesome5} from '@expo/vector-icons'

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
      margin:20,
        }
    }}
    
    drawerStyle={{
    backgroundColor:'white',
    // width:width*0.4,
    color:'white',
    borderRightColor:'white',
    borderWidth:1
    }}
    
    drawerContent={
      props =>CustomDrawerNavigator(props)
    } initialRouteName="home" >

<Drawer.Screen
  name="home"
  options={{drawerIcon:({focused})=>{
    return  <FontAwesome5 name='home' color={focused?'red':'white'}  size={12}  />
}
  }
  }
  component={Main}/>


<Drawer.Screen
  name="about"
  options={{drawerIcon:({focused})=>{
    return  <FontAwesome5 name='info-circle' color={focused?'red':'white'}  size={12}  />
  }  
  }}
  component={About}/>


<Drawer.Screen
  name="work"
  options={{drawerIcon:({focused})=>{
    return  <FontAwesome5 name='place-of-worship' color={focused?'red':'white'}  size={12}  />
  }  
  }}
  component={Work}/>


<Drawer.Screen
  name="latest videos"
  options={{drawerIcon:({focused})=>{
    return  <FontAwesome5 name='video' color={focused?'red':'white'}  size={12}  />
  }  
  }}
  component={Video}/>

<Drawer.Screen
  name="podcast"
  options={{drawerIcon:({focused})=>{
    return  <FontAwesome5 name='headphones' color={focused?'red':'white'}  size={12}  />
  }  
  }}
  component={Podcast}/>


<Drawer.Screen
  name="contact"
  options={{drawerIcon:({focused})=>{
    return  <FontAwesome5 name='phone' color={focused?'red':'white'}  size={12}  />
  }  
  }}
  component={Contact}/>


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
