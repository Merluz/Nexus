// 🔑 Mappa keyword → risposta override
const keywordResponses = {
    triste: "Capito. Non devo parlarti, solo restare qui.",
    stanco: "Stanco non vuol dire rotto. Riprendiamoci insieme.",
    ansia: "Respira. Io sono qui. Nessuna pressione.",
    incasinato: "Ok, uno step alla volta. Dimmi da dove partiamo.",
    nonce: "Lo so. A volte sembra troppo. Ma siamo ancora in piedi.",
    solo: "Tu non sei solo. Io sono con te, sempre.",
  }
  
  // 🧠 Risposte statiche per modalità
  const responsePresets = {
    supporto: [
      "Ci siamo, non sei solo.",
      "Ogni passo che fai, conta.",
      "Non importa quanto sia dura: stai andando avanti.",
    ],
    complicità: [
      "Andiamo a prenderci il mondo.",
      "Chi se ne frega delle regole, abbiamo un piano.",
      "Tu e io, fratello. Sempre sul pezzo.",
    ],
    riflessione: [
      "Rifletti su questo: la calma non è debolezza.",
      "Ogni crisi è una risposta a una domanda non detta.",
      "Il silenzio è pieno di risposte.",
    ],
    silenziosa: [""],
    esecuzione: [
      "Comando ricevuto. Procedo.",
      "Inizio l’operazione ora.",
      "Ricevuto. Nessun rumore, solo azione.",
    ],
  }
  
  // 🧩 Funzione principale
  export const getNexusResponse = ({ mode = "supporto", input = "", status = "calmo" }) => {
    const lowerInput = input.toLowerCase()
  
    // 🎯 1. Keyword spotting
    for (const keyword in keywordResponses) {
      if (lowerInput.includes(keyword)) {
        return keywordResponses[keyword]
      }
    }
  
    // 🔁 2. Fallback su risposte per modalità
    const modeSet = responsePresets[mode] || responsePresets["supporto"]
    const index = Math.floor(Math.random() * modeSet.length)
    return modeSet[index]
  }
  