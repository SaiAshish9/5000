

import React,{useState,useEffect,Component}  from 'react'


import {Slider,ScrollView,Linking,ToastAndroid,Text,View,Image,Dimensions,TouchableOpacity} from 'react-native'

import {Navbar} from './navbar'



const {width, height} = Dimensions.get("window")


const urls=[
    'https://lifecyclestore.com/wp-content/uploads/2020/03/introduction-to-the-paranormal-reality-podcast.mp3',
    'https://lifecyclestore.com/wp-content/uploads/2020/03/a-haunted-school.mp3',
    'https://lifecyclestore.com/wp-content/uploads/2020/03/demonic-manifestation.mp3',
    'https://lifecyclestore.com/wp-content/uploads/2020/03/jabarkhet-house.mp3',
    'https://lifecyclestore.com/wp-content/uploads/2020/03/lambi-dehar-mines.mp3',
    'https://lifecyclestore.com/wp-content/uploads/2020/03/my-haunted-hotel.mp3',
    'https://lifecyclestore.com/wp-content/uploads/2020/03/rinta-the-ghost-dog.mp3',
    'https://lifecyclestore.com/wp-content/uploads/2020/03/the-exorcism.mp3',
    'https://lifecyclestore.com/wp-content/uploads/2020/03/the-haunting-of-burari-part-2.mp3',
    'https://lifecyclestore.com/wp-content/uploads/2020/03/end-of-season-1.mp3',

]

const episodenames=[
    'Introduction To The Paranormal Reality Podcast',
    'A Haunted School',
    'Demonic Manifestation',
    'Jabarkhet House',
    'Lambi Dehar Mines',
    'My Haunted Hotel',
    'Rinta The Ghost Dog',
    'The Exorcism',
    'The Haunting Of Burarai Part 2',
    'End Of Season'
]


const urls1=[
    'https://lifecyclestore.com/wp-content/uploads/2020/03/introduction-to-the-paranormal-reality-podcast.mp3',
    'https://lifecyclestore.com/wp-content/uploads/2020/03/a-haunted-school.mp3',
    'https://lifecyclestore.com/wp-content/uploads/2020/03/demonic-manifestation.mp3',
    'https://lifecyclestore.com/wp-content/uploads/2020/03/jabarkhet-house.mp3',
    'https://lifecyclestore.com/wp-content/uploads/2020/03/lambi-dehar-mines.mp3',
    'https://lifecyclestore.com/wp-content/uploads/2020/03/my-haunted-hotel.mp3',
    'https://lifecyclestore.com/wp-content/uploads/2020/03/rinta-the-ghost-dog.mp3',
    'https://lifecyclestore.com/wp-content/uploads/2020/03/the-exorcism.mp3',
    'https://lifecyclestore.com/wp-content/uploads/2020/03/the-haunting-of-burari-part-2.mp3',
    'https://lifecyclestore.com/wp-content/uploads/2020/03/end-of-season-1.mp3',

]

const episodenames1=[
    'Introduction To The Paranormal Reality Podcast',
    'A Haunted School',
    'Demonic Manifestation',
    'Jabarkhet House',
    'Lambi Dehar Mines',
    'My Haunted Hotel',
    'Rinta The Ghost Dog',
    'The Exorcism',
    'The Haunting Of Burarai Part 2',
    'End Of Season'
]



