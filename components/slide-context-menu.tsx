"use client"

import { useEffect, useRef } from "react"

interface SlideContextMenuProps {
  x: number
  y: number
  slideId: number
  onNewSlide: () => void
  onDuplicateSlide: () => void
  onDeleteSlide: () => void
  onClose: () => void
}

export default function SlideContextMenu({
  x,
  y,
  onNewSlide,
  onDuplicateSlide,
  onDeleteSlide,
  onClose,
}: SlideContextMenuProps) {
  const menuRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    // Adjust position if menu goes off-screen
    if (menuRef.current) {
      const rect = menuRef.current.getBoundingClientRect()
      let adjustedX = x
      let adjustedY = y

      if (rect.right > window.innerWidth) {
        adjustedX = window.innerWidth - rect.width - 10
      }
      if (rect.bottom > window.innerHeight) {
        adjustedY = window.innerHeight - rect.height - 10
      }

      menuRef.current.style.left = `${adjustedX}px`
      menuRef.current.style.top = `${adjustedY}px`
    }
  }, [x, y])
  const modalButtons = [{
    icon: "➕",
    label: "Add New Slide",
    onClick: onNewSlide,
  },
  {
    icon: "📋",
    label: "Duplicate Slide",
    onClick: onDuplicateSlide,
  },
  {
    icon: "🗑️",
    label: "Delete Slide",
    onClick: onDeleteSlide,
  }]

  return (
    <div
      ref={menuRef}
      className="fixed border border-border rounded-lg z-50 py-2 px-2 min-w-48 bg-black "
      style={{ left: `${x}px`, top: `${y}px` }}
    >
      {modalButtons.map((button, index)=>(
       <button key={index}
        onClick={button.onClick}
        className="w-full px-4 py-2 text-sm text-foreground hover:bg-gray-200/80 hover:text-black text-left transition-colors flex items-center gap-2 cursor-pointer"
      >
        <span>{button.icon}</span> {button.label}
      </button>
      ))}
    </div>
  )
}
