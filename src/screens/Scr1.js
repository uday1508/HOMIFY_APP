import { View, Text } from 'react-native'
import React from 'react'
import Background from '../components/Background'
import Paragraph from '../components/Paragraph'
import { ScrollView } from 'react-native'
import Header from '../components/Header'
import { theme } from '../core/theme'
import Button from '../components/Button'
import {  MaterialCommunityIcons } from '@expo/vector-icons'


const Scr1 = () => {
  return (
   
      
   <View>
  
   <Header
    style = {[{
      fontSize: 22,
      color: '#d50000',
      fontWeight: 'bold',
      paddingVertical: 12,
      margin:45,
      padding:30,
    }]}
   >
    RULES AND REGULATIONS
   </Header>
<View
 style = {[{
  height:280,
  width:425,
  backgroundColor:'#fff',
  borderRadius:30,
  opacity:2.0,
 }]}
>
  <View
  style = {[{
    margin:10,
   }]}
  >
   <MaterialCommunityIcons name="circle" color='#000000' size={12} >
     <Text
       style = {[{
        margin:10,
        padding:10,
       }]}
     >Members and residents are required to keep their flats/homes and nearby premises clean and habitable. </Text>
   </MaterialCommunityIcons>

   <MaterialCommunityIcons name="circle" color='#000000' size={12} >
     <Text
       style = {[{
        margin:10,
        padding:10,
       }]}
     >The residents should also maintain proper cleanliness etiquette while using common areas, parking lot, etc.
     and not throw litter from their balconies and windows.</Text>
   </MaterialCommunityIcons>

   <MaterialCommunityIcons name="circle" color='#000000' size={12} >
     <Text
       style = {[{
        margin:10,
        padding:10,
       }]}
     >Members must regularly pay the maintenance charges and all other dues necessitated by the society.</Text>
   </MaterialCommunityIcons>

   <MaterialCommunityIcons name="circle" color='#000000' size={12} >
     <Text
       style = {[{
        margin:10,
        padding:10,
       }]}
     >Keeping pets is allowed after submitting the required NOC to the society.</Text>
   </MaterialCommunityIcons>


   <MaterialCommunityIcons name="circle" color='#000000' size={12} >
     <Text
       style = {[{
        margin:10,
        padding:10,
       }]}
     >Every member of the society should park their vehicles in their respective allotted parking spaces only.</Text>
   </MaterialCommunityIcons>

   <MaterialCommunityIcons name="circle" color='#000000' size={12} >
     <Text
       style = {[{
        margin:10,
        padding:10,
       }]}
     >After using the community hall for any event or function it should be cleaned and no damages should be
     caused</Text>
   </MaterialCommunityIcons>

   <MaterialCommunityIcons name="circle" color='#000000' size={12} >
     <Text
       style = {[{
        margin:10,
        padding:10,
       }]}
     >Salesmen, vendors or any other sellers are not allowed to enter the premises</Text>
   </MaterialCommunityIcons>


   <MaterialCommunityIcons name="circle" color='#000000' size={12} >
     <Text
       style = {[{
        margin:10,
        padding:10,
       }]}
     >Smoking in lobbies, passage is not allowed. If any irresponsible person is found smoking in the no smoking
     zone, he/she shall be charged with penalty</Text>
   </MaterialCommunityIcons>
   </View>
   </View>

   </View>
      
   
  )
}

export default Scr1