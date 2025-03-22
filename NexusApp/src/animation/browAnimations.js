import { Animated, Easing } from 'react-native'
import { emotionConfig } from './emotionConfig'

export const createIdleBrowAnimation = (leftRef, rightRef, status = 'calmo') => {
  let timer = null

  const start = () => {
    if (timer) return

    timer = setInterval(() => {
      const emotion = emotionConfig[status] || emotionConfig['calmo']
      const target = emotion.browRotationDeg || 5
      const random = Math.random()

      if (random < 0.4) {
        Animated.parallel([
          Animated.timing(leftRef, {
            toValue: target,
            duration: 300,
            easing: Easing.out(Easing.ease),
            useNativeDriver: false,
          }),
          Animated.timing(rightRef, {
            toValue: -target,
            duration: 300,
            easing: Easing.out(Easing.ease),
            useNativeDriver: false,
          }),
        ]).start(() => {
          // Ritorna alla posizione iniziale dopo 2.5s
          setTimeout(() => {
            Animated.parallel([
              Animated.timing(leftRef, {
                toValue: emotion.browRotationDeg || 0,
                duration: 400,
                useNativeDriver: false,
              }),
              Animated.timing(rightRef, {
                toValue: -(emotion.browRotationDeg || 0),
                duration: 400,
                useNativeDriver: false,
              }),
            ]).start()
          }, 2500)
        })
      }

    }, 6000)
  }

  const stop = () => {
    if (timer) clearInterval(timer)
    timer = null
    leftRef?.setValue(emotionConfig[status]?.browRotationDeg || 0)
    rightRef?.setValue(-(emotionConfig[status]?.browRotationDeg || 0))
  }

  return { start, stop }
}
