import React from 'react'
import { View } from 'react-native'
import { useSelector } from 'react-redux'
import styles from './NexusFace.styles'

export default function NexusFace() {
  const { mode, status } = useSelector((state) => state.nexus)

  // 🔁 Mappe per cambiare forma
  const expressions = {
    supporto: {
      eyeSize: 20,
      mouth: 'smile',
      browTilt: 0,
    },
    complicità: {
      eyeSize: 18,
      mouth: 'grin',
      browTilt: -10,
    },
    riflessione: {
      eyeSize: 14,
      mouth: 'flat',
      browTilt: 10,
    },
    silenziosa: {
      eyeSize: 10,
      mouth: 'none',
      browTilt: 0,
    },
    esecuzione: {
      eyeSize: 12,
      mouth: 'flat',
      browTilt: 0,
    },
  }

  const current = expressions[mode] || expressions['supporto']

  const eyeStyle = {
    width: current.eyeSize,
    height: current.eyeSize,
    borderRadius: current.eyeSize / 2,
    backgroundColor: '#0ff',
  }

  const mouthStyle = {
    ...styles.mouth,
    height: current.mouth === 'smile' ? 6
      : current.mouth === 'flat' ? 2
      : current.mouth === 'grin' ? 8
      : 0,
    backgroundColor: current.mouth === 'none' ? 'transparent' : '#0ff',
  }

  const eyebrowTransform = {
    transform: [{ rotateZ: `${current.browTilt}deg` }],
  }

  return (
    <View style={styles.container}>
      <View style={[styles.eyebrow, { left: 30 }, eyebrowTransform]} />
      <View style={[styles.eyebrow, { right: 30 }, eyebrowTransform]} />
      <View style={styles.eyesContainer}>
        <View style={eyeStyle} />
        <View style={eyeStyle} />
      </View>
      <View style={mouthStyle} />
    </View>
  )
}
