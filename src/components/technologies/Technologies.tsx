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
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-12 gap-5 pt-5 pb-15">
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