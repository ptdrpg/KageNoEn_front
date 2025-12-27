import { useLocation, useNavigate } from "react-router"
import { Button } from "./ui/button"


const ComNav = () => {
  const locate = useLocation();
  const navigate = useNavigate();
  return (
    <div className="flex items-center justify-start gap-[20px] pl-[20px] pt-[10px] pb-[10px] border-b border-gray-400 border-t">
      <p className={`font-bold text-[12px] cursor-pointer p-[10px] ${locate.pathname.split("/")[2] === "people" ? "border-b border-white" : ""}`} onClick={() => navigate("/community/people")} >People</p>
      <p className={`font-bold text-[12px] cursor-pointer p-[10px] ${locate.pathname.split("/")[2] === "guild" ? "border-b border-white" : ""}`} onClick={() => navigate("/community/guild")}>Guild</p>
      <Button className="bg-white text-black cursor-pointer text-[12px] hover:text-white">Add Friend</Button>
    </div>
  )
}

export default ComNav