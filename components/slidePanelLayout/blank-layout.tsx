
import { SlideContent } from "../presentation-slide"
import { SlideLayout } from "../presentation-slide"
import usePresentationStore from "../store/presentationStore"


export default function BlankLayout({slide, handleContextMenu}: {slide: SlideContent, handleContextMenu: (e: React.MouseEvent, slideId: number, )=>void}) {
  const currentSlideId = usePresentationStore(state=>state.currentSlideId)
   const setCurrentSlide1 = usePresentationStore(state =>state.setCurrentSlide1)
  const setCurrentSlideId = usePresentationStore(state =>state.setCurrentSlideId)
  return (
    <button 
     className={`relative rounded border-2 transition-all min-h-[100px] p-2 flex flex-col w-full
      ${
            currentSlideId === slide.id ? "border-green-300 bg-black" : "border-border bg-black hover:bg-card/80"
          }
          `
        }
        onClick={()=>{
          setCurrentSlide1(slide.id)
          setCurrentSlideId(slide.id)
        }}
    onContextMenu={(e)=>handleContextMenu(e, slide.id)}
    >
      <div className="text-center text-muted-foreground">
        <p className="text-lg">Blank Slide</p>
        <p className="text-sm">Add your content here</p>
      </div>
    </button>
  )
}
