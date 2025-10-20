"use client"

import { useState } from "react"
import SlidePanel from "./slide-panel"
import MainSlideEditor from "./main-slide-editor"

export interface SlideContent {
  id: number
  title: string
  subtitle: string
  body: string
}


const allSlides: SlideContent[] = [{ 
    id: 1,
    title: "",
    subtitle: "",
    body: "",
  },]
export default function PresentationSlide() {
  const [slides, setSlides] = useState<SlideContent[]>(allSlides)
  const [currentModal, setCurrentModal] = useState<number | null>(null)
  const [currentSlideId, setCurrentSlideId] = useState(1)
  // const [addSlideModa]

  const currentSlide = slides.find((s) => s.id === currentSlideId) || slides[0]

  const updateSlide = (id: number, field: keyof SlideContent, value: string) => {
    setSlides((prevSlides) => prevSlides.map((slide) => (slide.id === id ? { ...slide, [field]: value } : slide)))
  }
  const addSlides = () =>{
    const newSlide = { id: slides.length + 1,
    title: "",
    subtitle: "",
    body: "",}
    setSlides((prevSlides) => [...prevSlides, newSlide])
  }
  const duplicateSlide = (id: number)=>{
    const dubbSlide = slides.find((slide)=>slide.id === id)
    if(dubbSlide){
      const newSlide = {  id: slides.length + 1,  title: dubbSlide.title,
    subtitle: dubbSlide.subtitle,
    body: dubbSlide.body, }
      setSlides((prevSlides) => [...prevSlides, newSlide])
    }
  }
  const deleteSlide = (id: number)=>{

      const confirmed = confirm("Are you sure you want to delete slide")
      if(confirmed){
        const newSlides = slides.filter((slide) => slide.id !== id)
        setSlides(newSlides)
        return;
      }else{
        alert("Failed to delete slide")

      }
    } 
  
  return (
    <div className=" h-full bg-white py-10 min-h-screen">
        <button className="cursor-pointer bg-green-500 text-white px-4 py-2 rounded" onClick={addSlides}>Click to add new Slide +</button>
    <div className="flex bg-gray-700 h-[600px] max-w-[1100px] mx-auto">
      <SlidePanel slides={slides} currentSlideId={currentSlideId} onSelectSlide={setCurrentSlideId} duplicateSlide={duplicateSlide} currentModal={currentModal} setCurrentModal={setCurrentModal} addSlides={addSlides} deleteSlide={deleteSlide} />

      <MainSlideEditor
        slide={currentSlide}
        onUpdateSlide={updateSlide}
        totalSlides={slides.length}
        currentSlideNumber={slides.findIndex((s) => s.id === currentSlideId) + 1}
      />
      
    </div>
    </div>
  )
}
