"use client"

import { useRef, useState, useEffect } from "react"
import SlidePanel from "./slide-panel"
import MainSlideEditor from "./main-slide-editor"
import BlankLayout from "./layouts/blank-layout"
import ComparisonLayout from "./layouts/comparison-layout"
import SectionHeaderLayout from "./layouts/section-header-layout"
import TitleContentLayout from "./layouts/title-content-layout"
import TitleOnlyLayout from "./layouts/title-only-layout"
import TitleSlideLayout from "./layouts/title-slide-layout"
import usePresentationStore from "./store/presentationStore"
export interface SlideContent {
  id: number
  title: string
  subtitle: string
  body: string
   layout: SlideLayout
  leftContent?: string
  rightContent?: string
  caption?: string
}
export type SlideLayout =
 |"title-slide"
  | "title-content"
  | "section-header"
  | "two-content"
  | "comparison"
  | "title-only"
  | "blank"
  | "content-caption"
  | "picture-caption"

export interface SlideContents {
  id: number
  title: string
  subtitle: string
  body: string
  layout: SlideLayout
  leftContent?: string
  rightContent?: string
  caption?: string
}

export default function PresentationSlide() {
  const modalSlideRef = useRef<HTMLDivElement>(null)
  const location = usePresentationStore(state => state.location)
  const setLocation = usePresentationStore(state=>state.setLocation)

     useEffect(() => {
        // Adjust position if menu goes off-screen
        if (modalSlideRef.current) {
          const rect = modalSlideRef.current.getBoundingClientRect()
          let adjustedX = location?.x
          let adjustedY = location?.y
    
          if (rect.right > window.innerWidth) {
            adjustedX = window.innerWidth - rect.width - 10
          }
          if (rect.bottom > window.innerHeight) {
            adjustedY = window.innerHeight - rect.height - 10
          }
    
          modalSlideRef.current.style.left = `${adjustedX}px`
          modalSlideRef.current.style.top = `${adjustedY}px`
        }
      }, [location?.x, location?.y])
  const setloc = (e: React.MouseEvent)=>{
    setLocation({ x: e.clientX, y: e.clientY })
    // console.log(location)
  }

 
  return (
    <div className=" h-full bg-white py-10 min-h-screen">
        <button className="cursor-pointer bg-green-500 text-white px-4 py-2 rounded" onClick={(e)=> 
          // addSlides()
          setloc(e)
          }>Click to add new Slide +</button>
    <div className="flex bg-gray-700 h-[600px] max-w-[1100px] mx-auto">
      <SlidePanel />

      <MainSlideEditor
      />
      
    </div>
    {location && 
    (
      <div ref={modalSlideRef} style={{ left: `${location?.x}px`, top: `${location?.y}px` }} className="fixed border border-border rounded-lg z-50 py-2 px-2 w-[800px] h-[600px] bg-black ">
      <div className="grid grid-cols-2 grid-row-3 gap-4 min-h-full">
        {/* Blank layout */}
        <BlankLayout />
        {/* comparison layout */}
        <ComparisonLayout />
    
        {/* content-caption Layout */}
        <SectionHeaderLayout  />
        <TitleContentLayout  />
        <TitleOnlyLayout />
        <TitleSlideLayout  />
      </div>
      
      </div>
    )}
    </div>
  )
}