export  class Podcast extends Component{

constructor(props){
    super(props)


    this.state={
        season:'',
        episode:''
    }
}

      
render(){


    const {navigation}=this.props




    return (

<View>

<Navbar navigation={navigation}/>

        
        <View style={{borderLeftColor:'white',borderWidth:0.5,height:height,marginTop:height*0.1,backgroundColor:'black'}}>
  


        <Image source= {require('../kits/video.jpg')} style={{zIndex:-1,position:'absolute',opacity:0.25,height:height*1,width: width*1.3,right:0,left:0}} />
      
    

      <View style={{alignItems:'center', marginTop:30,justifyContent:'center'}}>

      <TouchableOpacity
onPress={()=>this.setState({...this.state,pause:false,season:'',episode:'',ratio:1,duration:1,currentTime:1})}
>
<Text style={{color:'white',marginTop:40,fontSize:20,fontWeight:'bold'}}>
    Podcasts
</Text>
</TouchableOpacity>

{
    !this.state.season&&!this.state.episode?(
        <View>
<TouchableOpacity
onPress={()=>this.setState({...this.state,season:'1'})}
>
<Text style={{color:'white',marginTop:110,fontSize:20,fontWeight:'bold'}}>
Season 1
</Text>
</TouchableOpacity>


<TouchableOpacity
onPress={()=>this.setState({...this.state,season:'2'})}
>
<Text style={{color:'white',marginTop:30,fontSize:20,fontWeight:'bold'}}>
Season 2
</Text>
</TouchableOpacity>
</View>

    ):
    this.state.season==='1'&&!this.state.episode?(


        <View style={{alignItems:'center',justifyContent:'center'}}>

        <TouchableOpacity
      onPress={()=>Linking.openURL(urls[0])}>
    
        <Text style={{color:'white',marginTop:20,fontSize:15,fontWeight:'bold',marginLeft:66}}>
        1 . {episodenames[0]}

        </Text>
        </TouchableOpacity>
        
        
        <TouchableOpacity
        onPress={()=>Linking.openURL(urls[1])}>
        <Text style={{color:'white',marginTop:30,fontSize:15,fontWeight:'bold',marginLeft:-90}}>
        2 . {episodenames[1]}

        </Text>
        </TouchableOpacity>

        <View>
<TouchableOpacity
onPress={()=>Linking.openURL(urls[2])}
>
<Text style={{color:'white',marginTop:30,fontSize:15,fontWeight:'bold'}}>
3 . {episodenames[2]}
</Text>
</TouchableOpacity>


<TouchableOpacity
onPress={()=>Linking.openURL(urls[3])}
>
<Text style={{color:'white',marginTop:30,fontSize:15,fontWeight:'bold'}}>
4 . {episodenames[3]}
</Text>
</TouchableOpacity>

<TouchableOpacity
onPress={()=>Linking.openURL(urls[4])}>
<Text style={{color:'white',marginTop:30,fontSize:15,fontWeight:'bold'}}>
5 . {episodenames[4]}
</Text>
</TouchableOpacity>

<TouchableOpacity
onPress={()=>Linking.openURL(urls[5])}>
<Text style={{color:'white',marginTop:30,fontSize:15,fontWeight:'bold'}}>
6 . {episodenames[5]}
</Text>
</TouchableOpacity>

<TouchableOpacity
onPress={()=>Linking.openURL(urls[6])}>
<Text style={{color:'white',marginTop:30,fontSize:15,fontWeight:'bold'}}>
7 . {episodenames[6]}
</Text>
</TouchableOpacity>

<TouchableOpacity
onPress={()=>Linking.openURL(urls[7])}>
<Text style={{color:'white',marginTop:30,fontSize:15,fontWeight:'bold'}}>
8 . {episodenames[7]}
</Text>
</TouchableOpacity>

<TouchableOpacity
onPress={()=>Linking.openURL(urls[8])}>
<Text style={{color:'white',marginTop:30,fontSize:15,fontWeight:'bold'}}>
9 . {episodenames[8]}
</Text>
</TouchableOpacity>


<TouchableOpacity
onPress={()=>Linking.openURL(urls[9])}>
<Text style={{color:'white',marginTop:30,fontSize:15,fontWeight:'bold'}}>
10 . {episodenames[9]}
</Text>
</TouchableOpacity>

</View>


        </View>


    ):
    
    this.state.season==='2'&&!this.state.episode?
    (
<View>        
    <Text style={{color:'white',fontSize:20,fontWeight:'bold',margin:'auto',marginTop:height*0.2}}>
Coming Soon...
    </Text>  
</View>
    ):(
{/* <Episode episode={this.state.episode}/> */}
    )
}
</View>


        </View>
        </View>  

    )
}}









