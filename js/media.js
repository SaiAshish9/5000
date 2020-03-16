import React from 'react'

import {Linking,ScrollView,Image,TouchableOpacity,Animated,Text,View,Dimensions} from 'react-native'

import {Navbar} from './navbar'

const {width, height} = Dimensions.get("window")


const urls=[
    'https://www.thehindu.com/books/of-spirits-and-grisly-tales-k-hari-kumars-indias-most-haunted-haunted-real-life-encounters-with-ghosts-and-spirits-by-jay-alani-with-neil-dsilva/article30048943.ece',
    'https://www.republicworld.com/lifestyle/books/haunted-book-about-real-life-ghost-stories-that-will-creep-you-out.html',
    'https://www.newindianexpress.com/lifestyle/books/2019/nov/04/new-book-on-10-paranormal-stories-by-authors-jay-alani-neil-dsilva-2056817.html',
    'https://musically.com/2019/12/03/gaana-invests-heavily-in-original-podcasting-series-in-india/',
    'https://www.businessinsider.in/business/news/gaana-plans-3000-podcasts-in-4-months-expects-10-cr-streaming-per-month/articleshow/72336013.cms',
    'https://www.equitybulls.com/admin/news2006/news_det.asp?id=256925',
    'https://penguin.co.in/book/uncategorized/haunted/',
    'https://www.thetilakchronicle.com/post/350603e0-e10a-11e9-a003-abf72917a17b',
    'http://www.newindianexpress.com/cities/delhi/2019/aug/24/to-believe-or-not-to-believe-2023652.html',
    'https://www.aawaz.com/read/travel/paranormal-activity/',
    'https://www.hotfridaytalks.com/work/heres-how-paranormal-investigator-jay-alani-clarifies-the-air-about-our-perception-of-the-unknown/',
    'http://www.millenniumpost.in/features/web-shows-that-will-give-you-goosebumps-347096',
    'https://www.telegraphindia.com/states/bihar/haunted-fear-not-ghostbuster-in-town/cid/1441947',
    'https://www.eventshigh.com/detail/delhi/e47d578a63e1160726bed076dfd135bc-haunted-talks-by-paranormal-investigator',
    'http://outstandingspeakersbureau.in/Speakers/jay-alani/',
    'https://www.mid-day.com/articles/participate-in-story-slam-and-revisit-your-most-nightmarish-ghost-adventures/19566170',
    'https://itsmillertime.in/event/haunted-talks-by-jay-alani',
    'https://lbb.in/mumbai/paranormal-activity-meet/',
    'https://www.dfordelhi.in/ghost-stories-talk-in-delhi/',
    'http://htsyndication.com/htsportal/ht-patna/article/talk-show-to-unravel-ghost-mystery/27323534',
    'https://www.timesnownews.com/entertainment/news/bollywood-news/article/siddharth-house-next-door-paranormal-investigation-vasai-fort-horror-film-watch/160731',
    'https://m.dailyhunt.in/news/bangladesh/english/lbb-epaper-lbb/kommune+story+slam+7+shiver+slam-newsid-90604331',
    'https://gigi-bistro-en-vogue.business.site/posts/6202220009640017952?hl=en'   
]


const m=[
require('../kits/m/m1.jpg'),
require('../kits/m/m2.jpg'),
require('../kits/m/m3.jpg'),
require('../kits/m/m4.jpg'),
require('../kits/m/m5.jpg'),
require('../kits/m/m6.jpg'),
require('../kits/m/m7.jpg'),
require('../kits/m/m8.jpg'),
require('../kits/m/m9.jpg'),
require('../kits/m/m10.jpg'),
require('../kits/m/m11.jpg'),
require('../kits/m/m12.jpg'),
require('../kits/m/m13.jpg'),
require('../kits/m/m14.jpg'),
require('../kits/m/m15.jpg'),
require('../kits/m/m16.jpg'),
require('../kits/m/m17.jpg'),
require('../kits/m/m18.jpg'),
require('../kits/m/m19.jpg'),
require('../kits/m/m20.jpg'),
require('../kits/m/m21.jpg'),
require('../kits/m/m22.jpg'),
require('../kits/m/m23.jpg')
        ]

export class Media extends React.Component{

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

        <Image resizeMode={"contain"}  source= {require('../kits/media.jpg')} style={{opacity:0.28,zIndex:-1,position:'absolute',height:height,width: width,top:height*0.1,right:0,left:0}} />

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
Media Links
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

{
urls.map((x,i)=>{


return (<TouchableOpacity
onPress={()=>Linking.openURL(x)}
>

<Image
source={m[i]}
resizeMode="contain"
style={{height:height*0.16,marginBottom:20,width:width*0.8,borderColor:'white',borderWidth:3}}
/>

</TouchableOpacity>

)})
}









</Animated.View>



        </View>
        </ScrollView>


    
    </View>


)

}

}