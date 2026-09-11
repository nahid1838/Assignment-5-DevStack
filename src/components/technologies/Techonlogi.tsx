import type { Dispatch, SetStateAction } from "react";
import type { TechonlogiesType } from "../type/Type"
import TechnologiCard from "./card/TechnologiCard";

export interface TechonlogiProps {
    techonlogi: TechonlogiesType;
    addedTechonlogi: TechonlogiesType[];
    setAddedTechonlogi: Dispatch<SetStateAction<TechonlogiesType[]>>
}

export default function Techonlogi({ techonlogi, addedTechonlogi, setAddedTechonlogi }: TechonlogiProps) {

    
    return (
        <>
        
        <div>

            <TechnologiCard 
            techonlogi={techonlogi}
            addedTechonlogi={addedTechonlogi}
            setAddedTechonlogi={setAddedTechonlogi}
            ></TechnologiCard>

        </div>
        
        </>
    )
}