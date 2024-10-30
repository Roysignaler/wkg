// CustomToggleGroup.tsx

import React from "react";
import * as ToggleGroup from "@radix-ui/react-toggle-group";

interface CustomToggleGroupProps {
  value: "male" | "female";
  onValueChange: (value: "male" | "female") => void; // Updated to accept only "male" or "female"
  isWarmTheme: boolean;
}

const CustomToggleGroup = ({
  value,
  onValueChange,
  isWarmTheme,
}: CustomToggleGroupProps) => {
  const toggleGroupItemClasses = `
    flex items-center justify-center px-4 py-2 font-semibold cursor-pointer rounded 
    ${
      isWarmTheme
        ? "bg-[#FFD8C2] text-[#8B4000]"
        : "bg-[#C2E3FF] text-[#1B4D89]"
    }
    hover:bg-opacity-80 focus:z-10 focus:shadow-[0_0_0_2px] focus:outline-none
    data-[state=on]:bg-opacity-90
  `;

  return (
    <ToggleGroup.Root
      type="single"
      value={value}
      onValueChange={(newValue) => onValueChange(newValue as "male" | "female")} // Cast newValue to match type
      aria-label="Gender selection"
      className="flex space-x-2 mt-4"
    >
      <ToggleGroup.Item
        value="male"
        className={toggleGroupItemClasses}
        aria-label="Male"
      >
        Male
      </ToggleGroup.Item>
      <ToggleGroup.Item
        value="female"
        className={toggleGroupItemClasses}
        aria-label="Female"
      >
        Female
      </ToggleGroup.Item>
    </ToggleGroup.Root>
  );
};

export default CustomToggleGroup;
