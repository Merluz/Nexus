import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import HomeScreen from '../screens/HomeScreen'
import MemoriaScreen from '../screens/MemoriaScreen'
import { Ionicons } from '@expo/vector-icons'

const Tab = createBottomTabNavigator()

export default function MainNavigator() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
            headerShown: false,
            tabBarHideOnKeyboard: false, 
            tabBarStyle: {
              position: 'absolute',
              bottom: 0,
              height: 60,
              backgroundColor: '#000',
              borderTopWidth: 0,
              zIndex: 99, 
              elevation: 0, 
            },
            tabBarActiveTintColor: '#0ff',
            tabBarInactiveTintColor: '#555',
            tabBarIcon: ({ color, size }) => {
              let iconName
              if (route.name === 'Home') iconName = 'home-outline'
              if (route.name === 'Memoria') iconName = 'book-outline'
              return <Ionicons name={iconName} size={size} color={color} />
            },
          })}          
      >
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="Memoria" component={MemoriaScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  )
}
