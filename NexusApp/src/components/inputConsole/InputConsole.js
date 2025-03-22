import React, { useState } from 'react'
import { View, TextInput, Text, TouchableOpacity } from 'react-native'
import { useDispatch } from 'react-redux'
import { setLastInput, addToMemory } from '../../store/nexusSlice'
import styles from './InputConsole.styles'

export default function InputConsole() {
  const [text, setText] = useState('')
  const dispatch = useDispatch()

  const handleSubmit = () => {
    if (text.trim() === '') return
    dispatch(setLastInput(text))
    dispatch(addToMemory(text))
    setText('')
  }

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Scrivi qualcosa a Nexus..."
        placeholderTextColor="#888"
        value={text}
        onChangeText={setText}
        onSubmitEditing={handleSubmit}
        returnKeyType="send"
      />
      <TouchableOpacity style={styles.button} onPress={handleSubmit}>
        <Text style={styles.buttonText}>Invia</Text>
      </TouchableOpacity>
    </View>
  )
}
