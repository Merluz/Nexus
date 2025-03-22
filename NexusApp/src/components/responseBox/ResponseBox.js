import React, { useMemo } from 'react'
import { View, Text } from 'react-native'
import { useSelector } from 'react-redux'
import { getNexusResponse } from '../../utils/ResponseEngine'
import styles from './ResponseBox.styles'

export default function ResponseBox() {
  const { mode, status, lastInput } = useSelector((state) => state.nexus)

  // 🧠 Calcola la risposta in base all’input
  const response = useMemo(() => {
    if (!lastInput || lastInput.trim() === "") return null
    return getNexusResponse({ mode, input: lastInput, status })
  }, [lastInput, mode, status])

  if (!response) return null

  return (
    <View style={styles.container}>
      <Text style={styles.title}>🧠 Risposta di Nexus</Text>
      <Text style={styles.responseText}>{response}</Text>
    </View>
  )
}
