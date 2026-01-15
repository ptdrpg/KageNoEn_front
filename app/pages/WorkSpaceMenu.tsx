import SpaceCard from "~/components/SpaceCard"
import { StaticSpace } from "~/static/space"


const WorkSpaceMenu = () => {
  return (
    <div className="w-full h-full flex flex-col items-center justify-start gap-[10px]">
      {
        StaticSpace.map((item, idx)=> (
          <SpaceCard id={item.id} title={item.title} key={idx} />
        ))
      }
    </div>
  )
}

export default WorkSpaceMenu