import { View, Text, ImageBackground, TouchableOpacity } from 'react-native'
import React from 'react'
import Background from '../components/Background'
import Paragraph from '../components/Paragraph'
import LoginScreen from './LoginScreen'
import { theme } from '../core/theme'

import Button from '../components/Button'
import { ScrollView } from 'react-native'
import { StyleSheet } from 'react-native'
import AutoScroll from "@homielab/react-native-auto-scroll";
import { Image } from 'react-native'
import Header from '../components/Header'



export default function Homes ({navigation}) {
  
  return (
   
    

    
       <ScrollView>
        <>
        <View style = {[{height:300,width:'100%',backgroundColor:'#1976d2'}]}>
          <ImageBackground
           style = {[{height:300,width:'100%',}]}
           source = {require("../assets/header.png")}
          >
       
         </ImageBackground>

         
        </View>
         <>
         
         
       <Header
        style = {[{fontSize: 21,
          color: theme.colors.primary,
          fontWeight: 'bold',
          paddingVertical: 5,
          left:'33%'
         }]}
       >
      EXPLORE MORE 
       </Header>
        
          <AutoScroll>


              < View style={styles.container}>
               
              <View style={[{ width: 180,height: 170,margin:10,backgroundColor:'#ff0044',borderRadius:25,shadowColor: '#171717',
    shadowOffset: {width: -4, height: 6},
    shadowOpacity: 0.6,
    shadowRadius: 3, }]}>  
                     
                     <Image
            style={styles.image}
            source={require("../assets/feat.png")}
          />
                </View>

                <TouchableOpacity
                  activeOpacity={0.8}
                  onPress={() =>{
                    navigation.navigate('Homes');
                  }}
                >
                <View style={[{ width: 180,height: 170,backgroundColor:'#2962ff',borderRadius:25,justifyContent:'center',shadowColor: '#171717',
    shadowOffset: {width: -4, height: 6},
    shadowOpacity: 0.6,
    shadowRadius: 3,margin:10,}]}>  
                     <Image
            style={styles.image}
            delay={100}
            duration={4000}
            source={require("../assets/opinion.png")}
          />
                </View>
                </TouchableOpacity>

                <TouchableOpacity
                 activeOpacity={0.8}
                 onPress={() =>{
                  navigation.navigate('Profile');
                }}
                >
                <View style={[{ width: 180,height: 170,margin:10,backgroundColor:'#ff0044',borderRadius:25,shadowColor: '#171717',
    shadowOffset: {width: -4, height: 6},
    shadowOpacity: 0.6,
    shadowRadius: 3, }]}>  
                     
                     <Image
            style={styles.image}
            source={require("../assets/conn1.png")}
          />
                </View> 
                </TouchableOpacity>


                <TouchableOpacity
                activeOpacity={0.8}
                onPress={() =>{
                  navigation.navigate('Scr2');
                }}
                >
                <View style={[{ width: 180,height: 170,margin:10,backgroundColor:'#fff',borderRadius:25,shadowColor: '#171717',
    shadowOffset: {width: -4, height: 6},
    shadowOpacity: 0.6,
    shadowRadius: 3, }]}>  
                     
                     <Image
            style={styles.image}
            source={require("../assets/noti.png")}
          />
                </View> 
                </TouchableOpacity>

                <TouchableOpacity
                 activeOpacity={0.8}
                 onPress={() =>{
                  navigation.navigate('Settings');
                }}
                >
                <View style={[{ width: 180,height: 170,margin:10,backgroundColor:'#ff5535',borderRadius:25,shadowColor: '#171717',
    shadowOffset: {width: -4, height: 6},
    shadowOpacity: 0.6,
    shadowRadius: 3, }]}>  

<Image
            style={styles.image}
            source={require("../assets/complaints.png")}
          />

                </View> 
                </TouchableOpacity>


                  <TouchableOpacity
                   activeOpacity={0.8}
                   onPress={() =>{
                     navigation.navigate('Profile');
                   }}
                  >
                <View style={[{ width: 180,height: 170,margin:10,backgroundColor:'#ff6744',borderRadius:25,shadowColor: '#171717',
    shadowOffset: {width: -4, height: 6},
    shadowOpacity: 0.6,
    shadowRadius: 3, }]}>  
                     
                     <Image
            style={styles.image}
            source={require("../assets/brd.png")}
          />  

                </View> 
                    </TouchableOpacity>
                
                </View> 
                </AutoScroll>
        
        
       </>
       

         <Header
           style = {[{
            fontSize: 21,
            color: theme.colors.primary,
            fontWeight: 'bold',
            paddingVertical: 12,
            left:'33%'
           }]}
         >
          NOTICE BOARD
         </Header>

         

         </>
       </ScrollView>
      
   
 
  )
}
const styles = StyleSheet.create({ 
  container:{  
    flex: 1,  
    justifyContent:'space-around',
    flexDirection:'row',
    padding:20
},  
image: {
  width: 180,
  height: 170,
  borderRadius:25,
  shadowOffset: {width: -4, height: 6},
    shadowOpacity: 0.6,
    shadowRadius: 3
},
})
//export default Homes