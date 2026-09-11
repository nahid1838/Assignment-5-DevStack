import { GoStarFill } from "react-icons/go";
import type { TechonlogiesType } from "../../type/Type"

export interface TechnologiCardProps {
    techonlogi: TechonlogiesType;
}

export default function TechnologiCard({ techonlogi }: TechnologiCardProps) {
    console.log(techonlogi)
    
    return (
        <>
        
         <div className="flex flex-col h-full gap-5 border border-gray-300 p-5 rounded-xl">
            <div className="flex justify-between items-center">
                <img src={techonlogi.icon} alt="" className="h-10 w-10" />
                <p className="text-[#0EA5E9] font-semibold border border-gray-200 bg-[#ECFDF5] rounded-2xl px-2.5 py-1">{techonlogi.badge}</p>
            </div>

            <h3 className="text-2xl font-bold">{techonlogi.name}</h3>
            <p className="text-[#64748B]">{techonlogi.description}</p>

            <div className="flex items-center justify-between">
                <p className="bg-[#F1F5F9] px-2 py-1 rounded-md font-semibold">{techonlogi.category}</p>
                <p>{techonlogi.difficulty}</p>
                <span className="flex items-center gap-1 font-semibold"> <GoStarFill className="text-[#FBBF24]" /> {techonlogi.rating}</span>
            </div>

            <button className="bg-[#0A0F1D] text-white py-2 rounded-lg cursor-pointer">Add To Stack</button>
         </div>
        
        </>
    )
}