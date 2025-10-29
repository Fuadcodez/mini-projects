"use client"


import BlankLayout from "./layout2/blank-layout"
import ComparisonLayout from "./layout2/comparison-layout"
import ContentCaptionLayout from "./layout2/content-caption-layout"
import SectionHeaderLayout from "./layout2/section-header-layout"
import TitleContentLayout from "./layout2/title-content-layout"
import TitleOnlyLayout from "./layout2/title-only-layout"
import TitleSlideLayout from "./layout2/title-slide-layout"
import TwoContentLayout from "./layout2/two-content-layout"
import usePresentationStore from "./store/presentationStore"


export default function MainSlideEditor() {
const slide = usePresentationStore(state=> state.currentSlide1)
  const renderLayout = () => {
    switch (slide.layout) {
      case "title-slide":
        return <TitleSlideLayout />
      case "title-content":
        return <TitleContentLayout  />
      case "section-header":
        return <SectionHeaderLayout  />
      case "two-content":
        return <TwoContentLayout  />
      case "comparison":
        return <ComparisonLayout  />
      case "title-only":
        return <TitleOnlyLayout />
      case "blank":
        return <BlankLayout  />
      case "content-caption":
        return <ContentCaptionLayout  />
      default:
        return <TitleContentLayout />
    }
  }
  const currentSlideId = usePresentationStore(state=>state.currentSlideId)
  const slides = usePresentationStore(state=>state.slides)
  const totalSlides = slides.length
  const currentSlideNumber = slides.findIndex(s=>s.id === currentSlideId) + 1
  // console.log(currentSlideNumber)
  return (
        <div className="flex-1 flex flex-col  p-12">
      {/* Slide counter */}
      {/* <div className="text-sm text-muted-foreground mb-8">
        Slide {currentSlideNumber} of {totalSlides}
      </div> */}

      {/* Main slide editing area */}
      <div className="flex-1 flex flex-col gap-8 max-w-4xl mx-auto w-full">
      {/* render slide */}
      {renderLayout()}
      </div>

      {/* Footer info */}
      <div className="mt-8 text-xs text-muted-foreground">Press Tab to move between fields</div>
    </div>
  )
}
