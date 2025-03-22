# Nexus – Roadmap di Sviluppo

---

## ✅ FASE 1 — Fondamenta
- [x] Integrazione React Native + Redux Toolkit
- [x] Architettura modulare (componenti, store, util, styles)
- [x] `redux-persist` con `AsyncStorage` per storage automatico
- [x] Navigazione multi-schermata con `react-navigation`
- [x] Console di input e memoria (InputConsole + MemoryLog)
- [x] Visualizzazione dello stato mentale (StatusPanel)
- [x] Sostituito `StatusPanel` con `NexusFaceFloating`

---

## 🧠 FASE 2 — Cuore Empatico (IA + Espressività)
### IA Step 1
- [x] Implementato `ResponseEngine.js` statico
- [x] Risposte basate su `mode`, `status`, `keyword spotting`
- [x] Componente `ResponseBox` per visualizzare la risposta
- [x] Refactoring in `ResponseEngine.js` con moduli separati: emotion, intention, response
- [x] Mapping emozioni (keyword-based) in `modules/emotion`
- [x] Mapping intenzioni in `modules/intention`
- [x] Costruzione risposte per modalità/intenzione/emozione in `modules/response`

### Backend Laravel per memoria IA
- [x] Creato backend `nexus-backend` con Laravel
- [x] Connesso a database MySQL (Cloudways ready)
- [x] Tabelle `users` e `memories` con migrations pronte
- [x] Configurazione completata + migrations migrate con successo

### Schermo Espressioni
- [x] Creato viso modulare fluttuante (`NexusFaceFloating`)
- [x] Espressioni legate a `status` e colore/emozione
- [x] Nessun contenitore: stile TARS, pulito, cyber

### IA Step 2 (in corso)
- [ ] Hook `useIdle()` per animazioni inattività
- [ ] Occhi che si muovono in idle
- [ ] Bocca animata (sorrisi, attesa, muta)
- [ ] Micro-espressioni randomiche

### IA Step 3 (futuro)
- [ ] Generazione dinamica con struttura modulare
- [ ] Supporto per risposte adattive personalizzate
- [ ] Eventuale supporto LLM (offline o cloud)

---

## 🧭 Prossime Fasi
- [ ] Diario testuale con input e classificazione
- [ ] Gestione obiettivi/notes rapide
- [ ] Personalizzazione visuale avanzata
- [ ] Modalità “robot fisico” per trasposizione su Raspberry Pi
