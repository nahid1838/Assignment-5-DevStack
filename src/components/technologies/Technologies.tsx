import { use } from "react";
import type { TechonlogiesType } from "../type/Type"
import Techonlogi from "./Techonlogi";
import YourStack from "./YourStack";

export interface TechnologiesProps {
    technologiesDataPromise: Promise<TechonlogiesType[]>;
}

export default function Technologies({ technologiesDataPromise }: TechnologiesProps) {

    const techonlogies = use(technologiesDataPromise);

    console.log(techonlogies)
    
    return (
        <>
        <div className="container mx-auto grid grid-cols-12 gap-5">
            <div className=" grid col-span-9">
                <div className="grid grid-cols-3 gap-5">
                    {
                    techonlogies.map(techonlogi => <Techonlogi
                        key={techonlogi.id} 
                        techonlogi={techonlogi}
                        ></Techonlogi>)
                    }
                </div>
            </div>

            <div className="col-span-3">
                <YourStack></YourStack>
            </div>
        </div>
        
        </>
    )
}