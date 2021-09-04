import { useRef, useEffect } from 'react'

export const useCanvas = (draw,count) => {
  
  const canvasRef = useRef(null)
  
  useEffect(() => {
    
    const canvas = canvasRef.current
    const context = canvas.getContext('2d')
    
    draw(context,count)
    
  }, [draw,count])
  
  return canvasRef
}
