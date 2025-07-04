import { UserInputContext } from "@/app/_context/UserInputContext";
import CategoryList from "@/app/_shared/CategoryList";
import Image from "next/image";
import React, { useContext } from "react";

const SelectCategory = () => {
  const { userCourseInput, setUserCourseInput } = useContext(UserInputContext);
  const handleCategoryChange = (category) => {
    setUserCourseInput((prev) => ({
      ...prev,
      category: category,
    }));
  };
  return (
    <div className="px-10 md:px-20">
      <h2 className="my-5">Select the course category</h2>
      <div className="grid grid-cols-3 gap-8">
        {CategoryList.map((item, index) => (
          <div
            key={item.id}
            className="flex flex-col items-center cursor-pointer group"
            onClick={() => handleCategoryChange(item.name)}
          >
            {/* Image Button */}
            <div
              className={`relative w-32 h-32 rounded-xl overflow-hidden border-4 transition-all duration-300 hover:border-primary hover:scale-105 ${
                userCourseInput?.category == item.name
                  ? "border-primary shadow-lg scale-105"
                  : "border-gray-200"
              }`}
            >
              <Image 
                src={item.icon} 
                alt={item.name} 
                fill
                className="object-cover"
              />
              {/* Overlay for better image visibility */}
              <div className="absolute inset-0 bg-black bg-opacity-20 group-hover:bg-opacity-10 transition-all duration-300"></div>
            </div>
            
            {/* Category Name Outside */}
            <h2 className={`mt-3 text-center font-medium transition-colors duration-300 ${
              userCourseInput?.category == item.name
                ? "text-primary font-semibold"
                : "text-gray-700 group-hover:text-primary"
            }`}>
              {item.name}
            </h2>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SelectCategory;
