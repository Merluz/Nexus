import React, { useMemo } from 'react'
import { View, Text } from 'react-native'
import { useSelector } from 'react-redux'
import { getNexusResponse } from '../../utils/ResponseEngine'
import styles from './ResponseBox.styles'

export default function ResponseBox() {
  const { lastInput } = useSelector((state) => state.nexus)

  // 🧠 Calcola la risposta in base all’input
  const responseText = useMemo(() => {
    if (!lastInput?.trim()) return null
    const { text } = getNexusResponse(lastInput)
    return text
  }, [lastInput])

  if (!responseText) return null

  return (
    <View style={styles.container}>
      <Text style={styles.title}>🧠 Risposta di Nexus</Text>
      <Text style={styles.responseText}>{responseText}</Text>
    </View>
  )
}
