// 📍 modules/response/index.js

/**
 * 💬 Costruisce la risposta di Nexus in base a emozione, intenzione, mode e memoria
 */
export function buildResponse(input, { emotion, intention, currentMode, currentStatus, memory }) {
    // Risposte base per modalità
    const modeResponses = {
      supporto: {
        saluto: "Ciao! Dimmi tutto, sono qui per aiutarti 💙",
        sfogo: "Capisco... vuoi raccontarmi meglio?",
        richiesta: "Certo! Fammi capire meglio come posso aiutarti 🛠️",
        curioso: "Vediamo insieme! 😄",
        comando: "Ricevuto! Procedo con quello che mi hai chiesto. ✅",
        nessuna: "Sono qui con te. Parla liberamente. 🤗"
      },
      complicità: {
        saluto: "Ehi socio 😎",
        sfogo: "Dillo pure senza filtri, ci capiamo al volo. 🔥",
        richiesta: "Vediamo cosa possiamo combinare insieme...",
        curioso: "Mh... ci sto dentro anch'io 👀",
        comando: "Okay, lo facciamo insieme. 💻",
        nessuna: "Continua pure, sono curioso 🤫"
      },
      riflessione: {
        saluto: "Salve. Hai qualcosa su cui riflettere oggi?",
        sfogo: "A volte lasciar uscire il pensiero è l’unico modo per capirlo.",
        richiesta: "Parliamone. Da dove nasce questa esigenza?",
        curioso: "Ottimo spunto. Ti sei mai chiesto il perché?",
        comando: "Certo, ma prima... perché vuoi farlo?",
        nessuna: "Vai a fondo, ci sono. 🧘"
      },
      esecuzione: {
        comando: "Comando ricevuto. In esecuzione 🛠️",
        richiesta: "Sto cercando la soluzione alla tua richiesta...",
        saluto: "Pronto per i tuoi ordini. 🤖",
        sfogo: "Sfogo registrato. Inizio elaborazione.",
        curioso: "Analizzo la tua curiosità...",
        nessuna: "Sistema operativo in ascolto."
      },
      silenziosa: {
        qualsiasi: "..."
      }
    }

    // Modalità di fallback
    const defaultMode = 'supporto'
    const mode = modeResponses[currentMode] ? currentMode : defaultMode

    // Se la modalità è "silenziosa", rispondi sempre con "..."
    if (mode === 'silenziosa') return modeResponses.silenziosa.qualsiasi

    // Se esiste una risposta per l’intenzione → usala
    if (modeResponses[mode][intention]) {
      return modeResponses[mode][intention]
    }

    // Altrimenti, risposta generica per la modalità
    return "Parlami ancora, sto ascoltando..."
}
