"use client"


import { SlideContents } from "../presentation-slide"
import { SlideLayout } from "../presentation-slide"
import usePresentationStore from "../store/presentationStore"
interface LayoutProps {
  slide: SlideContents
  onUpdateSlide: (id: number, field: keyof SlideContents, value: string) => void
}

// export default function TitleSlideLayout({ slide, onUpdateSlide }: LayoutProps) {
export default function TitleSlideLayout() {
  const addNewSlides = usePresentationStore(state=>state.addNewSlides)
  return (
    <button className="flex flex-col items-center justify-center h-full gap-8 border-2"
    onClick={() => addNewSlides("title-slide")}
    >
      <div className="space-y-2 w-full">
        <input
          type="text"
          // value={slide.title}
          // onChange={(e) => onUpdateSlide(slide.id, "title", e.target.value)}
          className="w-full text-xs font-bold text-foreground bg-transparent border-b-2 border-transparent hover:border-border focus:border-primary outline-none transition-colors px-2 py-2 text-center"
          placeholder="Click to add title"
        />
      </div>

      <div className="space-y-2 w-full">
        <input
          type="text"
          // value={slide.subtitle}
          // onChange={(e) => onUpdateSlide(slide.id, "subtitle", e.target.value)}
          className="w-full text-xs text-foreground/70 bg-transparent border-b-2 border-transparent hover:border-border focus:border-primary outline-none transition-colors px-2 py-2 text-center"
          placeholder="Click to add subtitle"
        />
      </div>
    </button>
  )
}
