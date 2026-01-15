import PartyCard from "~/components/PartyCard"
import { CreationStatic } from "~/static/space"

const CreationSide = () => {
  return (
    <div className="w-full h-full p-[10px]">
      <div className="pb-[10px] border-b border-b-gray-400">
        <p className="text-white">Creation</p>
      </div>
      <div className="flex flex-col gap-[10px] py-[10px]">
        {
          CreationStatic.map((i, idx) => (
            <PartyCard icon={i.icon} label={i.label} descri={i.Description} key={idx} />
          ))
        }
      </div>
    </div>
  )
}

export default CreationSide