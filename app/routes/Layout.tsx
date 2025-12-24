import { Outlet, redirect } from "react-router"
import NavBar from "~/components/NavBar"
import SideBar from "~/components/SideBar"

export function loader({ request }: { request: Request }) {
  const cookie = request.headers.get("cookie")
  if (!cookie?.includes("access_token")) {
    throw redirect("/login")
  }
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