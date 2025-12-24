import { Power } from "lucide-react";
import { useLocation, useNavigate } from "react-router"

const NavBar = () => {
  const locate = useLocation();
  const navigate = useNavigate();
  return (
    <div className="w-full pt-[10px] pb-[10px] pl-[20px] pr-[20px] flex items-center justify-between">
      <p className="font-black text-[16px] text-white">{ locate.pathname === "/" ? "Menu" : locate.pathname === "/settings" ? "Settings" : "Community" }</p>
      <div className="flex items-center gap-[10px] cursor-pointer" onClick={()=>navigate("/login")}>
        <p className="text-white text-[12px]">Logout</p>
        <Power size={16} color="white" />
      </div>
    </div>
  )
}

export default NavBar