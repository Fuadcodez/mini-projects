"use client"

import type { SlideContent } from "./presentation-slide"


interface MainSlideEditorProps {
  slide: SlideContent
  onUpdateSlide: (id: number, field: keyof SlideContent, value: string) => void
  totalSlides: number
  currentSlideNumber: number
}

export default function MainSlideEditor({
  slide,
  onUpdateSlide,
  totalSlides,
  currentSlideNumber,
}: MainSlideEditorProps) {
  return (
    // <div className="flex-1 flex flex-col bg-gradient-to-br from-background via-background to-primary/5 p-12">
        <div className="flex-1 flex flex-col  p-12">
      {/* Slide counter */}
      <div className="text-sm text-muted-foreground mb-8">
        Slide {currentSlideNumber} of {totalSlides}
      </div>

      {/* Main slide editing area */}
      <div className="flex-1 flex flex-col gap-8 max-w-4xl mx-auto w-full">
        {/* Title */}
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

        {/* Body content */}
        <div className="space-y-2 flex-1">
          <label className="text-xs font-semibold text-muted-foreground uppercase tracking-wide">Content</label>
          <textarea
            value={slide.body}
            onChange={(e) => onUpdateSlide(slide.id, "body", e.target.value)}
            className="w-full h-full text-base text-foreground/80 bg-transparent border-2 border-dashed border-border rounded-lg hover:border-primary/50 focus:border-primary outline-none transition-colors p-4 resize-none"
            placeholder="Click to add content"
          />
        </div>
      </div>

      {/* Footer info */}
      <div className="mt-8 text-xs text-muted-foreground">Press Tab to move between fields</div>
    </div>
  )
}
