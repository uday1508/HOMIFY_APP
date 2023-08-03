import React from 'react'
import { Provider } from 'react-native-paper'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import { theme } from './src/core/theme'
import {auth} from './src/firebase'
//import { CheckBox } from '@react-native-community/Checkbox'

import {
  StartScreen,
  LoginScreen,
  RegisterScreen,
  ResetPasswordScreen,
  Dashboard,
  Homes,
  Profile,
  Scr2,
  Scr1,
  Settings
} from './src/screens'
import { useState } from 'react'
import { useEffect } from 'react'
import { onAuthStateChanged } from 'firebase/auth'

const Stack = createStackNavigator()

export default function App() {

  const [curruser,setCurruser] = useState(null);
 
  useEffect(()=>{

    const usb = onAuthStateChanged(auth,(user)=>{
      if(user){
        setCurruser(user);
      }
    });

    return () => usb();

  },[])

  return (
    <Provider theme={theme}>
      <NavigationContainer>
        {!curruser ? (
              <Stack.Navigator
              initialRouteName="StartScreen"
              screenOptions={{
                headerShown: false,
              }}
            >
          <Stack.Screen name="StartScreen" component={StartScreen} />
          <Stack.Screen name="LoginScreen" component={LoginScreen} />
          <Stack.Screen name="RegisterScreen" component={RegisterScreen} />
          <Stack.Screen name="ResetPasswordScreen" component={ResetPasswordScreen}/>
          
          <Stack.Screen name="Dashboard" component={Dashboard} />
              </Stack.Navigator>
        ) : (

          <Stack.Navigator
          initialRouteName="Dashboard"
          screenOptions={{
            headerShown: false,
          }}
          >
          <Stack.Screen name="Dashboard" component={Dashboard} />
          <Stack.Screen name="Homes" component={Homes}/>
          <Stack.Screen name="Profile" component={Profile}/>
          <Stack.Screen name="Scr2" component={Scr2}/>
          <Stack.Screen name="Scr1" component={Scr1}/>
          <Stack.Screen name="Settings" component={Settings}/>
          <Stack.Screen name="LoginScreen" component={LoginScreen} />
         

          </Stack.Navigator>

        )}
        
         
         
          
       
      </NavigationContainer>
    </Provider>
  )
}
