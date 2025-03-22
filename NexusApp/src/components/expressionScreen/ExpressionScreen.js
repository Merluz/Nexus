import React from 'react'
import { View, Text } from 'react-native'
import { useSelector } from 'react-redux'
import styles from './ExpressionScreen.styles'

const expressionMap = {
  supporto: '🫂',
  complicità: '😏',
  riflessione: '🤔',
  silenziosa: '😶',
  esecuzione: '🤖',
}

const statusColorMap = {
  calmo: '#00ffff',
  carico: '#00ff88',
  stanco: '#ffaa00',
  ansioso: '#ff4444',
  spento: '#777777',
}

export default function ExpressionScreen() {
  const { mode, status } = useSelector((state) => state.nexus)

  const expression = expressionMap[mode] || '👁️'
  const color = statusColorMap[status] || '#0ff'

  return (
    <View style={[styles.container, { borderColor: color, borderWidth: 2 }]}>
      <Text style={[styles.expression, { color }]}>{expression}</Text>
      <Text style={styles.label}>Modalità: {mode} | Stato: {status}</Text>
    </View>
  )
}