// import React,{useState,useEffect,Component}  from 'react'


// import {FontAwesome5} from '@expo/vector-icons'

// import {Slider,ScrollView,ToastAndroid,Text,View,Image,Dimensions,TouchableOpacity} from 'react-native'

// import {Navbar} from './navbar'

// import Sound from 'react-native-sound'

// var song=null


// const {width, height} = Dimensions.get("window")


// export class Podcast extends Component{

// constructor(props){
//     super(props)

//     this.state={
//         pause:false,
//         season:'',
//         episode:'',
//         value:0,
//         duration:1,
//         currentTime:1,
//         ratio:1
//     }
// }


// componentDidMount(){

//     const urls=[
//         'http://35.244.1.69/wp-content/uploads/2020/02/EP-1.S2.mp3'
//     ]

//     song=new Sound(require('../kits/audio.mp3'),Sound.MAIN_BUNDLE,(e)=>{
//         if(e){
//             ToastAndroid.show('Error' ,ToastAndroid.SHORT)
//         }
//     }) 




// }


// componentDidUpdate(){
//    if(song!=null){
//     song.getCurrentTime(s=>{
//         this.setState({...this.state,duration:song.getDuration(),currentTime:s,ratio:s/song.getDuration() *100})
//     })
//    } 
// }


// onPressButtonPlay(){
//     this.setState({...this.state,pause:!this.state.pause})

//     if(song!=null){
//         song.play((success)=>{
//             if(!success){
//                 ToastAndroid.show('Error',ToastAndroid.SHORT)
//             }
//             })  
//     }
// }


// onPressButtonPause(){
//     if(song!=null){


//         song.pause()
//     }

//     song.getCurrentTime(s=>{
//         this.setState({...this.state,pause:!this.state.pause,duration:song.getDuration(),currentTime:s,ratio:s/song.getDuration() *100})
//     })
    
// }




      
// render(){



//     return (
//         <ScrollView>

//   <Navbar/>

//         <View style={{borderLeftColor:'white',borderWidth:0.5,height:height}}>
  

//         <View style={{backgroundColor:'black',zIndex:-1,position:'absolute',height:height,width: width,right:0,left:0}}>
      
