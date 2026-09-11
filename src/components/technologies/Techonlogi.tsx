import type { TechonlogiesType } from "../type/Type"
import TechnologiCard from "./card/TechnologiCard";

export interface TechonlogiProps {
    techonlogi: TechonlogiesType;
}

export default function Techonlogi({ techonlogi }: TechonlogiProps) {

    
    return (
        <>
        
        <div>

            <TechnologiCard techonlogi={techonlogi}></TechnologiCard>

        </div>
        
        </>
    )
}