"use client"


import { SlideContents } from "../presentation-slide"
import usePresentationStore from "../store/presentationStore"

export default function SectionHeaderLayout() {
  const addNewSlides = usePresentationStore(state=>state.addNewSlides)
  return (
    <button className="flex items-center justify-center h-full border-2"
    onClick={() => addNewSlides("section-header")}>
      <div className="space-y-2 w-full">
        <input
          type="text"
          // value={slide.title}
          // onChange={(e) => onUpdateSlide(slide.id, "title", e.target.value)}
          className="w-full text-xs font-bold text-foreground bg-transparent border-b-2 border-transparent hover:border-border focus:border-primary outline-none transition-colors px-2 py-2"
          placeholder="Click to add section title"
        />
      </div>
    </button>
  )
}
