
import { SlideContents } from "../presentation-slide"

export default function BlankLayout() {

  return (
    <div className="flex-1 flex items-center justify-center">
      <div className="text-center text-muted-foreground">
        <p className="text-lg">Blank Slide</p>
        <p className="text-sm">Add your content here</p>
      </div>
    </div>
  )
}
