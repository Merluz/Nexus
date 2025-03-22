// 📍 src/engine/ResponseEngine.js

import { parseEmotionFromText } from './emotionParser'

/**
 * 🔁 Analizza il testo e restituisce:
 * - una risposta testuale (simulata ora)
 * - lo stato emotivo dedotto
 */
export function getNexusResponse(inputText) {
  const safeInput = typeof inputText === 'string' ? inputText : ''
  const detectedStatus = parseEmotionFromText(safeInput)

  const simulatedResponses = {
    felice: "Sono felice che tu stia bene! 😄",
    triste: "Mi dispiace sentirlo... ci sono per te. 💙",
    arrabbiato: "Respira. Vuoi parlarne? 😤",
    ansioso: "Calma, passo dopo passo... 🫶",
    curioso: "Mh interessante... raccontami di più! 👀",
    spento: "Ci sei ancora? Possiamo fare qualcosa insieme 🔋",
    neutrale: "Capito. Continua pure. 🧠"
  }

  const response = simulatedResponses[detectedStatus] || "Interessante... continua pure! 🙂"

  return { text: response, detectedStatus }
}

