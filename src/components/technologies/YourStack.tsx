import type { Dispatch, SetStateAction } from "react";
import type { TechonlogiesType } from "../type/Type";
import YourStackCard from "./card/YourStackCard";
import { Bounce, toast } from "react-toastify";


export interface YourStackProps {
    addedTechonlogi: TechonlogiesType[];
    setAddedTechonlogi: Dispatch<SetStateAction<TechonlogiesType[]>>
}

export default function YourStack({
    addedTechonlogi, 
    setAddedTechonlogi
    }: YourStackProps) {

    const handleRemoveAll = () => {
        setAddedTechonlogi([]);
        toast.success("All Technlogies are deleted from Your Stack.", {
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
    }


    return (
        <>
        
        <div className="flex flex-col gap-5 border border-gray-300 p-5 rounded-xl">
            <div>
                <h3 className="text-2xl font-bold">Your Stack</h3>
                <p className="text-[#94A3B8]">{addedTechonlogi.length} Technology Selected</p>
            </div>
            {
                addedTechonlogi.map(techonlogi => <YourStackCard 
                    techonlogi={techonlogi}
                    addedTechonlogi={addedTechonlogi}
                    setAddedTechonlogi={setAddedTechonlogi}
                    ></YourStackCard>)
            }

            <button onClick={handleRemoveAll} className="border border-pink-300 text-red-500 py-1.5 rounded-md cursor-pointer mt-8 font-semibold hover:bg-pink-100">Remove All</button>
        </div>
        
        </>
    )
}