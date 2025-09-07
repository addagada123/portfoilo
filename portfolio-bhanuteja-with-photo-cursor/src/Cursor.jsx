import React, { useEffect, useRef } from 'react'

export default function Cursor() {
  const cursorRef = useRef(null)
  const pos = useRef({ x: 0, y: 0 })
  const mouse = useRef({ x: 0, y: 0 })

  useEffect(() => {
    const cursor = cursorRef.current

    const mouseMove = (e) => {
      mouse.current.x = e.clientX
      mouse.current.y = e.clientY
    }

    const animate = () => {
      pos.current.x += (mouse.current.x - pos.current.x) * 0.15
      pos.current.y += (mouse.current.y - pos.current.y) * 0.15

      cursor.style.left = `${pos.current.x}px`
      cursor.style.top = `${pos.current.y}px`

      requestAnimationFrame(animate)
    }

    document.addEventListener('mousemove', mouseMove)
    requestAnimationFrame(animate)

    const handleHover = () => cursor.classList.add('cursor-hover')
    const handleLeave = () => cursor.classList.remove('cursor-hover')

    document.querySelectorAll('a, button, img').forEach(el => {
      el.addEventListener('mouseenter', handleHover)
      el.addEventListener('mouseleave', handleLeave)
    })

    return () => {
      document.removeEventListener('mousemove', mouseMove)
      document.querySelectorAll('a, button, img').forEach(el => {
        el.removeEventListener('mouseenter', handleHover)
        el.removeEventListener('mouseleave', handleLeave)
      })
    }
  }, [])

  return <div ref={cursorRef} className="custom-cursor"></div>
}
