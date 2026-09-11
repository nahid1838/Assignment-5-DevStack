import { GoStarFill } from "react-icons/go";
import type { TechonlogiesType } from "../../type/Type"

export interface TechnologiCardProps {
    techonlogi: TechonlogiesType;
}

export default function TechnologiCard({ techonlogi }: TechnologiCardProps) {
    console.log(techonlogi)
    
    return (
        <>
        
         <div>
            <div>
                <img src={techonlogi.icon} alt="" className="h-10 w-10" />
                <p>{techonlogi.badge}</p>
            </div>

            <h3>{techonlogi.name}</h3>
            <p>{techonlogi.description}</p>

            <div>
                <p>{techonlogi.category}</p>
                <p>{techonlogi.difficulty}</p>
                <span> <GoStarFill /> {techonlogi.rating}</span>
            </div>
         </div>
        
        </>
    )
}