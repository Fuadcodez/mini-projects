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

export interface UsePresentatitonType {
slides: SlideContent[]
setSlides: (slide: SlideContent)=> void;
addNewSlides: (layout: SlideLayout)=> void;
currentModal: number | null;
setCurrentModal: (num: number | null)=>void
currentSlideId: number
setCurrentSlideId: (id: number)=>void
location: {x: number, y: number} | null
setLocation: (loc: {x:number, y: number} | null)=> void
currentSlide1: SlideContents
setCurrentSlide1 : (id: number)=>void
updateSlide: (id:number , field: keyof SlideContent, value:string)=>void
duplicateSlide: (id: number)=>void
deleteSlide: (id: number)=>void
onAddNewSlide: (id:number)=>void
}