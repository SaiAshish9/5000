import React,{useEffect,useState} from 'react'

import {Animated,View,Text,Image,TouchableOpacity} from 'react-native'


import {Dimensions} from 'react-native'


import {FontAwesome5} from '@expo/vector-icons'




const {width,height}=Dimensions.get("window")



export default class Home extends React.Component{



  constructor(props){
    super(props)

    this.state={
      current:'home',
    toggle:false,
  title:'' ,
 fadeAnim:new Animated.Value(0)
}
  }
    


    componentDidMount(){




      this.display=setInterval(

  
()=>{this.toggle()
  Animated.timing(
    this.state.fadeAnim,
    {toValue:1},
  ).start()

},200)
   
}

    componentWillUnmount(){

      
clearInterval(this.display)
    }

    toggle(){
const title="I'm a Designer"
const x=title.split()
if(this.state.title.length!=title.length){
  this.setState({
    current:'home',
    toggle:!this.state.toggle,
    title:this.state.title+title[this.state.title.length]
  })}else{
    this.setState({
      current:'home',
      toggle:true,
      title:this.state.title
    })
  }
}

    



    render(){
        return(




            <View>
            
   
          
                    <View style={{width:width/2,height:height*0.9,color:'white'}}>
                    <Image source={require('../kits/home.jpg')} style={{position:'absolute',right:-120,top:height*0.09,left:0,bottom:0,width:width*1.7,height:height}}/>
                 
                  
        
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

<Text style={{color:'white',fontWeight:'bold',fontSize:20,marginTop:height*0.68,marginLeft:width*0.1}}>
        
        {
         this.state.title
       } 
       
       

        {
         this.state.toggle?
         ' |':''
       }
                     </Text>


        <Text style={{marginTop:10,fontSize:12,marginLeft:width*0.1,color:'white'}}>
                    
                    I'm a Designer with extensive experience for over 3 years
                    
                      </Text>
                      </Animated.View>


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
                    <Text style={{marginTop:30,marginLeft:width*0.1,marginRight:16,color:'white',fontWeight:'bold'}}> 
                    Get in my world
                    </Text>



                    <TouchableOpacity
       onPress={
         ()=>{
this.props.navigation.jumpTo('about')
        }
       }
       
       style={{height:30,width:30,marginLeft:160,marginTop:-23,backgroundColor:'white',borderRadius:50,alignItems:'center',justifyContent:'center'}}>
       <FontAwesome5 name='arrow-right' color={'black'} size={12}  />
       </TouchableOpacity>

                    </Animated.View>
                   
                    
                    </View>

              

            </View>
        )
    }
}