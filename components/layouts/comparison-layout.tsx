"use client"

import type { SlideContent } from "../presentation-slide"
import { SlideLayout } from "../presentation-slide"
import usePresentationStore from "../store/presentationStore"

interface LayoutProps {
  slide: SlideContent
  onUpdateSlide: (id: number, field: keyof SlideContent, value: string) => void
}

// export default function ComparisonLayout({ slide, onUpdateSlide }: LayoutProps) {
export default function ComparisonLayout() {
  const addNewSlides = usePresentationStore(state=>state.addNewSlides)

  return (
    <>
    <button className="border-2 flex flex-col h-full p-2"
    onClick={() => addNewSlides("comparison")}
    >
      <div className="space-y-2">
        <label className="text-xs font-semibold text-muted-foreground uppercase tracking-wide">Title</label>
        <input
          type="text"
          // value={slide.title}
          // onChange={(e) => onUpdateSlide(slide.id, "title", e.target.value)}
          className="w-full text-xs font-bold text-foreground bg-transparent border-b-2 border-transparent hover:border-border focus:border-primary outline-none transition-colors px-2 py-2"
          placeholder="Click to add title"
        />
      </div>

      <div className="grid grid-cols-2 gap-2 h-full">
        <div className="space-y-2">
          <label className="text-xs font-semibold text-muted-foreground uppercase tracking-wide">Left Item</label>
          <textarea
            // value={slide.leftContent || ""}
            // onChange={(e) => onUpdateSlide(slide.id, "leftContent", e.target.value)}
            className="w-full h-[90px]  text-base text-foreground/80 bg-transparent border-2 border-dashed border-border rounded-lg hover:border-primary/50 focus:border-primary outline-none transition-colors resize-none"
            placeholder="Click to add left item"
          />
        </div>

        <div className="space-y-2 ">
          <label className="text-xs font-semibold text-muted-foreground uppercase tracking-wide">Right Item</label>
          <textarea
            // value={slide.rightContent || ""}
            // onChange={(e) => onUpdateSlide(slide.id, "rightContent", e.target.value)}
            className="w-full h-[90px] text-base text-foreground/80 bg-transparent border-2 border-dashed border-border rounded-lg hover:border-primary/50 focus:border-primary outline-none transition-colors  resize-none text-[6px]"
            placeholder="Click to add right item"
          />
        </div>
      </div>
      </button>
    </>
  )
}
