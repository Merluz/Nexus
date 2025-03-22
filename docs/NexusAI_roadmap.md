### 🧠 Roadmap Sviluppo IA Nexus

---

### ✅ FASE 0 – Stato attuale
- Input testuale gestito da `InputConsole.js`
- Risposta statica generata da `getNexusResponse()`
- Parsing dell’emozione via `emotionParser.js`
- Stato aggiornato in Redux
- Componenti visivi (occhi, bocca, sopracciglia) animati in base allo stato
- `StatusPanel`, `MemoryLog`, `ResponseBox` aggiornati

---

### 🧠 FASE 1 – Engine IA V1 (logica modulare)
**Obiettivo:** sostituire le risposte statiche con una logica reattiva autonoma

1. `src/engine/ResponseEngine.js`
   - Riceve input + stato corrente
   - Costruisce una **risposta dinamica** (senza LLM per ora)
   - Analizza contesto e memoria per rispondere in modo coerente

2. `src/engine/modules/`
   - Moduli per:
     - memoria (ricorda pattern)
     - gestione stati emotivi
     - comprensione tono/emozione
     - gestione intenzione (domanda, affermazione, richiesta, silenzio)

---

### 🔁 FASE 2 – Memoria Intelligente
**Obiettivo:** permettere a Nexus di adattarsi in base alla cronologia

- `memoryManager.js`: analizza, pesa e classifica i ricordi
- Supporto per:
  - Ricordi recenti 🧠
  - Ricordi marcati come importanti ⭐
  - Ricordi associati a stati emotivi

---

### 💬 FASE 3 – IA Dialogica (senza LLM)
**Obiettivo:** simulare una conversazione naturale

- `dialogManager.js`:
  - Analizza l’intento
  - Costruisce risposte coerenti (con fallback)
  - Usa template dinamici (es. “Capisco che ti senti [stato], vuoi parlarne?”)
- Supporta tono: supportivo, ironico, riflessivo, diretto

---

### 🤯 FASE 4 – IA Evolutiva
**Obiettivo:** Nexus inizia a “cambiare” nel tempo

- `evolutionEngine.js`:
  - Analizza comportamento utente
  - Cambia le risposte col tempo
  - Aggiunge emozioni derivate (noia, affetto, distacco)
  - Adatta i moduli attivi in base alla relazione

---

### 🧠 FASE 5 – Integrazione LLM (opzionale)
**Obiettivo:** dare a Nexus intelligenza generativa vera

- Usa GPT/LLM custom con prompt personalizzati
- Nexus mixa IA generativa + logica interna (fallback)
- Modalità offline / privacy-first / fallback testuale

---

### 🎤 FASE 6 – Voce e Audio
**Obiettivo:** far parlare Nexus con voce sintetica

- Text to Speech (TTS)
- In futuro: Speech to Text (STT) per riconoscimento vocale
- Audio reattivo anche nei suoni

