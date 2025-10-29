"use client"


import { SlideContent } from "../presentation-slide"
import { SlideLayout } from "../presentation-slide"
import usePresentationStore from "../store/presentationStore"


export default function TitleContentLayout({slide, handleContextMenu}: {slide: SlideContent, handleContextMenu: (e: React.MouseEvent, slideId: number, )=>void}) {
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
     onClick={() => {
       setCurrentSlide1(slide.id)
       setCurrentSlideId(slide.id)
     }}
     onContextMenu={(e)=>handleContextMenu(e, slide.id)}
     >
      <div className="space-y-2 ">
        <label className="text-xs font-semibold text-muted-foreground uppercase tracking-wide">Title</label>
        <input
          type="text"
          value={slide.title}
          readOnly
          className="w-full text-xs font-bold text-foreground bg-transparent border-b-2 border-transparent hover:border-border focus:border-primary outline-none transition-colors px-2 py-2"
          placeholder="Click to add title"
        />
      </div>

      <div className="space-y-2 flex-1">
        <label className="text-xs font-semibold text-muted-foreground uppercase tracking-wide">Content</label>
        <textarea
          value={slide.body}
          readOnly
          
          className="w-full h-[100px] text-base text-foreground/80 bg-transparent border-2 border-dashed border-border rounded-lg hover:border-primary/50 focus:border-primary outline-none transition-colors resize-none"
          placeholder="Click to add content"
        />
      </div>
      </button>
    </>
  )
}
