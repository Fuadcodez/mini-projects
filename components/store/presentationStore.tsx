import {create} from "zustand" 
import { UsePresentatitonType } from "./presentationStoreType"
import { SlideContent } from "./presentationStoreType"
import { SlideLayout } from "./presentationStoreType"
const usePresentationStore = create<UsePresentatitonType>((set)=>({
    slides: [{ 
    id: 1,
    title: "",
    subtitle: "",
    body: "",
    layout: "blank",
    leftContent: "",
    rightContent: "",
    caption: ""
  },],
    setSlides: (slide: SlideContent)=>set((state)=>({
    slides: [...state.slides, slide]
  })),
    currentModal: null,
    location: null,
    setLocation: (loc: {x:number, y: number} | null)=>set(()=>({
    location: loc
  })),
    setCurrentModal: (modal: number| null)=>set(()=>({
    currentModal: modal
  })),
    currentSlide1: { 
    id: 1,
    title: "",
    subtitle: "",
    body: "",
    layout: "blank",
    leftContent: "",
    rightContent: "",
    caption: ""
  },
    addNewSlides: (layout: SlideLayout)=>set((state) => {
    const newSlide: SlideContent ={
    id: [...state.slides].length + 1,
    title: "",
    subtitle: "",
    body: "",
    layout: layout,
    leftContent: "",
    rightContent: "",
    caption: ""
    }
    return{
        currentSlide1: newSlide,
        location: null,
        slides: [...state.slides, newSlide],
    }
  }),
    duplicateSlide : (id: number)=>set((state) => {
    const dubbSlide =[...state.slides].find((slide: SlideContent)=> slide.id=== id) 
      const currentId = state.currentSlideId
    if(dubbSlide){
      const insertIndex = [...state.slides].findIndex((s) => s.id === currentId) + 1
        const newSlide = {  
        id: [...state.slides].length + 1,  
        title: dubbSlide.title,
        subtitle: dubbSlide.subtitle,
        body: dubbSlide.body,
        layout: dubbSlide.layout,
        leftContent: dubbSlide.leftContent,
        rightContent: dubbSlide.rightContent,
        caption: dubbSlide.caption,
  }
  return {
    slides: [...state.slides.slice(0, insertIndex), newSlide, ...state.slides.slice(insertIndex)]
  }
    }else{
        return state
    }
  }),
    deleteSlide : (id: number)=> set((state)=>{
        const confirmed = confirm("Are you sure you want to delete slide")
        if(confirmed){
            const newSlides = [...state.slides].filter((slide)=>slide.id !== id)
            return{
                slides: newSlides
            }
        }else{
            alert("Failed to delete Slide")
            return state

        }
    }),
    updateSlide : (id: number, field: keyof SlideContent, value: string) => set((state)=>{
      console.log(state.slides)
        return{
            slides: [...state.slides].map((slide)=> slide.id===id ? {...slide, [field]: value} :slide ),
            currentSlide1: {...state.currentSlide1, [field]: value}
        }
    }),
    currentSlideId : 1,
    setCurrentSlideId: (id: number)=>set(()=>({
        currentSlideId: id
    })),
    setCurrentSlide1 : (id: number)=> set((state)=>({
        currentSlide1: [...state.slides].find((slide)=> slide.id=== id) || state.currentSlide1
    })),
    onAddNewSlide: (id: number)=>set((state)=>{
        const layoutSlide = [...state.slides].find((slide)=> slide.id=== id)
        const currentId = state.currentSlideId
        if(layoutSlide){
          const insertIndex = [...state.slides].findIndex((s) => s.id === currentId) + 1
          const newSlide: SlideContent ={
      id: [...state.slides].length + 1,
      title: "",
      subtitle: "",
      body: "",
      layout: layoutSlide.layout,
      leftContent: "",
      rightContent: "",
      caption: ""
      }
      return{
        slides: [...state.slides.slice(0, insertIndex), newSlide, ...state.slides.slice(insertIndex)]
      }
        }else{
          return state
        }
    })
}))
export default usePresentationStore