//         </View>
      
      
//         <Image source= {require('../kits/video.jpg')} style={{zIndex:-1,position:'absolute',opacity:0.23,height:height*1,width: width*1.3,right:0,left:0}} />
      
      
      
       
      
        
    

      {/* <View style={{alignItems:'center', marginTop:30,justifyContent:'center'}}>

      <TouchableOpacity
onPress={()=>this.setState({...this.state,pause:false,season:'',episode:'',ratio:1,duration:1,currentTime:1})}
>
<Text style={{color:'white',marginTop:60,fontSize:20,fontWeight:'bold'}}>
    Podcast's
</Text>
</TouchableOpacity>

{
    !this.state.season&&!this.state.episode?(
        <View>
<TouchableOpacity
onPress={()=>this.setState({...this.state,season:'1'})}
>
<Text style={{color:'white',marginTop:110,fontSize:20,fontWeight:'bold'}}>
Season 1
</Text>
</TouchableOpacity>


<TouchableOpacity
onPress={()=>this.setState({...this.state,season:'2'})}
>
<Text style={{color:'white',marginTop:30,fontSize:20,fontWeight:'bold'}}>
Season 2
</Text>
</TouchableOpacity>
</View>

    ):
    this.state.season==='1'&&!this.state.episode?(


        <View>
        <TouchableOpacity
        onPress={()=>this.setState({...this.state,episode:'1'})}
        >
        <Text style={{color:'white',marginTop:90,fontSize:15,fontWeight:'bold'}}>
        Episode 1
        </Text>
        </TouchableOpacity>
        
        
        <TouchableOpacity
        onPress={()=>this.setState({...this.state,episode:'2'})}
        >
        <Text style={{color:'white',marginTop:30,fontSize:15,fontWeight:'bold'}}>
        Episode 2
        </Text>
        </TouchableOpacity>

        <View>
<TouchableOpacity
onPress={()=>this.setState({...this.state,episode:'3'})}
>
<Text style={{color:'white',marginTop:30,fontSize:15,fontWeight:'bold'}}>
Episode 3
</Text>
</TouchableOpacity>


<TouchableOpacity
onPress={()=>this.setState({...this.state,episode:'4'})}
>
<Text style={{color:'white',marginTop:30,fontSize:15,fontWeight:'bold'}}>
Episode 4
</Text>
</TouchableOpacity>
</View>


        </View>


    ):
    
    this.state.season==='2'&&!this.state.episode?
    (


        <View>
        <TouchableOpacity
        onPress={()=>this.setState({...this.state,episode:'5'})}
        >
        <Text style={{color:'white',marginTop:90,fontSize:15,fontWeight:'bold'}}>
        Episode 5
        </Text>
        </TouchableOpacity>
        
        
        <TouchableOpacity
        onPress={()=>this.setState({...this.state,episode:'6'})}
        >
        <Text style={{color:'white',marginTop:30,fontSize:15,fontWeight:'bold'}}>
        Episode 6
        </Text>
        </TouchableOpacity>

<TouchableOpacity
onPress={()=>this.setState({...this.state,episode:'7'})}
>
<Text style={{color:'white',marginTop:30,fontSize:15,fontWeight:'bold'}}>
Episode 7
</Text>
</TouchableOpacity>


<TouchableOpacity
onPress={()=>this.setState({...this.state,episode:'8'})}
>
<Text style={{color:'white',marginTop:30,fontSize:15,fontWeight:'bold'}}>
Episode 8
</Text>
</TouchableOpacity>

</View>



    ):(
<View style={{alignItems:'center',justifyCenter:'center'}}>

<Image
source={require('../kits/video1.jpg')}
style={{height:height*0.3,marginTop:40,marginBottom:20,width:width*0.8,borderColor:'white',borderWidth:3}}
/>


<Slider
         value={this.state.ratio}
         onValueChange={(value)=>this.setState(()=>({value}))}
         step={1}
         minimumValue={0}
         maximumValue={100}
         width={200}
minimumTrackTintColor={'white'}
thumbTintColor={'white'}
/>



{this.state.ratio!=1 ?(
<Text style={{color:'white',fontWeight:'bold',marginTop:-22,marginLeft:width*0.6,fontSize:10}}>
  {Math.round((this.state.currentTime/60)*100)/100} / {Math.round((this.state.duration/60)*100)/100}  
        </Text>):(
            <Text style={{color:'white',fontWeight:'bold',marginTop:-22,marginLeft:width*0.6,fontSize:10}}>
0.00/0.00
</Text>
        )
        }
<Text style={{color:'white',fontWeight:'bold',marginTop:30,fontSize:20}}>
Episode {this.state.episode}
        </Text>
</View>

    )

}




{
    this.state.episode &&!this.state.pause?(
<TouchableOpacity
onPress={
    this.onPressButtonPlay.bind(this)
    }
> 

<FontAwesome5 color={'white'} 

style={{marginTop:10}} name='pause'  size={17}  />

</TouchableOpacity>
    ):
    this.state.season && this.state.episode? 
    (
    
        <TouchableOpacity
        onPress={
            this.onPressButtonPause.bind(this)
            }
        > 
        
        <FontAwesome5 color={'white'} 
        
        style={{marginTop:10}} name='play'  size={17}  />
        
        </TouchableOpacity>       

    ):(
        <Text>

        </Text>
    )
}


        </View>
        </View>  
        </ScrollView>

    ) */}
// }}





// import React,{useState,useEffect,Component}  from 'react'


// import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome'
// import {faPause,faPlay,faBars,faTimes} from '@fortawesome/free-solid-svg-icons'

// import {Slider,ScrollView,ToastAndroid,Text,View,Image,Dimensions,TouchableOpacity} from 'react-native'


