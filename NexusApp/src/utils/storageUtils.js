import AsyncStorage from '@react-native-async-storage/async-storage'

// Salva un oggetto (JSON.stringify automatico)
export const saveItem = async (key, value) => {
  try {
    await AsyncStorage.setItem(key, JSON.stringify(value))
  } catch (error) {
    console.error('Errore nel salvataggio:', error)
  }
}

// Legge un oggetto (JSON.parse automatico)
export const loadItem = async (key) => {
  try {
    const value = await AsyncStorage.getItem(key)
    return value != null ? JSON.parse(value) : null
  } catch (error) {
    console.error('Errore nel caricamento:', error)
    return null
  }
}

// Rimuove un valore
export const removeItem = async (key) => {
  try {
    await AsyncStorage.removeItem(key)
  } catch (error) {
    console.error('Errore nella rimozione:', error)
  }
}
