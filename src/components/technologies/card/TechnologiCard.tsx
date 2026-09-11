import { GoStarFill } from "react-icons/go";
import type { TechonlogiesType } from "../../type/Type"
import { useState, type Dispatch, type SetStateAction } from "react";
import { Bounce, toast } from "react-toastify";

export interface TechnologiCardProps {
    techonlogi: TechonlogiesType;
    addedTechonlogi: TechonlogiesType[];
    setAddedTechonlogi: Dispatch<SetStateAction<TechonlogiesType[]>>
}

export default function TechnologiCard({ 
    techonlogi,
    addedTechonlogi,
    setAddedTechonlogi
    }: TechnologiCardProps) {
    
    const [isAddedInStack, setIsAddedInStack] = useState(false);

    const handleAddToStack = () => {
        setIsAddedInStack(true);
        toast.success(`${techonlogi.name} has been added to your stack.`, {
            position: "bottom-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: false,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark",
            transition: Bounce,
            });

        setAddedTechonlogi([...addedTechonlogi, techonlogi]);
    }
    
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

            <button onClick={()=> handleAddToStack()} 
            className={`${isAddedInStack === true ? "bg-pink-100 text-red-500 cursor-not-allowed" : "bg-[#0A0F1D] text-white cursor-pointer"} font-semibold py-2 rounded-lg`}>{isAddedInStack === true ? "✓  Add To Stack" : "Add To Stack"}
            </button>
         </div>
        
        </>
    )
}