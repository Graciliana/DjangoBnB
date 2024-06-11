import { LuMenu } from "react-icons/lu";
import { FaCircleUser } from "react-icons/fa6";
export const UserNav = () => {
  return (
    <div className="p-2 relative inline-block rounded-full">
      <button className="flex items-center">
        <LuMenu className=" text-airbnb w-12 h-12 hover:text-airbnbDark transition-colors duration-300" />
        <FaCircleUser className=" text-airbnb w-12 h-12 hover:text-airbnbDark transition-colors duration-300" />
      </button>
     
    </div>
  )
}