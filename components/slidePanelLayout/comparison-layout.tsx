"use client"

import type { SlideContent } from "../presentation-slide"
import { SlideLayout } from "../presentation-slide"
import usePresentationStore from "../store/presentationStore"



export default function ComparisonLayout({slide, handleContextMenu}: {slide: SlideContent, handleContextMenu: (e: React.MouseEvent, slideId: number, )=>void}) {

  const currentSlideId = usePresentationStore(state=>state.currentSlideId)
   const setCurrentSlide1 = usePresentationStore(state =>state.setCurrentSlide1)
  const setCurrentSlideId = usePresentationStore(state =>state.setCurrentSlideId)
  return (
    <>
    <button 
     className={`relative rounded border-2 transition-all min-h-[100px] p-2 flex flex-col w-full
      ${
            currentSlideId === slide.id ? "border-green-300 bg-black" : "border-border bg-black hover:bg-card/80"
          }
          `
        }
    
    onClick={() => 
    {
      setCurrentSlide1(slide.id)
      setCurrentSlideId(slide.id)
    }
    }
    onContextMenu={(e) => handleContextMenu(e, slide.id)}
    >
      <div className="space-y-2">
        <label className="text-xs font-semibold text-muted-foreground uppercase tracking-wide">Title</label>
        <input
          type="text"
          value={slide.title}
          readOnly
        className="w-full border-none text-xs outline-none"
          placeholder="Click to add title"
        />
      </div>

      <div className="grid grid-cols-2 gap-2 h-full">
        <div className="space-y-2">
          <label className="text-xs font-semibold text-muted-foreground uppercase tracking-wide">Left Item</label>
          <textarea
            value={slide.leftContent || ""}
            readOnly
          
            className="w-full h-[90px]  text-base text-foreground/80 bg-transparent border-2 border-dashed border-border rounded-lg hover:border-primary/50 focus:border-primary outline-none transition-colors resize-none text-[6px]"
            placeholder="Click to add left item"
          />
        </div>

        <div className="space-y-2 ">
          <label className="text-xs font-semibold text-muted-foreground uppercase tracking-wide">Right Item</label>
          <textarea
            value={slide.rightContent || ""}
            readOnly
            className="w-full h-[90px] text-base text-foreground/80 bg-transparent border-2 border-dashed border-border rounded-lg hover:border-primary/50 focus:border-primary outline-none transition-colors  resize-none text-[6px]"
            placeholder="Click to add right item"
          />
        </div>
      </div>
      </button>
    </>
  )
}
