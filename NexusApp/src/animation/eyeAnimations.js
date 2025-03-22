// 👁️ Animazione idle per occhi
import { Animated, Easing } from 'react-native'
import { emotionConfig } from './emotionConfig'
import { safeStopAnimation } from './animationUtils'

export const createIdleEyeAnimation = (status = 'calmo', eyeAnim, scaleY) => {
  let moveInterval = null
  let blinkInterval = null
  const speed = emotionConfig[status]?.eyeMoveSpeed || 4000

  const animateTo = (x, y, duration = 1200) =>
    Animated.timing(eyeAnim, {
      toValue: { x, y },
      duration,
      easing: Easing.inOut(Easing.ease),
      useNativeDriver: false,
    })

  const blink = () => {
    Animated.sequence([
      Animated.timing(scaleY, { toValue: 0.1, duration: 100, useNativeDriver: false }),
      Animated.timing(scaleY, { toValue: 1, duration: 150, useNativeDriver: false }),
    ]).start()
  }

  const start = () => {
    if (moveInterval || blinkInterval) return

    moveInterval = setInterval(() => {
      const randX = Math.floor(Math.random() * 13) - 6
      const randY = Math.floor(Math.random() * 9) - 4

      Animated.sequence([
        animateTo(randX, randY, speed / 2),
        animateTo(0, 0, speed),
      ]).start()
    }, speed + 200)

    blinkInterval = setInterval(() => {
      if (Math.random() < 0.25) blink()
    }, 3000)
  }

  const stop = () => {
    clearInterval(moveInterval)
    clearInterval(blinkInterval)
    moveInterval = null
    blinkInterval = null

    safeStopAnimation(eyeAnim?.x)
    safeStopAnimation(eyeAnim?.y)
    safeStopAnimation(scaleY)

    try {
      eyeAnim?.setValue({ x: 0, y: 0 })
      scaleY?.setValue(1)
    } catch (err) {
      console.warn(err.message)
    }
  }

  return { start, stop }
}
