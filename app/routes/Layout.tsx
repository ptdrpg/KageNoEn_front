import { Outlet } from "react-router"
import SideBar from "~/components/SideBar"

const Layout = () => {
  return (
    <div className="grid grid-cols-12 bg-black-100">
      <div className="col-span-3 h-screen">
        <SideBar />
      </div>
      <div className="col-span-9">
        <Outlet />
      </div>
    </div>
  )
}

export default Layout