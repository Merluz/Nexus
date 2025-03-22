import { StyleSheet } from 'react-native'

export default StyleSheet.create({
  faceContainer: {
    width: '100%',
    height: 160,
    alignItems: 'center',
    justifyContent: 'center',
  },
  eyeRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: 120,
    marginBottom: 8,
  },
  eye: {
    width: 20,
    height: 20,
    borderRadius: 10,
    backgroundColor: '#0ff',
  },
  browRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: 130,
    position: 'absolute',
    top: 30,
  },
  brow: {
    width: 30,
    height: 5,
    backgroundColor: '#0ff',
    borderRadius: 2,
  },
  mouth: {
    width: 40,
    height: 6,
    borderRadius: 3,
    backgroundColor: '#0ff',
    marginTop: 10,
  },
})
