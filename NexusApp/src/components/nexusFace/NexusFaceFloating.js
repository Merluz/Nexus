import React from 'react'
import { View } from 'react-native'
import { useSelector } from 'react-redux'
import styles from './NexusFaceFloating.styles'

// 🤖 Mappa personalizzata di stato → stili
const emotionStyles = {
  calmo: {
    eyeSize: 20,
    browRotation: '0deg',
    mouthWidth: 40,
    color: '#0ff',
  },
  carico: {
    eyeSize: 24,
    browRotation: '-15deg',
    mouthWidth: 50,
    color: '#00ff88',
  },
  stanco: {
    eyeSize: 16,
    browRotation: '15deg',
    mouthWidth: 20,
    color: '#ffaa00',
  },
  ansioso: {
    eyeSize: 14,
    browRotation: '25deg',
    mouthWidth: 10,
    color: '#ff4444',
  },
  spento: {
    eyeSize: 12,
    browRotation: '0deg',
    mouthWidth: 0,
    color: '#666666',
  },
}

export default function NexusFaceFloating() {
  const { status } = useSelector((state) => state.nexus)
  const emotion = emotionStyles[status] || emotionStyles['calmo']

  return (
    <View style={styles.faceContainer}>
      {/* 👁️ Sopracciglia */}
      <View style={styles.browRow}>
        <View
          style={[
            styles.brow,
            {
              transform: [{ rotateZ: emotion.browRotation }],
              backgroundColor: emotion.color,
            },
          ]}
        />
        <View
          style={[
            styles.brow,
            {
              transform: [{ rotateZ: `-${emotion.browRotation}` }],
              backgroundColor: emotion.color,
            },
          ]}
        />
      </View>

      {/* 👀 Occhi */}
      <View style={styles.eyeRow}>
        <View
          style={[
            styles.eye,
            {
              width: emotion.eyeSize,
              height: emotion.eyeSize,
              borderRadius: emotion.eyeSize / 2,
              backgroundColor: emotion.color,
            },
          ]}
        />
        <View
          style={[
            styles.eye,
            {
              width: emotion.eyeSize,
              height: emotion.eyeSize,
              borderRadius: emotion.eyeSize / 2,
              backgroundColor: emotion.color,
            },
          ]}
        />
      </View>

      {/* 👄 Bocca */}
      {emotion.mouthWidth > 0 && (
        <View
          style={[
            styles.mouth,
            {
              width: emotion.mouthWidth,
              backgroundColor: emotion.color,
            },
          ]}
        />
      )}
    </View>
  )
}
