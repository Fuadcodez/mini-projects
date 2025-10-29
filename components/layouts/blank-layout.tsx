// import type { SlideContent } from "../../../../../presetationnextproto/components/presentation-slide"
import { SlideContents } from "../presentation-slide"
import { SlideLayout } from "../presentation-slide"
import usePresentationStore from "../store/presentationStore"
interface LayoutProps {
  slide: SlideContents
  onUpdateSlide: (id: number, field: keyof SlideContents, value: string) => void
}

// export default function BlankLayout({ slide, onUpdateSlide }: LayoutProps) {
export default function BlankLayout() {
  const addNewSlides = usePresentationStore(state=>state.addNewSlides)

  return (
    <button className="flex-1 flex items-center justify-center border-2 w-full h-full"
    onClick={()=>addNewSlides("blank")}
    >
      <div className="text-center text-muted-foreground">
        <p className="text-lg">Blank Slide</p>
        <p className="text-sm">Add your content here</p>
      </div>
    </button>
  )
}
