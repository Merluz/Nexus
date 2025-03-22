
---

## 🧠 Stato Globale – Redux

### `store/store.js`
Contiene il Redux store principale, configurato con i vari slice.

### Slice principali previsti:

- **nexusSlice**: stato mentale, modalità attiva, memoria breve
- **diarySlice**: voci del diario, emozioni, note giornaliere
- **projectSlice**: lista progetti, avanzamento, stati
- **settingsSlice**: preferenze utente (tono, tema, stile, voce)

---

## 💾 Salvataggio Dati

Utilizzeremo **AsyncStorage** per salvare dati localmente sul dispositivo.

Ogni slice avrà un sistema di `persist/rehydrate` semplificato.

In futuro potremo introdurre un layer opzionale di **sync su cloud personale** (es. tramite Supabase o un backend custom in Flask).

---

## 🧬 Modulo Risposte – ResponseEngine

Un modulo JS dedicato alla generazione delle risposte empatiche.

Funzionalità:
- Risposte basate su modalità attiva (`supporto`, `complicità`, `riflessione`, ecc.)
- Classificazione del contenuto in arrivo (tone analysis, sentiment, keyword spotting)
- Collegamento tra contesto e risposte (“ieri hai detto…”)

---

## 🧠 Sistema Mentale e Stati

Lo stato interno di Nexus sarà rappresentato da:
- Stato attuale (focus, rilassato, emergenza, spento)
- Emozione dominante
- Ultimo input significativo ricevuto
- Stato di energia/motivazione (opzionale per UX)

---

## 🎭 Volto Digitale

Il volto di Nexus sarà gestito come un componente animato:
- Usando **Lottie** per animazioni dinamiche
- Variando forma/colore/luminosità in base allo stato attuale
- Interfacciabile con il motore delle risposte (es: cambia colore quando “parla”)

---

## 📴 Modalità Offline

L’intera app sarà progettata per funzionare **completamente offline**.

Tutte le funzionalità core (diario, progetti, volto, memoria, risposta) devono operare senza rete.

L’unica funzione opzionale online sarà il backup/export.

---

## 🔌 Estensibilità

L’architettura è pensata per supportare:

- Plugin modulari (es. calendario, task manager, terminale interattivo)
- Integrazione hardware futura (es. Raspberry Pi)
- Espansione con micro-modelli LLM offline

---

## 🔐 Sicurezza e Privacy

- Salvataggio locale cifrato (in futuro)
- Accesso tramite biometria o pin
- Modalità “blackout” per disattivare temporaneamente salvataggi o risposte

---

> L’architettura è pensata per adattarsi all’evoluzione dell’utente.  
> Nexus non è solo un’app, è un compagno digitale che cresce insieme al suo creatore.
