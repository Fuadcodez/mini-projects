"use client"

import { SlideContent, SlideContents } from "../presentation-slide"
import { SlideLayout } from "../presentation-slide"


interface LayoutProps {
  slide: SlideContents
  onUpdateSlide: (id: number, field: keyof SlideContents, value: string) => void
}
import usePresentationStore from "../store/presentationStore"


export default function TitleSlideLayout({slide, handleContextMenu}: {slide: SlideContent, handleContextMenu: (e: React.MouseEvent, slideId: number, )=>void}) {
  const addNewSlides = usePresentationStore(state=>state.addNewSlides)
  const currentSlideId = usePresentationStore(state=>state.currentSlideId)
  const setCurrentSlide1 = usePresentationStore(state =>state.setCurrentSlide1)
  const setCurrentSlideId = usePresentationStore(state =>state.setCurrentSlideId)
  return (
    <button 
     className={`relative rounded border-2 transition-all min-h-[100px] p-2 flex flex-col justify-center items-center w-full
      ${
            currentSlideId === slide.id ? "border-green-300 bg-black" : "border-border bg-black hover:bg-card/80"
          }
          `
        }
    onClick={() => {
      setCurrentSlide1(slide.id)
      setCurrentSlideId(slide.id)
    }}
    onContextMenu={(e)=>handleContextMenu(e, slide.id)}
    >
      <div className="space-y-2 w-full">
        <input
          type="text"
          value={slide.title}
          readOnly
           className="w-full text-xs text-foreground/70 bg-transparent border-b-2 border-transparent hover:border-border focus:border-primary outline-none transition-colors px-2 py-2 text-center"
          placeholder="Click to add title"
        />
      </div>

      <div className="space-y-2 w-full">
        <input
          type="text"
          value={slide.subtitle}
          readOnly
         
          className="w-full text-xs text-foreground/70 bg-transparent border-b-2 border-transparent hover:border-border focus:border-primary outline-none transition-colors px-2 py-2 text-center"
          placeholder="Click to add subtitle"
        />
      </div>
    </button>
  )
}
