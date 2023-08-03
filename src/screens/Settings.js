import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import Background from '../components/Background'
import Paragraph from '../components/Paragraph'
import { ScrollView } from 'react-native'
import Header from '../components/Header'
import { theme } from '../core/theme'
import Button from '../components/Button'
import {  MaterialCommunityIcons } from '@expo/vector-icons'


const Scr1 = ({navigation}) => {
  return (
   
      
       <ScrollView>
             <View
               style = {[{
                padding:25,
                margin:3,
               }]}
             >
               <Header
                style = {[{fontSize: 28,
                  color: theme.colors.primary,
                  fontWeight: 'bold',
                  paddingVertical: 12,
                 }]}
               >
                   ENGAGE
               </Header>
             </View>

           <View>
              <View
               style = {[{
                flex:1,
                flexDirection:'row',
               }]}
              >
                  <TouchableOpacity
                    
                  >
                  <View 
                   style = {[{
                    height:100,
                    width: 200,
                    backgroundColor:'#ff9800',
                    padding:1,
                    margin:5,
                    borderRadius:30,
                    shadowOffset: {width: -4, height: 6},
                    shadowOpacity: 0.6,
                    shadowRadius: 3,
                    padding:10,
                   }]}
                  >

                  <MaterialCommunityIcons name="account-group" color='#000000' size={36} />
                   <Text>
                    COMMUNITY
                   </Text>
                    
                  </View>
                  </TouchableOpacity>

                  <View
                   style = {[{
                    height:100,
                    width: 200,
                    backgroundColor:'#ff9800',
                    borderRadius:30,
                    shadowOffset: {width: -4, height: 6},
                    shadowOpacity: 0.8,
                    shadowRadius: 3,
                    padding:10,
                   }]}
                  >
                   <MaterialCommunityIcons name="phone-dial-outline" color='#000000' size={36} />
                   <Text>
                    EMERGENCY-DIAL
                   </Text>
                  </View>
                 
               </View>

            </View>

            
            <View
            
             style = {[{
              flex:1,
              flexDirection:'row',
             }]}
            
            >
              <View
              style = {[{
                height:100,
                width: 200,
                backgroundColor:'#ff9800',
                borderRadius:30,
                shadowOffset: {width: -4, height: 6},
                shadowOpacity: 0.8,
                shadowRadius: 3,
                padding:10,
                margin:5
               }]}
              >
                 <MaterialCommunityIcons name="contacts" color='#000000' size={36} />
                   <Text>
                    LOCAL DIRECTORY
                   </Text>
              </View>

              <View
              style = {[{
                height:100,
                width: 200,
                backgroundColor:'#ff9800',
                borderRadius:30,
                shadowOffset: {width: -4, height: 6},
                shadowOpacity: 0.8,
                shadowRadius: 3,
                padding:10,
                margin:5
               }]}
              >
              <MaterialCommunityIcons name="bulletin-board" color='#000000' size={36} />
                   <Text>
                    NOTICE-BOARD
                   </Text>
              </View>

            </View>



            <View>
             
            </View>



            <View>
             
            </View>


         


            <View
               style = {[{
                padding:25,
                margin:3,
               }]}
             >
               <Header
                style = {[{fontSize: 28,
                  color: theme.colors.primary,
                  fontWeight: 'bold',
                  paddingVertical: 12,
                 }]}
               >
                   DISCOVER
               </Header>
             </View>

           <View>
              <View
               style = {[{
                flex:1,
                flexDirection:'row',
               }]}
              >
                  <View 
                   style = {[{
                    height:100,
                    width: 200,
                    backgroundColor:'#ff9800',
                    padding:1,
                    margin:5,
                    borderRadius:30,
                    shadowOffset: {width: -4, height: 6},
                    shadowOpacity: 0.6,
                    shadowRadius: 3,
                    padding:10,
                   }]}
                  >

                  <MaterialCommunityIcons name="account-group" color='#000000' size={36} />
                   <Text>
                    HELP-DESK
                   </Text>
                    
                  </View>

                  <View
                   style = {[{
                    height:100,
                    width: 200,
                    backgroundColor:'#ff9800',
                    borderRadius:30,
                    shadowOffset: {width: -4, height: 6},
                    shadowOpacity: 0.8,
                    shadowRadius: 3,
                    padding:10,
                   }]}
                  >
                   <MaterialCommunityIcons name="phone-dial-outline" color='#000000' size={36} />
                   <Text>
                    AMENITIES
                   </Text>
                  </View>
                 
               </View>

            </View>

            
            <View
            
             style = {[{
              flex:1,
              flexDirection:'row',
             }]}
            
            >
              <View
              style = {[{
                height:100,
                width: 200,
                backgroundColor:'#ff9800',
                borderRadius:30,
                shadowOffset: {width: -4, height: 6},
                shadowOpacity: 0.8,
                shadowRadius: 3,
                padding:10,
                margin:5
               }]}
              >
                 <MaterialCommunityIcons name="contacts" color='#000000' size={36} />
                   <Text>
                    COMMUNICATION
                   </Text>
              </View>

              <View
              style = {[{
                height:100,
                width: 200,
                backgroundColor:'#ff9800',
                borderRadius:30,
                shadowOffset: {width: -4, height: 6},
                shadowOpacity: 0.8,
                shadowRadius: 3,
                padding:10,
                margin:5
               }]}
              >
              <MaterialCommunityIcons name="contacts" color='#000000' size={36} />
                   <Text>
                    DAILY HELP
                   </Text>
              </View>

            </View>



            <View>
             
            </View>



            <View>
             
            </View>




           </ScrollView>
      
   
  )
}

export default Scr1