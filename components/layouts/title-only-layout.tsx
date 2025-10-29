"use client"

// import type { SlideContent } from "../../../../../presetationnextproto/components/presentation-slide"
import { SlideContents } from "../presentation-slide"
import { SlideLayout } from "../presentation-slide"
import usePresentationStore from "../store/presentationStore"
interface LayoutProps {
  slide: SlideContents
  onUpdateSlide: (id: number, field: keyof SlideContents, value: string) => void
}


export default function TitleOnlyLayout() {
  const addNewSlides = usePresentationStore(state=>state.addNewSlides)
  return (
    <button className="space-y-2 border-2"
    onClick={() => addNewSlides("title-only")}
    >
      <label className="text-xs font-semibold text-muted-foreground uppercase tracking-wide">Title</label>
      <input
        type="text"
        // value={slide.title}
        // onChange={(e) => onUpdateSlide(slide.id, "title", e.target.value)}
        className="w-full text-xs font-bold text-foreground bg-transparent border-b-2 border-transparent hover:border-border focus:border-primary outline-none transition-colors px-2 py-2"
        placeholder="Click to add title"
      />
    </button>
  )
}
