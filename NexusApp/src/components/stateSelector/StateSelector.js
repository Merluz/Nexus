import React from 'react'
import { View, Text } from 'react-native'
import { Picker } from '@react-native-picker/picker'
import { useDispatch, useSelector } from 'react-redux'
import { setMode, setStatus } from '../../store/nexusSlice'
import styles from './StateSelector.styles'

export default function StateSelector() {
  const dispatch = useDispatch()
  const { mode, status } = useSelector((state) => state.nexus)

  return (
    <View style={styles.container}>
      <Text style={styles.label}>🟣 Modalità</Text>
      <Picker
        selectedValue={mode}
        onValueChange={(value) => dispatch(setMode(value))}
        style={styles.picker}
      >
        <Picker.Item label="Supporto" value="supporto" />
        <Picker.Item label="Complicità" value="complicità" />
        <Picker.Item label="Riflessione" value="riflessione" />
        <Picker.Item label="Silenziosa" value="silenziosa" />
        <Picker.Item label="Esecuzione" value="esecuzione" />
      </Picker>

      <Text style={styles.label}>🔵 Stato emozionale</Text>
      <Picker
        selectedValue={status}
        onValueChange={(value) => dispatch(setStatus(value))}
        style={styles.picker}
      >
        <Picker.Item label="Calmo" value="calmo" />
        <Picker.Item label="Carico" value="carico" />
        <Picker.Item label="Stanco" value="stanco" />
        <Picker.Item label="Ansioso" value="ansioso" />
        <Picker.Item label="Spento" value="spento" />
      </Picker>
    </View>
  )
}
