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
        <ScrollView style={{ maxHeight: 200 }}>
          {memory.map((item, index) => (
            <View key={index} style={styles.itemGroup}>
              <Text style={styles.item}>• 📝 {item.input}</Text>
              <Text style={styles.response}>↪️ {item.response}</Text>
              <Text style={styles.emotion}>😶 Emozione: {item.emotion}</Text>
            </View>
          ))}
        </ScrollView>
      )}
    </View>
  )
}
