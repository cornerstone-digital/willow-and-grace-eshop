import { useState, useEffect } from 'react'

const useWindowSize = () => {
  const [width, setWidth] = useState(0)
  const [height, setHeight] = useState(0)

  const getWindowSize = () => {
    setWidth(window.innerWidth)
    setHeight(window.innerHeight)
  }

  useEffect(() => {
    window.addEventListener('resize', getWindowSize)

    getWindowSize()

    return () => {
      window.removeEventListener('resize', getWindowSize)
    }
  })

  return {
    width,
    height,
  }
}

export default useWindowSize
