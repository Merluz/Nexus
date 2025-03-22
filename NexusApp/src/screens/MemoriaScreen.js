import React from 'react'
import { View } from 'react-native'
import styles from '../styles/App.styles'
import MemoryLog from '../components/memoryLog/MemoryLog'
import StatusPanel from '../components/statusPanel/StatusPanel'

export default function MemoriaScreen() {
  return (
    <View style={styles.container}>
        <StatusPanel />
        <MemoryLog />
    </View>
  )
}
