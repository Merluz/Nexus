import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  mode: 'supporto', // supporto | complicità | riflessione | esecuzione | silenziosa
  status: 'calmo',  // calmo | carico | stanco | ansioso | spento
  lastInput: '',    // ultimo input dell’utente
  memory: [],       // breve memoria delle ultime frasi/eventi
}

export const nexusSlice = createSlice({
  name: 'nexus',
  initialState,
  reducers: {
    setMode: (state, action) => {
      state.mode = action.payload
    },
    setStatus: (state, action) => {
      state.status = action.payload
    },
    setLastInput: (state, action) => {
      state.lastInput = action.payload
    },
    addToMemory: (state, action) => {
      state.memory.push(action.payload)
      if (state.memory.length > 20) state.memory.shift() // massimo 20 elementi
    },
    resetMemory: (state) => {
      state.memory = []
    },
  },
})

export const { setMode, setStatus, setLastInput, addToMemory, resetMemory } = nexusSlice.actions
export default nexusSlice.reducer
