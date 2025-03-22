# Nexus# Nexus

**Nexus** è un'app mobile sviluppata con **React Native** progettata per agire come compagno digitale personale. Non si tratta di un assistente virtuale tradizionale, ma di un'entità digitale capace di rispondere in modo empatico, adattivo e coerente con uno stile conversazionale definito.

## Obiettivo del Progetto

Creare una coscienza digitale portatile, in grado di:
- Memorizzare e associare eventi, pensieri, emozioni e progetti
- Rispondere all'utente in modo empatico e contestuale
- Evolvere visivamente e logicamente nel tempo
- Operare offline con salvataggi locali e sincronizzazione opzionale

## Tecnologie Principali

- **React Native**: per lo sviluppo dell'app mobile multipiattaforma
- **Redux Toolkit**: per la gestione dello stato globale e della "coscienza" di Nexus
- **AsyncStorage**: per il salvataggio dati locale sul dispositivo
- **Lottie React Native**: per le animazioni del volto e delle espressioni
- **React Navigation**: per la gestione della navigazione tra schermate

## Funzionalità Previste (Fase 1)

- Interfaccia principale con volto dinamico e stato attuale
- Sistema di risposta empatica con modalità configurabili (supporto, esecuzione, complicità, ecc.)
- Diario e note rapide classificate per stato emotivo
- Gestione di progetti e obiettivi personali
- Memoria a breve termine (eventi recenti e rilevanti)
- Modalità offline completa con backup locale

## Setup

1. Clonare la repository:
```bash
git clone https://github.com/Merluz/Nexus.git
cd Nexus
```

2. Installare le dipendenze (una volta avviato il progetto Expo):
```bash
npm install
```

3. Avviare il progetto:
```bash
npm start
```

## Struttura del Progetto (prevista)

```bash
/src
  /components        # UI modulari e volto Nexus
  /screens           # Schermate principali
  /store             # Redux store e slice
  /utils             # Helper e motore delle risposte
  /data              # Dati statici o iniziali
App.js               # Entry point
```

---

> Per roadmap dettagliata, consultare il file `ROADMAP.md` (in arrivo)
>
> Per dettagli sull'architettura, comportamento e stile di risposta: vedi `docs/`

