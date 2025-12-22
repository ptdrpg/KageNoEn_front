import type { LucideProps } from "lucide-react";

type Props = {
  label: string;
  icon: React.ForwardRefExoticComponent<
    Omit<LucideProps, "ref"> & React.RefAttributes<SVGSVGElement>
  >;
  descri: string;
}

const PartyCard = ({ label, icon: Icon, descri }: Props) => {
  return (
    <div className="w-full bg-black-100 flex items-center justify-start gap-[10px] rounded-[15px] p-[16px]">
      <div className="bg-white rounded-[10px] p-[20px]">
        <Icon size={20} color="black" />
      </div> 
      <div className="flex flex-col gap-[5px]">
        <p className="font-bold text-[16px] text-white">{ label }</p>
        <p className="text-[8px] text-white text-start">{ descri }</p>
      </div>
    </div>
  )
}

export default PartyCard