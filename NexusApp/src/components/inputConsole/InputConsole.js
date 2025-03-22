import React, { useState } from 'react'
import { View, TextInput, Button } from 'react-native'
import { useDispatch } from 'react-redux'
import { setLastInput, setStatus, addToMemory } from '../../store/nexusSlice'
import { getNexusResponse } from '../../utils/ResponseEngine'
import styles from './InputConsole.styles'

export default function InputConsole() {
  const [text, setText] = useState('')
  const dispatch = useDispatch()

  const handleSend = () => {
    if (!text.trim()) return

    const { text: responseText, detectedStatus } = getNexusResponse(text)

    dispatch(setLastInput(text))
    dispatch(setStatus(detectedStatus))
    dispatch(addToMemory({ input: text, response: responseText, emotion: detectedStatus }))

    setText('')
  }

  return (
    <View style={styles.container}>
      <TextInput
        value={text}
        onChangeText={setText}
        placeholder="Parla con Nexus..."
        placeholderTextColor="#777"
        style={styles.input}
      />
      <Button title="Invia" onPress={handleSend} color="#0ff" />
    </View>
  )
}
