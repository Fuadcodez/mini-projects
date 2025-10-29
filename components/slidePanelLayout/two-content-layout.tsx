"use client"

// import type { SlideContent } from "../../../../../presetationnextproto/components/presentation-slide"
import { SlideContents } from "../presentation-slide"
interface LayoutProps {
  slide: SlideContents
  onUpdateSlide: (id: number, field: keyof SlideContents, value: string) => void
}

export default function TwoContentLayout({ slide, onUpdateSlide }: LayoutProps) {
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

      <div className="grid grid-cols-2 gap-6 flex-1">
        <div className="space-y-2">
          <label className="text-xs font-semibold text-muted-foreground uppercase tracking-wide">Left Content</label>
          <textarea
            value={slide.leftContent || ""}
            onChange={(e) => onUpdateSlide(slide.id, "leftContent", e.target.value)}
            className="w-full h-full text-base text-foreground/80 bg-transparent border-2 border-dashed border-border rounded-lg hover:border-primary/50 focus:border-primary outline-none transition-colors p-4 resize-none"
            placeholder="Click to add left content"
          />
        </div>

        <div className="space-y-2">
          <label className="text-xs font-semibold text-muted-foreground uppercase tracking-wide">Right Content</label>
          <textarea
            value={slide.rightContent || ""}
            onChange={(e) => onUpdateSlide(slide.id, "rightContent", e.target.value)}
            className="w-full h-full text-base text-foreground/80 bg-transparent border-2 border-dashed border-border rounded-lg hover:border-primary/50 focus:border-primary outline-none transition-colors p-4 resize-none"
            placeholder="Click to add right content"
          />
        </div>
      </div>
    </>
  )
}
