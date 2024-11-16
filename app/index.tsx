import { View, Text } from 'react-native'
import React from 'react'
import { Redirect } from 'expo-router'

const Index = () => {
  const isLoggedIn = false
  // This must checked if logged in to go in authentication
  // If is authenticated go to home of the app
  return !isLoggedIn ? <Redirect href="/authenciation"/> : <Redirect href='/application' />
}

export default Index