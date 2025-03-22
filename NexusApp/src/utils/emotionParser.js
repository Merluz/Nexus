// 📍 src/utils/emotionParser.js

/**
 * Analizza l'input testuale e prova a dedurre uno stato emotivo.
 * Restituisce una stringa: 'felice', 'triste', ecc.
 */
export function parseEmotionFromText(text = "") {
    const lower = typeof text === 'string' ? text.toLowerCase() : ''

    if (/(felice|yeah|evviva|finalmente|bellissim)/.test(lower)) return 'felice'
    if (/(triste|che palle|che giornata|sto male|giornata di merda)/.test(lower)) return 'triste'
    if (/(ansia|ansioso|non riesco|agitato|aiuto)/.test(lower)) return 'ansioso'
    if (/(vaff|cazzo|odio|non ne posso più|basta)/.test(lower)) return 'arrabbiato'
    if (/(perché|come mai|come si fa|spiegami)/.test(lower)) return 'curioso'
    if (/(boh|mah|non lo so|niente)/.test(lower)) return 'spento'
  
    return 'neutrale'
  }
  