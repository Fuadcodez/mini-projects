"use client"

import { SlideContents } from "../presentation-slide"
import usePresentationStore from "../store/presentationStore"
interface LayoutProps {
  slide: SlideContents
  onUpdateSlide: (id: number, field: keyof SlideContents, value: string) => void
}

export default function TitleContentLayout() {
const slide = usePresentationStore(state=>state.currentSlide1)
  const onUpdateSlide = usePresentationStore(state=>state.updateSlide)
  return (
      <>
      <div className="space-y-2">
        <label className="text-xs font-semibold text-muted-foreground uppercase tracking-wide">Title</label>
        <input
          type="text"
          value={slide.title}
          onChange={(e) => onUpdateSlide(slide.id, "title", e.target.value)}
          className="w-full text-4xl font-bold text-foreground bg-transparent border-b-2 border-transparent hover:border-border focus:border-primary outline-none transition-colors px-2 py-2"
          placeholder="Click to add title"
        />
      </div>

      <div className="space-y-2 flex-1">
        <label className="text-xs font-semibold text-muted-foreground uppercase tracking-wide">Content</label>
        <textarea
          value={slide.body}
          onChange={(e) => onUpdateSlide(slide.id, "body", e.target.value)}
          className="w-full h-full text-base text-foreground/80 bg-transparent border-2 border-dashed border-border rounded-lg hover:border-primary/50 focus:border-primary outline-none transition-colors p-4 resize-none"
          placeholder="Click to add content"
        />
      </div>
    </>
  )
}
