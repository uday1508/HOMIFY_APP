import React from 'react'
import Background from '../components/Background'
import Backs from '../components/Backs'
import Header from '../components/Header'
import Paragraph from '../components/Paragraph'
import Button from '../components/Button'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import Scr1 from './Scr1'
import Scr2 from './Scr2'
import Homes from './Homes'
import { Provider } from 'react-native-paper'
import { theme } from '../core/theme'
import {  Settings, StyleSheet } from 'react-native';
import { View } from 'react-native'
import Setting from './Settings'
//import Icon from '@mui/material/IconButton'
import { Ionicons, MaterialCommunityIcons } from '@expo/vector-icons'
import Profile from './Profile'
import { useState } from 'react'
import { useEffect } from 'react'
import { auth } from '../firebase'
import { onAuthStateChanged } from 'firebase/auth'
export default function Dashboard(navigation) {
  const BottomTab = createBottomTabNavigator();

 

  

  return (
    
    <View style={{ 
      flex:1,
      flexDirection: 'column' ,
      width:'100%',
      justifyContent: 'center',
      }}>
       
          <BottomTab.Navigator
            screenOptions={{
              headerShown: false,
              tabBarActiveTintColor:'white',
              tabBarInactiveTintColor:'black',
              tabBarActiveBackgroundColor:'#560CCE',
               tabBarShowLabel:false,
               tabBarStyle:{
                position:'absolute',
                backgroundColor:'#560CCE',
                borderRadius:50,
                bottom:20,
                marginHorizontal:5,
                overflow:'hidden',
               }
            }}
         >
           
  <BottomTab.Screen
        name="Home"
        component={Homes}
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="home" color={color} size={26} />
          ),
        }}
      />
      <BottomTab.Screen
        name="Poll"
        component={Scr2}
        options={{
          tabBarLabel: 'podium',
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="podium" color={color} size={26} />
          ),
        }}
        
      />
      <BottomTab.Screen
        name="Setting"
        component={Setting}
        options={{
          tabBarLabel: 'Profile',
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="tools" color={color} size={26} />
          ),
        }}
      />

<BottomTab.Screen
        name="About-us"
        component={Scr1}
        options={{
          tabBarLabel: 'about-us',
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="information" color={color} size={26} />
          ),
        }}
      />

<BottomTab.Screen
        name="Nothing"
        component={Profile}
        options={{
          tabBarLabel: 'Profiles',
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="account" color={color} size={26} />
          ),
        }}
      />
         </BottomTab.Navigator> 
      
        
       
         </View>
         
  )
}

const styles = StyleSheet.create({
  background: {
    flex:1,
    backgroundColor: theme.colors.surface,
    width:'100%',
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
  },
  
})

export  function USERS(){
  
const [user,setUser] = useState(null);

useEffect(()=>{
   const usb = onAuthStateChanged(auth,(user)=>{
     if(user){
       setUser(user);
     }
   });
   usb();
   return user;
 },{auth})

}