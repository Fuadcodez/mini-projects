"use client"


import { SlideContents } from "../presentation-slide"
import usePresentationStore from "../store/presentationStore"


export default function TitleSlideLayout() {
  const slide = usePresentationStore(state=>state.currentSlide1)
  const onUpdateSlide = usePresentationStore(state=>state.updateSlide)
  return (
    <div className="flex flex-col items-center justify-center h-full gap-8">
      <div className="space-y-2 w-full">
        <input
          type="text"
          value={slide.title}
          onChange={(e) => onUpdateSlide(slide.id, "title", e.target.value)}
          className="w-full text-5xl font-bold text-foreground bg-transparent border-b-2 border-transparent hover:border-border focus:border-primary outline-none transition-colors px-2 py-2 text-center"
          placeholder="Click to add title"
        />
      </div>

      <div className="space-y-2 w-full">
        <input
          type="text"
          value={slide.subtitle}
          onChange={(e) => onUpdateSlide(slide.id, "subtitle", e.target.value)}
          className="w-full text-2xl text-foreground/70 bg-transparent border-b-2 border-transparent hover:border-border focus:border-primary outline-none transition-colors px-2 py-2 text-center"
          placeholder="Click to add subtitle"
        />
      </div>
    </div>
  )
}