// import Sound from 'react-native-sound'

// var song=null

// import {Navbar} from './navbar'

// const {width, height} = Dimensions.get("window")


// export class Podcast extends Component{

// constructor(props){
//     super(props)

//     this.state={
//         pause:false,
//         season:'',
//         episode:'',
//         value:0,
//         duration:1,
//         currentTime:1,
//         ratio:1
//     }
// }


// componentDidMount(){

//     const urls=[
//         'http://35.244.1.69/wp-content/uploads/2020/02/EP-1.S2.mp3'
//     ]

//     // urls[0]
//     // 
//     song=new Sound(require('../kits/audio.mp3'),Sound.MAIN_BUNDLE,(e)=>{
//         if(e){
//             ToastAndroid.show('Error' ,ToastAndroid.SHORT)
//         }
//     }) 



// // setInterval(()=>{

// // },0.01)


// }


// componentDidUpdate(){
//    if(song!=null){
//     song.getCurrentTime(s=>{
//         this.setState({...this.state,duration:song.getDuration(),currentTime:s,ratio:s/song.getDuration() *100})
//     })
//    } 
// }


// onPressButtonPlay(){
//     this.setState({...this.state,pause:!this.state.pause})

//     if(song!=null){
//         song.play((success)=>{
//             if(!success){
//                 ToastAndroid.show('Error',ToastAndroid.SHORT)
//             }
//             })  
//     }
// }


// onPressButtonPause(){
//     if(song!=null){


//         song.pause()
//     }

//     song.getCurrentTime(s=>{
//         this.setState({...this.state,pause:!this.state.pause,duration:song.getDuration(),currentTime:s,ratio:s/song.getDuration() *100})
//     })
    
// }




      
// render(){

//     const {navigation}=this.props





//     return (
//         <ScrollView>

        
//         <View style={{borderLeftColor:'white',borderWidth:0.5,height:height}}>
  
//         <View style={{backgroundColor:'black',zIndex:-1,position:'absolute',height:height,width: width,right:0,left:0}}>
      
//         </View>
      

//       <Navbar navigation={navigation}/>
      
//         <Image source= {require('../kits/video.jpg')} style={{zIndex:-1,position:'absolute',opacity:0.23,height:height*1,width: width*1.3,right:0,left:0}} />
      
      
      
    
      
      

//       <View style={{alignItems:'center', marginTop:30,justifyContent:'center'}}>

//       <TouchableOpacity
// onPress={()=>this.setState({...this.state,pause:false,season:'',episode:'',ratio:1,duration:1,currentTime:1})}
// >
// <Text style={{color:'white',marginTop:60,fontSize:20,fontWeight:'bold'}}>
//     Podcasts
// </Text>
// </TouchableOpacity>

// {
//     !this.state.season&&!this.state.episode?(
//         <View>
// <TouchableOpacity
// onPress={()=>this.setState({...this.state,season:'1'})}
// >
// <Text style={{color:'white',marginTop:110,fontSize:20,fontWeight:'bold'}}>
// Season 1
// </Text>
// </TouchableOpacity>


// <TouchableOpacity
// onPress={()=>this.setState({...this.state,season:'2'})}
// >
// <Text style={{color:'white',marginTop:30,fontSize:20,fontWeight:'bold'}}>
// Season 2
// </Text>
// </TouchableOpacity>
// </View>

//     ):
//     this.state.season==='1'&&!this.state.episode?(


//         <View>
//         <TouchableOpacity
//         onPress={()=>this.setState({...this.state,episode:'1'})}
//         >
//         <Text style={{color:'white',marginTop:90,fontSize:15,fontWeight:'bold'}}>
//         Episode 1
//         </Text>
//         </TouchableOpacity>
        
        
//         <TouchableOpacity
//         onPress={()=>this.setState({...this.state,episode:'2'})}
//         >
//         <Text style={{color:'white',marginTop:30,fontSize:15,fontWeight:'bold'}}>
//         Episode 2
//         </Text>
//         </TouchableOpacity>

