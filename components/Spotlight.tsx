import React, { useRef, useState, useEffect } from 'react'
import MousePosition from '../utils/mouse-position'
import { SpotlightCardProps, SpotlightProps } from "../types/typings"
export default function Spotlight({
  children,
  className = '',
}: SpotlightProps) {
  const containerRef = useRef<HTMLDivElement>(null)
  const mousePosition = MousePosition()
  const mouse = useRef<{ x: number; y: number }>({ x: 0, y: 0 })
  const containerSize = useRef<{ w: number; h: number }>({ w: 0, h: 0 })
  const [boxes, setBoxes] = useState<Array<HTMLElement>>([])
  useEffect(() => {
    containerRef.current && setBoxes(Array.from(containerRef.current.children).map((el) => el as HTMLElement))
  }, [])

  useEffect(() => {
    initContainer()
    window.addEventListener('resize', initContainer)
    return () => {
      window.removeEventListener('resize', initContainer)
    }
  }, [setBoxes])
  useEffect(() => {
    onMouseMove()
  }, [mousePosition])
  const initContainer = () => {
    if (containerRef.current) {
      containerSize.current.w = containerRef.current.offsetWidth
      containerSize.current.h = containerRef.current.offsetHeight
    }
  }

  const onMouseMove = () => {
    if (containerRef.current) {
      const rect = containerRef.current.getBoundingClientRect()
      const { w, h } = containerSize.current
      const x = mousePosition.x - rect.left
      const y = mousePosition.y - rect.top
      const inside = x < w && x > 0 && y < h && y > 0
      if (inside) {
        mouse.current.x = x
        mouse.current.y = y
        boxes.forEach((box) => {
          const boxX = -(box.getBoundingClientRect().left - rect.left) + mouse.current.x
          const boxY = -(box.getBoundingClientRect().top - rect.top) + mouse.current.y
          box.style.setProperty('--mouse-x', `${boxX}px`)
          box.style.setProperty('--mouse-y', `${boxY}px`)
        })
      }
    }
  }
  return (
    <div className={className} ref={containerRef}>{children}</div>
  )
}

export function SpotlightCard({
  children,
  className = ''
}: SpotlightCardProps) {
  return <div className={`relative h-full hover:cursor-pointer rounded-lg p-px before:absolute before:w-10 
  before:h-10 before:-left-5 before:-top-5 before:bg-[#0286EA] before:rounded-full before:opacity-100 
  before:pointer-events-none before:transition-opacity before:duration-500 before:translate-x-[var(--mouse-x)] 
  before:translate-y-[var(--mouse-y)] before:group-hover:opacity-100 before:z-0 before:blur-[100px] 
  after:absolute after:w-40 after:h-40 after:-left-20 after:-top-20 after:bg-[#0286EA] after:rounded-full 
  after:opacity-0 after:pointer-events-none after:transition-opacity after:duration-500 after:translate-x-[var(--mouse-x)]
  after:translate-y-[var(--mouse-y)] after:hover:opacity-100 after:z-0 after:blur-[100px] 
  overflow-hidden ${className}`}>{children}</div>
}