import { View, Text, ImageBackground, Image } from 'react-native'
import React from 'react'
import { Tabs } from 'expo-router'
import {images} from '@/constants/images'

const _layout = () => {
  return (
    <Tabs>
        <Tabs.Screen
        name='index'
        options={{
            headerShown: false,
            title: 'Home',
            
           
        }}
        />
          <Tabs.Screen
        name='saved'
        options={{
            headerShown: false,
            title: 'Saved'
        }}
        />
          <Tabs.Screen
        name='search'
        options={{
            headerShown: false,
            title: 'Search'
        }}
        />
          <Tabs.Screen
        name='profile'
        options={{
            headerShown: false,
            title: 'Profile'
        }}
        />
    </Tabs>
  )
}

export default _layout