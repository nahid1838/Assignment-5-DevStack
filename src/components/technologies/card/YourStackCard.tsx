import type { Dispatch, SetStateAction } from "react";
import type { TechonlogiesType } from "../../type/Type";
import { RxCross2 } from "react-icons/rx";
import { Bounce, toast } from "react-toastify";

export interface YourStackCardProps {
  techonlogi: TechonlogiesType;
  addedTechonlogi: TechonlogiesType[];
  setAddedTechonlogi: Dispatch<SetStateAction<TechonlogiesType[]>>
}

export default function YourStackCard({ 
    techonlogi,
    addedTechonlogi,
    setAddedTechonlogi  
}: YourStackCardProps) {


    const handleDeleteTechnlogi = (techonlogi: TechonlogiesType) => {
        const filteredAddedTechonlogi = addedTechonlogi.filter(addedTec => addedTec.id !== techonlogi.id);
        setAddedTechonlogi(filteredAddedTechonlogi);

        toast.success(`${techonlogi.name} has been deleted from your stack.`, {
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
      <div>
        <div className="container mx-auto items-center flex justify-between border border-gray-300 px-4 py-2 rounded-lg">
          <div className="flex gap-4">
            <img src={techonlogi.icon} alt="" className="h-10 w-10" />
            <div>
              <p className="text-lg font-bold">{techonlogi.name}</p>
              <p className="text-sm">{techonlogi.category}</p>
            </div>
          </div>
          <span onClick={()=>handleDeleteTechnlogi(techonlogi)} className="text-lg text-red-500 cursor-pointer">
            <RxCross2 />
          </span>
        </div>
      </div>
    </>
  );
}
