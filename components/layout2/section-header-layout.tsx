"use client"


import { SlideContents } from "../presentation-slide"
import usePresentationStore from "../store/presentationStore"
interface LayoutProps {
  slide: SlideContents
  onUpdateSlide: (id: number, field: keyof SlideContents, value: string) => void
}

export default function SectionHeaderLayout() {
const slide = usePresentationStore(state=>state.currentSlide1)
  const onUpdateSlide = usePresentationStore(state=>state.updateSlide)
  return (
       <div className="flex items-center justify-center h-full">
      <div className="space-y-2 w-full">
        <input
          type="text"
          value={slide.title}
          onChange={(e) => onUpdateSlide(slide.id, "title", e.target.value)}
          className="w-full text-6xl font-bold text-foreground bg-transparent border-b-2 border-transparent hover:border-border focus:border-primary outline-none transition-colors px-2 py-2"
          placeholder="Click to add section title"
        />
      </div>
    </div>
  )
}
