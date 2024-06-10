"use client";
import { IoSearchCircleSharp } from "react-icons/io5";

export const SearchFilters = () => {
  return (
    <div className="h-16 flex flex-row items-center justify-between border rounded-full">
      <div className="hidden lg:block">
        <div className="flex flex-row items-center justify-between">
          <div className="h-16 px-8 flex flex-col rounded-full justify-center hover:bg-gray-100">
            <p className="text-xs font-semibold">Where</p>
            <p className="text-sm">Wanted location</p>
          </div>
          <div className=" h-16 px-8 flex flex-col rounded-full justify-center hover:bg-gray-100">
            <p className="text-xs font-semibold">check in</p>
            <p className="text-sm">Add dates</p>
          </div>
          <div className=" h-16 px-8 flex flex-col rounded-full justify-center hover:bg-gray-100">
            <p className="text-xs font-semibold">check out</p>
            <p className="text-sm">Add dates</p>
          </div>
          <div className=" h-16 px-8 flex flex-col rounded-full justify-center hover:bg-gray-100">
            <p className="text-xs font-semibold">Who</p>
            <p className="text-sm">Add guests</p>
          </div>
        </div>
      </div>
      <div>
        <div>
         <IoSearchCircleSharp  className=" text-airbnb w-12 h-12 hover:text-airbnbDark transition-colors duration-300"/>
        </div>
      </div>
    </div>
  );
};
