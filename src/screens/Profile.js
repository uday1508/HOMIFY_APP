import { View, Text, ScrollView } from 'react-native'
import React, { useEffect } from 'react';
import { Image } from 'react-native'
import Background from '../components/Background'
import { useState } from 'react'
import Button from '../components/Button';
import {auth} from '../firebase';
import { signOut } from 'firebase/auth';
import { USERS } from './Dashboard';
import { MaterialCommunityIcons } from '@expo/vector-icons'
import Form from './Form'
import { TouchableOpacity } from 'react-native';
//import { black } from 'react-native-paper/lib/typescript/src/styles/themes/v2/colors';


const Profile = ({navigation}) => {


  const [tog,setTog] = useState(false);


  const out = async () => {
    await signOut(auth);
  }

 


  return (

    <ScrollView>

      {/* PROFILE  */}

      <View
       style = {[{
        height:300,
        width:'99%',
        backgroundColor:'#560CCE',
        marginLeft:'0.5%',
        borderRadius:30,
        marginTop:'0.3%',
        marginBottom:'1%',
        alignItems:'center',
        justifyContent:'center',
        
       }]}
      >
        {/* ICON */}
        <View
        
        style = {[{
          height:100,
          width:100,
          backgroundColor:'#fff',
          borderRadius:50,
          justifyContent:'center',
          alignItems:'center'
        }]}
        >

            <MaterialCommunityIcons name="account" color='#560CCE' size={64} />

        </View>
        {/* ICON */}

      
              {/* TEXT */}

              <Text
                style = {[{
                  fontSize:18,
                  fontWeight:'bold',
                  marginTop:'3%',
                  color:'white'
                }]}
              >
                WELCOME USER
              </Text>

              {/* TEXT */}


      </View>

      {/* PROFILE */}


     {!tog ? (
          <View
          style = {[{
            borderRadius:'50%',
            width:'90%',
            marginLeft:'5%',
            backgroundColor:'#fffcc9',
            borderRadius:100,
            height:50,
            alignItems:'center',
            marginBottom:'0.5%'
          }]}
        >
          <TouchableOpacity
            onPress={() => {
             setTog(!tog)
            }}
          >
       
             <Text
              style = {[{
                fontSize:18,
                fontWeight:'bold',
                marginTop:'3%',
                color:'#000'
              }]}
             >SEE DETAILS</Text>
        
            </TouchableOpacity>
        </View>
     ) : ( 
             <View>
              <View
          style = {[{
            
            width:'90%',
            marginLeft:'5%',
            backgroundColor:'yellow',
            borderRadius:100,
            height:50,
            alignItems:'center',
            marginBottom:'0.5%'
          }]}
        >
          <TouchableOpacity
            onPress={() => {
             setTog(!tog)
            }}
          >
       
             <Text
              style = {[{
                fontSize:18,
                fontWeight:'bold',
                marginTop:'3%',
                color:'#000'
              }]}
             >CLOSE DETAILS</Text>
        
            </TouchableOpacity>
        </View>
             <Form/>
             </View>
      ) }


      {/* logout */}
    <View
      style = {[{
        borderRadius:'50%',
        width:'90%',
        marginLeft:'5%',
        backgroundColor:'black',
        borderRadius:100,
        height:50,
        alignItems:'center',
      }]}
    >
      <TouchableOpacity
        onPress={() => {
          out();
          navigation.replace('LoginScreen')
         
        }}
      >
   
         <Text
          style = {[{
            fontSize:18,
            fontWeight:'bold',
            marginTop:'3%',
            color:'white'
          }]}
         >LOGOUT</Text>
    
        </TouchableOpacity>
    </View>
    {/* LOGIUT */}



    </ScrollView>
  
  )
}

export default Profile