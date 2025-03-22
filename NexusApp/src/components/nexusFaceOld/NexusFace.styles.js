import { StyleSheet } from 'react-native'

export default StyleSheet.create({
  container: {
    marginTop: 20,
    width: 200,
    height: 120,
    backgroundColor: '#111',
    borderRadius: 16,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 10,
    borderWidth: 2,
    borderColor: '#0ff',
  },
  eyesContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '80%',
    marginBottom: 10,
  },
  eye: {
    width: 20,
    height: 20,
    borderRadius: 10,
    backgroundColor: '#0ff',
  },
  eyebrow: {
    width: 30,
    height: 4,
    backgroundColor: '#0ff',
    position: 'absolute',
    top: 5,
  },
  mouth: {
    width: 40,
    height: 6,
    borderRadius: 3,
    backgroundColor: '#0ff',
    marginTop: 10,
  },
})