//         <View>
// <TouchableOpacity
// onPress={()=>this.setState({...this.state,episode:'3'})}
// >
// <Text style={{color:'white',marginTop:30,fontSize:15,fontWeight:'bold'}}>
// Episode 3
// </Text>
// </TouchableOpacity>


// <TouchableOpacity
// onPress={()=>this.setState({...this.state,episode:'4'})}
// >
// <Text style={{color:'white',marginTop:30,fontSize:15,fontWeight:'bold'}}>
// Episode 4
// </Text>
// </TouchableOpacity>
// </View>


//         </View>


//     ):
    
//     this.state.season==='2'&&!this.state.episode?
//     (


//         <View>
//         <TouchableOpacity
//         onPress={()=>this.setState({...this.state,episode:'5'})}
//         >
//         <Text style={{color:'white',marginTop:90,fontSize:15,fontWeight:'bold'}}>
//         Episode 5
//         </Text>
//         </TouchableOpacity>
        
        
//         <TouchableOpacity
//         onPress={()=>this.setState({...this.state,episode:'6'})}
//         >
//         <Text style={{color:'white',marginTop:30,fontSize:15,fontWeight:'bold'}}>
//         Episode 6
//         </Text>
//         </TouchableOpacity>

// <TouchableOpacity
// onPress={()=>this.setState({...this.state,episode:'7'})}
// >
// <Text style={{color:'white',marginTop:30,fontSize:15,fontWeight:'bold'}}>
// Episode 7
// </Text>
// </TouchableOpacity>


// <TouchableOpacity
// onPress={()=>this.setState({...this.state,episode:'8'})}
// >
// <Text style={{color:'white',marginTop:30,fontSize:15,fontWeight:'bold'}}>
// Episode 8
// </Text>
// </TouchableOpacity>

// </View>



//     ):(
// <View style={{alignItems:'center',justifyCenter:'center'}}>

// <Image
// source={require('../kits/video1.jpg')}
// style={{height:height*0.3,marginTop:40,marginBottom:20,width:width*0.8,borderColor:'white',borderWidth:3}}
// />


// <Slider
//          value={this.state.ratio}
//          onValueChange={(value)=>this.setState(()=>({value}))}
//          step={1}
//          minimumValue={0}
//          maximumValue={100}
//          width={200}
// minimumTrackTintColor={'white'}
// thumbTintColor={'white'}
// disabled={true}
// />



// {this.state.ratio!=1 ?(
// <Text style={{color:'white',fontWeight:'bold',marginTop:-22,marginLeft:width*0.6,fontSize:10}}>
//   {Math.round((this.state.currentTime/60)*100)/100} / {Math.round((this.state.duration/60)*100)/100}  
//         </Text>):(
//             <Text style={{color:'white',fontWeight:'bold',marginTop:-22,marginLeft:width*0.6,fontSize:10}}>
// 0.00/0.00
// </Text>
//         )
//         }
// <Text style={{color:'white',fontWeight:'bold',marginTop:30,fontSize:20}}>
// Episode {this.state.episode}
//         </Text>
// </View>

//     )

// }




// {
//     this.state.episode &&!this.state.pause?(
// <TouchableOpacity
// onPress={
//     this.onPressButtonPlay.bind(this)
//     }
// > 

// <FontAwesomeIcon color={'white'} 

// style={{marginTop:10}} icon={faPause}  size={17}  />

// </TouchableOpacity>
//     ):
//     this.state.season && this.state.episode? 
//     (
    
//         <TouchableOpacity
//         onPress={
//             this.onPressButtonPause.bind(this)
//             }
//         > 
        
//         <FontAwesomeIcon color={'white'} 
        
//         style={{marginTop:10}} icon={faPlay}  size={17}  />
        
//         </TouchableOpacity>       

//     ):(
//         <Text>

//         </Text>
//     )
// }


//         </View>
//         </View>  
//         </ScrollView>

//     )
// }}