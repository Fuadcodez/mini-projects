"use client"

import { useRef, useState } from "react"
import { SlideContent } from "./store/presentationStoreType"
import { SlideLayout } from "./store/presentationStoreType"
import SlideContextMenu from "./slide-context-menu"
import BlankLayout from "./slidePanelLayout/blank-layout"
import ComparisonLayout from "./slidePanelLayout/comparison-layout"
import SectionHeaderLayout from "./slidePanelLayout/section-header-layout"
import TitleContentLayout from "./slidePanelLayout/title-content-layout"
import TitleOnlyLayout from "./slidePanelLayout/title-only-layout"
import TitleSlideLayout from "./slidePanelLayout/title-slide-layout"
import usePresentationStore from "./store/presentationStore"



export default function SlidePanel() {
  const [contextMenu, setContextMenu] = useState<{ slideId: number; x: number; y: number } | null>(null)
  const contextMenuRef = useRef<HTMLDivElement>(null)
  const slides = usePresentationStore(state=>state.slides)
  const currentSlideId = usePresentationStore(state=>state.currentSlideId)
  const handleContextMenu = (e: React.MouseEvent, slideId: number) => {
    e.preventDefault()
    setContextMenu({
      slideId,
      x: e.clientX,
      y: e.clientY,
    })
  }
  const duplicateSlide =usePresentationStore(state=>state.duplicateSlide)
  const onAddNewSlide= usePresentationStore(state=>state.onAddNewSlide)
  const onDeleteSlide = usePresentationStore(state => state.deleteSlide)
const currentSlideNumber = slides.findIndex(s=>s.id === currentSlideId) + 1

    const renderLayout = (layout: SlideLayout, slide: SlideContent) => {
      switch (layout) {
        case "title-slide":
          return  <TitleSlideLayout slide={slide} handleContextMenu={handleContextMenu}/>
        case "title-content":
          return   <TitleContentLayout slide={slide} handleContextMenu={handleContextMenu}/>
        case "section-header":
          return   <SectionHeaderLayout slide={slide} handleContextMenu={handleContextMenu} />
        // case "two-content":
        //   return <TwoContentLayout slide={slide} onUpdateSlide={onUpdateSlide} />
        case "comparison":
          return  <ComparisonLayout slide={slide} handleContextMenu={handleContextMenu}  />
        case "title-only":
          return  <TitleOnlyLayout slide={slide} handleContextMenu={handleContextMenu} />
        case "blank":
          return  <BlankLayout  slide={slide} handleContextMenu={handleContextMenu} />
        // case "content-caption":
        //   return <ContentCaptionLayout slide={slide} onUpdateSlide={onUpdateSlide} />
        default:
          return  <TitleContentLayout slide={slide} handleContextMenu={handleContextMenu}/>
      }
    }
  return (
    <div className="w-[200px] h-full overflow-y-scroll flex flex-col gap-2 p-3 px-5">
      {slides.map((slide, index) => (
        <div key={index} className="relative">
        {renderLayout(slide.layout, slide)}
        <div className="absolute top-1 -left-4 text-sm text-muted-foreground">{index + 1}</div>
        </div>
      ))}
        {contextMenu && (
        <div ref={contextMenuRef}>
          <SlideContextMenu
            x={contextMenu.x}
            y={contextMenu.y}
            slideId={contextMenu.slideId}
            onNewSlide={() => {
              onAddNewSlide(contextMenu.slideId)
              setContextMenu(null)
            }}
            onDuplicateSlide={() => { duplicateSlide(contextMenu.slideId)
            setContextMenu(null)}}
            onDeleteSlide={() => {
              onDeleteSlide(contextMenu.slideId)
              setContextMenu(null)
            }}
            onClose={() => setContextMenu(null)}
          />
        </div>
      )}
    </div>
  )
}
