import React from 'react'
import { useSelector } from 'react-redux'
import { View, Text } from 'react-native'
import styles from './StatusPanel.styles'

export default function StatusPanel() {
  const { mode, status, lastInput, memory } = useSelector((state) => state.nexus)

  return (
    <View style={styles.container}>
      <Text style={styles.title}>🧠 Stato Mentale di Nexus</Text>
      <Text style={styles.item}>🟣 Modalità attiva: {mode}</Text>
      <Text style={styles.item}>🔵 Stato emozionale: {status}</Text>
      <Text style={styles.item}>📝 Ultimo input: {lastInput || 'Nessuno'}</Text>
      <Text style={styles.item}>🧠 Memoria breve: {memory.length} elementi</Text>
    </View>
  )
}
