"use client"


import { SlideContent } from "../presentation-slide"
import { SlideLayout } from "../presentation-slide"


import usePresentationStore from "../store/presentationStore"
export default function SectionHeaderLayout({slide, handleContextMenu}: {slide: SlideContent, handleContextMenu: (e: React.MouseEvent, slideId: number, )=>void}) {
  const currentSlideId = usePresentationStore(state=> state.currentSlideId)
   const setCurrentSlide1 = usePresentationStore(state =>state.setCurrentSlide1)
  const setCurrentSlideId = usePresentationStore(state =>state.setCurrentSlideId)
  return (
    <button 
   className={`relative rounded border-2 transition-all min-h-[100px] p-2 flex flex-col w-full
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
  
          className="w-full text-xs font-bold text-foreground bg-transparent border-b-2 border-transparent hover:border-border focus:border-primary outline-none transition-colors px-2 py-2"
          placeholder="Click to add section title"
        />
      </div>
    </button>
  )
}
