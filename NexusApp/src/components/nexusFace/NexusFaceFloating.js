import React, { useEffect, useRef } from 'react'
import { View, Animated } from 'react-native'
import { useSelector } from 'react-redux'
import styles from './NexusFaceFloating.styles'
import useIdle from '../../hooks/useIdle'

import { emotionConfig } from '../../animation/emotionConfig'
import { createIdleEyeAnimation } from '../../animation/eyeAnimations'
import { createIdleMouthAnimation } from '../../animation/mouthAnimations'
import { createIdleBrowAnimation } from '../../animation/browAnimations'





export default function NexusFaceFloating() {
  const { status } = useSelector((state) => state.nexus)
  const emotion = emotionConfig[status] || emotionConfig['calmo']
  const isIdle = useIdle(2000) // tempo di inattività in ms

  // idle e aniimation
  const eyeAnim = useRef(new Animated.ValueXY({ x: 0, y: 0 }))
  const scaleY = useRef(new Animated.Value(1))
  const mouthScaleX = useRef(new Animated.Value(1))
  const mouthTranslateY = useRef(new Animated.Value(0))
  const animator = useRef(null)
  const mouthAnimator = useRef(null) 
  const leftBrowRotation = useRef(new Animated.Value(0)).current
  const rightBrowRotation = useRef(new Animated.Value(0)).current
  const browAnimator = useRef(null)

  

  
  mouthAnimator.current = createIdleMouthAnimation(
    mouthScaleX.current,
    mouthTranslateY.current,
    status
  )
  


  useEffect(() => {
    const eye = createIdleEyeAnimation(status, eyeAnim.current, scaleY.current)
    const mouth = createIdleMouthAnimation(mouthScaleX.current, mouthTranslateY.current, status)
    const brows = createIdleBrowAnimation(leftBrowRotation, rightBrowRotation, status)
    
    animator.current = eye
    mouthAnimator.current = mouth
    browAnimator.current = brows
    
    if (isIdle) {
      animator.current.start()
      mouthAnimator.current.start()
      browAnimator.current.start()
    } else {
      animator.current.stop()
      mouthAnimator.current.stop()
      browAnimator.current.stop()
    }
    
  
    return () => {
      animator.current?.stop()
      mouthAnimator.current?.stop()
      browAnimator.current?.stop()
    }
    
  }, [isIdle, status])
  

  return (
    <View style={styles.faceContainer}>
      {/* 👁️ Sopracciglia */}
      {/* 😤 Sopracciglia animate */}
      <View style={styles.browRow}>
        <Animated.View
          style={[
            styles.brow,
            {
              transform: [{ rotateZ: leftBrowRotation.interpolate({
                inputRange: [-180, 180],
                outputRange: ['-180deg', '180deg']
              }) }],
              backgroundColor: emotion.color,
            },
          ]}
        />
        <Animated.View
          style={[
            styles.brow,
            {
              transform: [{ rotateZ: rightBrowRotation.interpolate({
                inputRange: [-180, 180],
                outputRange: ['-180deg', '180deg']
              }) }],
              backgroundColor: emotion.color,
            },
          ]}
        />
      </View>


      {/* 👀 Occhi */}
      <View style={styles.eyeRow}>
        <Animated.View
          style={[
            styles.eye,
            {
              width: emotion.eyeSize,
              height: emotion.eyeSize,
              borderRadius: emotion.eyeSize / 2,
              backgroundColor: emotion.color,
              transform: [
                { translateX: eyeAnim.current.x },
                { translateY: eyeAnim.current.y },
                { scaleY: scaleY.current },
              ],
            },
          ]}
        />
        <Animated.View
          style={[
            styles.eye,
            {
              width: emotion.eyeSize,
              height: emotion.eyeSize,
              borderRadius: emotion.eyeSize / 2,
              backgroundColor: emotion.color,
              transform: [
                { translateX: eyeAnim.current.x },
                { translateY: eyeAnim.current.y },
                { scaleY: scaleY.current },
              ],
            },
          ]}
        />
      </View>

      {/* 👄 Bocca */}
      {emotion.mouthWidth > 0 && (
        <Animated.View
          style={[
            styles.mouth,
            {
              width: emotion.mouthWidth,
              backgroundColor: emotion.color,
              transform: [
                { scaleX: mouthScaleX.current },
                { translateY: mouthTranslateY.current },
              ],
            },
          ]}
        />
      )}


    </View>
  )
}
