import { ChevronRight } from "lucide-react";


export default function SingleItem({productsFind}) {

  return (
    <div className="flex gap-2 flex-row items-center px-0 text-md text-gray-700 " >
    Home <ChevronRight /> {productsFind.category} <ChevronRight/> {productsFind.name}
    </div>
  )
}


