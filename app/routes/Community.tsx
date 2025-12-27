import { Outlet } from "react-router"
import ComNav from "~/components/ComNav"

const Community = () => {
  return (
    <div className="h-full w-full flex flex-col text-white">
      <ComNav />
      <Outlet />
    </div>
  )
}

export default Community