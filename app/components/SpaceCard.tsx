import { EllipsisVertical } from "lucide-react";

type Props = {
  id: string;
  title: string;
}

const SpaceCard = ({title}: Props) => {
  return (
    <div className="flex items-center justify-between p-[10px] rounded-[5px] bg-amber-400 w-full">
      <div className="flex items-center justify-center gap-[10px] cursor-pointer">
        <div className="py-[5px] px-[10px] rounded-[5px] flex items-center justify-center bg-black">
          <p className="font-black text-[12px] text-white">{title.split("")[0].toUpperCase()}</p>
        </div>
        <p className="font-black text-white text-[16px]">{title}</p>
      </div>
      <div className="cursor-pointer">
        <EllipsisVertical size={16} color="white" />
      </div>
    </div>
  )
}

export default SpaceCard