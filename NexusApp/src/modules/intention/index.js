// 📍 modules/intention/index.js

/**
 * 🎯 Intenzioni comuni espresse in input testuali
 * Possono essere ampliate facilmente con sinonimi
 */
const intentionKeywords = {
    chiedere: ['perché', 'come', 'quando', 'dove', 'chi', 'cosa', 'quanto', '?', 'spiegami'],
    salutare: ['ciao', 'hey', 'salve', 'buongiorno', 'buonasera', 'hello'],
    ringraziare: ['grazie', 'ti ringrazio', 'grazie mille', 'gentile'],
    insultare: ['stupido', 'inutile', 'sei uno schifo', 'odio', 'vai via'],
    lamentarsi: ['non va', 'odio', 'mi fa schifo', 'non mi piace', 'che brutto'],
    elogiare: ['sei bravo', 'sei fantastico', 'ottimo', 'grande', 'ti adoro'],
    comando: ['fai', 'esegui', 'mostra', 'dimmi', 'vai', 'apri', 'calcola'],
    confessare: ['ti devo dire', 'ammetto', 'non lho mai detto', 'confesso'],
    raccontare: ['ieri', 'oggi', 'altro giorno', 'una volta', 'ti racconto'],
    giocare: ['giochiamo', 'facciamo un gioco', 'sfida', 'quiz'],
  }
  
  /**
   * 🧠 Analizza il testo per rilevare l'intenzione principale dell'utente
   * Se non rileva nulla di specifico, restituisce 'neutro'
   */
  export function detectIntention(inputText = '') {
    const text = typeof inputText === 'string' ? inputText.toLowerCase() : ''
  
    for (const [intention, keywords] of Object.entries(intentionKeywords)) {
      for (const keyword of keywords) {
        if (text.includes(keyword)) return intention
      }
    }
  
    return 'neutro'
  }
  