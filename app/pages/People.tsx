import Friends from "~/components/Friends"
import Inbox from "~/components/Inbox"

const People = () => {
  return (
    <div className="w-full h-full grid grid-cols-3">
      <div className="col-span-2">
        <Friends />
      </div>
      <div className="bg-black-300">
        <Inbox />
      </div>
    </div>
  )
}

export default People