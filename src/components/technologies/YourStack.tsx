import type { Dispatch, SetStateAction } from "react";
import type { TechonlogiesType } from "../type/Type";
import { RxCross2 } from "react-icons/rx";


export interface YourStackProps {
    addedTechonlogi: TechonlogiesType[];
    setAddedTechonlogi: Dispatch<SetStateAction<TechonlogiesType[]>>
}

export default function YourStack({addedTechonlogi, setAddedTechonlogi}: YourStackProps) {

    

    return (
        <>
        
        <div className="flex flex-col gap-5 border border-gray-300 p-5 rounded-xl">
            <div>
                <h3 className="text-2xl font-bold">Your Stack</h3>
                <p className="text-[#94A3B8]">{addedTechonlogi.length} Technology Selected</p>
            </div>
            {
                addedTechonlogi.map(addedTec => {
                    return (
                        <div>
                            <div className="container mx-auto items-center flex            justify-between border border-gray-300 px-4 py-2 rounded-lg">
                                <div className="flex gap-4">
                                    <img src={addedTec.icon} alt="" className="h-10 w-10" />
                                    <div>
                                        <p className="text-lg font-bold">{addedTec.name}</p>
                                        <p className="text-sm">{addedTec.category}</p>
                                    </div>
                                </div>
                                <span className="text-lg text-red-500 cursor-pointer"><RxCross2 /></span>
                            </div>
                        </div>
                    )
                })
            }

            <button className="border border-pink-300 text-red-500 py-1.5 rounded-md cursor-pointer mt-8 font-semibold hover:bg-pink-100">Remove All</button>
        </div>
        
        </>
    )
}