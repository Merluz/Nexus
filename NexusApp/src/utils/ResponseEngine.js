// 📍 utils/ResponseEngine.js

import { detectEmotion } from '../modules/emotion'
import { detectIntention } from '../modules/intention'
import { buildResponse } from '../modules/response'

export function getNexusResponse(input, currentMode, currentStatus, memory = []) {
  const emotion = detectEmotion(input)
  const intention = detectIntention(input)
  const response = buildResponse(input, { emotion, intention, currentMode, currentStatus, memory })

  return {
    text: response,
    detectedStatus: emotion
  }
}
