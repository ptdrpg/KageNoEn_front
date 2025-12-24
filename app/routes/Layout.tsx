import { Outlet } from "react-router"
import NavBar from "~/components/NavBar"
import SideBar from "~/components/SideBar"
import { requireAuth } from "~/utils/localStorageOperation"

export function loader({ request }: { request: Request }) {
  requireAuth(request)
  return null
}

const Layout = () => {
  return (
    <div className="grid grid-cols-12 bg-black-100">
      <div className="col-span-2 h-screen">
        <SideBar />
      </div>
      <div className="col-span-10 flex flex-col h-screen overflow-y-auto no-scrollbar">
        <NavBar />
        <Outlet />
      </div>
    </div>
  )
}

export default Layout