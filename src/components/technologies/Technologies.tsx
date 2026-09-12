import { use, useState } from "react";
import type { TechonlogiesType } from "../type/Type"
import Techonlogi from "./Techonlogi";
import YourStack from "./YourStack";

export interface TechnologiesProps {
    technologiesDataPromise: Promise<TechonlogiesType[]>;
}

export default function Technologies({ technologiesDataPromise }: TechnologiesProps) {

    const techonlogies = use(technologiesDataPromise);
    const [addedTechonlogi, setAddedTechonlogi] = useState<TechonlogiesType[]>([])

    
    return (
        <>
        <div className="container mx-auto text-center md:text-left">
            <h3 className="text-3xl md:text-4xl font-bold">Explore the <span className="bg-linear-to-l from-[#EC4899] to-[#8B5CF6] bg-clip-text text-transparent">Technologies</span></h3>
            <p className="pt-3 pb-5">Pick one technology per category to build your ideal stack.</p>
        </div>

        <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-5 pt-5 pb-15">
            <div className=" grid col-span-12 md:col-span-9">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                    {
                    techonlogies.map(techonlogi => <Techonlogi
                        key={techonlogi.id} 
                        techonlogi={techonlogi}
                        addedTechonlogi={addedTechonlogi}
                        setAddedTechonlogi={setAddedTechonlogi}
                        ></Techonlogi>)
                    }
                </div>
            </div>

            <div className="col-span-12 md:col-span-3">
                <YourStack
                addedTechonlogi={addedTechonlogi}
                setAddedTechonlogi={setAddedTechonlogi}
                ></YourStack>
            </div>
        </div>
        
        </>
    )
}