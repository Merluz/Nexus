// 📍 modules/emotion/index.js

/**
 * 🧠 Dizionario base di parole associate a emozioni
 * Può essere ampliato e gestito in futuro da un file JSON esterno
 */
const emotionWords = {
    felice: ['felice', 'contento', 'bene', 'allegro', 'soddisfatto', 'entusiasta'],
    triste: ['triste', 'infelice', 'depress', 'giù', 'malinconico'],
    arrabbiato: ['arrabbiato', 'furioso', 'incazzato', 'nervoso', 'agitato'],
    ansioso: ['ansioso', 'agitato', 'preoccupato', 'stressato'],
    curioso: ['curioso', 'interessato', 'scoprire', 'sapere'],
    spento: ['stanco', 'spento', 'svogliato', 'scarico'],
  }
  
  /**
   * 🧠 Analizza il testo e restituisce lo stato emozionale prevalente
   * Se nessuna parola chiave viene trovata, restituisce "neutrale"
   */
  export function detectEmotion(inputText = '') {
    const text = typeof inputText === 'string' ? inputText.toLowerCase() : ''
  
    for (const [emotion, keywords] of Object.entries(emotionWords)) {
      for (const keyword of keywords) {
        if (text.includes(keyword)) return emotion
      }
    }
  
    return 'neutrale'
  }
  
  // 🔄 In futuro potremo usare NLP, sentiment analysis o embedding per migliorarlo
  