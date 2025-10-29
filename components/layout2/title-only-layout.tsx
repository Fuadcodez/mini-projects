"use client"

import usePresentationStore from "../store/presentationStore"
import { SlideContents } from "../presentation-slide"
interface LayoutProps {
  slide: SlideContents
  onUpdateSlide: (id: number, field: keyof SlideContents, value: string) => void
}

export default function TitleOnlyLayout() {
const slide = usePresentationStore(state=>state.currentSlide1)
  const onUpdateSlide = usePresentationStore(state=>state.updateSlide)
  return (
    <div className="space-y-2">
      <label className="text-xs font-semibold text-muted-foreground uppercase tracking-wide">Title</label>
      <input
        type="text"
        value={slide.title}
        onChange={(e) => onUpdateSlide(slide.id, "title", e.target.value)}
        className="w-full text-5xl font-bold text-foreground bg-transparent border-b-2 border-transparent hover:border-border focus:border-primary outline-none transition-colors px-2 py-2"
        placeholder="Click to add title"
      />
    </div>
  )
}
