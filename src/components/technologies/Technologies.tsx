import { use } from "react";
import type { TechonlogiesType } from "../type/Type"
import Techonlogi from "./Techonlogi";

export interface TechnologiesProps {
    technologiesDataPromise: Promise<TechonlogiesType[]>;
}

export default function Technologies({ technologiesDataPromise }: TechnologiesProps) {

    const techonlogies = use(technologiesDataPromise);

    console.log(techonlogies)
    
    return (
        <>
        
            <div className="container mx-auto grid grid-cols-3 gap-5">
                {
                    techonlogies.map(techonlogi => <Techonlogi
                        key={techonlogi.id} 
                        techonlogi={techonlogi}
                        ></Techonlogi>)
                }
            </div>
        
        </>
    )
}