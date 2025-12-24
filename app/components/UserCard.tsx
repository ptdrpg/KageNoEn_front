import provisoir from "~/assets/domoina.JPG"
import type { SecureUserRes } from "~/types/user-auth.type";
import { getUserDataToLocalStorage } from "~/utils/local-storage.utils"


const UserCard = () => {
  const userData: SecureUserRes | null = getUserDataToLocalStorage();

  return (
    <div className="w-full flex items-center justify-start gap-[10px] p-[10px] bg-black-100 rounded-[5px] cursor-pointer">
      {/* <img src={provisoir} alt="provisoir" className="w-[30px] h-[30px] rounded-[10px] object-cover" /> */}
      <div className="w-[30px] h-[30px] rounded-[10px] bg-emerald-400 flex items-center justify-center">
        <p className="text-white font-black text-[16px]">{ userData?.username?.charAt(0).toUpperCase() }</p>
      </div>
      <div className="flex flex-col">
        <p className="text-white font-black text-[12px]">{userData?.username}</p>
        <p className="text-gray-400 text-[8px]">{userData?.email}</p>
      </div>
    </div>
  )
}

export default UserCard