import React from 'react'
import { useSelector } from 'react-redux'
import { View, Text, ScrollView } from 'react-native'
import styles from './MemoryLog.styles'

export default function MemoryLog() {
  const memory = useSelector((state) => state.nexus.memory)

  return (
    <View style={styles.container}>
      <Text style={styles.title}>📜 Memoria Breve (Debug)</Text>
      {memory.length === 0 ? (
        <Text style={styles.empty}>Nessun ricordo memorizzato.</Text>
      ) : (
        <ScrollView style={{ maxHeight: 150 }}>
          {memory.map((item, index) => (
            <Text key={index} style={styles.item}>
              • {item}
            </Text>
          ))}
        </ScrollView>
      )}
    </View>
  )
}
