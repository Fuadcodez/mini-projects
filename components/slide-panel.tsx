"use client"

import { useRef, useState } from "react"
import type { SlideContent } from "./presentation-slide"
import SlideContextMenu from "./slide-context-menu"
interface SlidePanelProps {
  slides: SlideContent[]
  currentSlideId: number
  currentModal: number | null
  onSelectSlide: (id: number) => void
  duplicateSlide: (id: number) => void
  setCurrentModal: (id: number | null) => void
  addSlides: () => void
  deleteSlide: (id: number)=>void
}

export default function SlidePanel({ slides, currentSlideId, onSelectSlide, duplicateSlide, currentModal, setCurrentModal, addSlides, deleteSlide }: SlidePanelProps) {
  const [contextMenu, setContextMenu] = useState<{ slideId: number; x: number; y: number } | null>(null)
  const contextMenuRef = useRef<HTMLDivElement>(null)

  const handleContextMenu = (e: React.MouseEvent, slideId: number) => {
    e.preventDefault()
    setContextMenu({
      slideId,
      x: e.clientX,
      y: e.clientY,
    })
  }
  return (
    <div className="w-[200px] h-full overflow-y-scroll flex flex-col gap-2 p-3 px-5">
      {slides.map((slide, index) => (
        <button
          key={slide.id}
          onClick={() => onSelectSlide(slide.id)}
          onContextMenu={(e) => {
            // e.preventDefault()
            // setCurrentModal(slide.id)
            handleContextMenu(e, slide.id)
            // duplicateSlide(slide.id)
          }}
          className={`relative rounded border-2 transition-all min-h-[100px] ${
            currentSlideId === slide.id ? "border-primary bg-black" : "border-border bg-black hover:bg-card/80"
          }`}
        >
          {/* Slide number */}
          <div className="absolute top-0 -left-5 text-[10px] font-bold text-white">{index + 1}</div>

          {/* Slide preview */}
          <div className="p-2 h-full flex flex-col justify-between text-left">
            {/* <div className="text-[8px] font-semibold text-foreground truncate">{slide.title}</div>

             */}
                <input
            type="text"
            value={slide.title}
            readOnly
            // onChange={(e) => onUpdateSlide(slide.id, "title", e.target.value)}
            className="w-full text-[8px] font-bold text-foreground bg-transparent border-b-2 border-transparent hover:border-border focus:border-primary outline-none transition-colors px-2"
            placeholder="Click to add title"
          />
            {/* <div className="text-xs text-muted-foreground line-clamp-2">{slide.subtitle}</div> */}
             <div className="space-y-2 flex-1 h-full">
          {/* <label className="text-xs font-semibold text-muted-foreground uppercase tracking-wide">Content</label> */}
          <textarea
            value={slide.body}
            readOnly
            // onChange={(e) => onUpdateSlide(slide.id, "body", e.target.value)}
            className="w-full h-full text-[6px] text-foreground/80 bg-transparent border-2 border-dashed border-border rounded-lg hover:border-primary/50 focus:border-primary outline-none transition-colors p-1 pb-5 resize-none"
            placeholder="Click to add content"
          />
        </div>
          </div>
          {/* Modal */}
          {currentModal === slide.id && <div className="absolute -bottom-1 -right-10 w-[70px] h-[70px] bg-red-500 z-[1000]" >
          {/* <button></button> */}
          <span onClick={() => duplicateSlide(slide.id)}>Duplicate Slide</span>
          </div>}
        </button>
      ))}
        {contextMenu && (
        <div ref={contextMenuRef}>
          <SlideContextMenu
            x={contextMenu.x}
            y={contextMenu.y}
            slideId={contextMenu.slideId}
            onNewSlide={() => {
              // onAddNewSlide(contextMenu.slideId)
              addSlides()
              setContextMenu(null)
            }}
            onDuplicateSlide={() => { duplicateSlide(contextMenu.slideId)
            setContextMenu(null)}}
            onDeleteSlide={() => {
              // onDeleteSlide(contextMenu.slideId)
              deleteSlide(contextMenu.slideId)
              setContextMenu(null)
            }}
            onClose={() => setContextMenu(null)}
          />
        </div>
      )}
    </div>
  )
}
