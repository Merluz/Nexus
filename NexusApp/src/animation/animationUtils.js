// 🔧 Funzioni condivise
export const safeStopAnimation = (ref) => {
    try {
      if (ref && typeof ref.stopAnimation === 'function') {
        ref.stopAnimation()
      }
    } catch (err) {
      console.warn(err.message)
    }
  }
  