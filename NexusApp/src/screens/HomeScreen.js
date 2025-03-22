import React from 'react'
import { View, Text } from 'react-native'
import styles from '../styles/App.styles'
import InputConsole from '../components/inputConsole/InputConsole'
import ResponseBox from '../components/responseBox/ResponseBox'
import StateSelector from '../components/stateSelector/StateSelector'
import NexusFaceFloating from '../components/nexusFace/NexusFaceFloating'




export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <NexusFaceFloating />
      <StateSelector />
      <InputConsole />
      <ResponseBox />
    </View>
  )
}
