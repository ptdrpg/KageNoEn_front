import { StaticFriendsList } from "~/static/friends"
import { Input } from "./ui/input"
import FriendsListCard from "./FriendsListCard"

const Friends = () => {
  return (
    <div className="p-[20px]">
      <div className="grid gap-3">
        <Input placeholder="Search friends" className="w-full"/>
      </div>
      <div className="pt-[20px] pb-[5px] w-full border-b border-gray-400">
        <p className="text-[12px] text-white">All friends - 1</p>
      </div>
      <div className="flex flex-col gap-[10px] pt-[10px]">
        {
          StaticFriendsList.map((f, i) => <FriendsListCard key={i} id={f.id} username={f.username} isOnline={f.isOnline} status={f.status} />)
        }
      </div>
    </div>
  )
}

export default Friends