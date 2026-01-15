import CreationSide from "./CreationSide"
import WorkSpaceMenu from "./WorkSpaceMenu"


const Menu = () => {
  return (
    <div className="w-full h-full grid grid-cols-3">
      <div className="col-span-2 p-[10px]">
        <WorkSpaceMenu />
      </div>
      <div className="bg-black-300 p-[10px]">
       <CreationSide />
      </div>
    </div>
  )
}

export default Menu