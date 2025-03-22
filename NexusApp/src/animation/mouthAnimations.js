// 👄 Animazione idle per bocca
import { Animated } from 'react-native'
import { safeStopAnimation } from './animationUtils'

export const createIdleMouthAnimation = (mouthScaleX, mouthTranslateY, status = 'calmo') => {
  let interval = null

  const start = () => {
    if (interval) return

    interval = setInterval(() => {
      const random = Math.random()

      // 😏 40% chance → sorriso
      if (random < 0.4 && status !== 'spento' && status !== 'ansioso') {
        Animated.parallel([
          Animated.timing(mouthScaleX, {
            toValue: 1.5,
            duration: 500,
            useNativeDriver: false,
          }),
          Animated.timing(mouthTranslateY, {
            toValue: -4,
            duration: 500,
            useNativeDriver: false,
          }),
        ]).start(() => {
          Animated.parallel([
            Animated.timing(mouthScaleX, {
              toValue: 1,
              duration: 500,
              useNativeDriver: false,
            }),
            Animated.timing(mouthTranslateY, {
              toValue: 0,
              duration: 500,
              useNativeDriver: false,
            }),
          ]).start()
        })
      }

      // 😐 30% → solo espansione
      else if (random < 0.7) {
        Animated.sequence([
          Animated.timing(mouthScaleX, {
            toValue: 1.2,
            duration: 400,
            useNativeDriver: false,
          }),
          Animated.timing(mouthScaleX, {
            toValue: 1,
            duration: 400,
            useNativeDriver: false,
          }),
        ]).start()
      }

    }, 5000)
  }

  const stop = () => {
    clearInterval(interval)
    interval = null

    safeStopAnimation(mouthScaleX)
    safeStopAnimation(mouthTranslateY)

    try {
      mouthScaleX?.setValue(1)
      mouthTranslateY?.setValue(0)
    } catch (err) {
      console.warn(err.message)
    }
  }

  return { start, stop }
}
