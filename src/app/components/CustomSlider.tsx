import * as React from "react";
import * as Slider from "@radix-ui/react-slider";
import { useTheme } from "./ThemeContext"; // Import useTheme to access theme context

interface CustomSliderProps {
  value: number[];
  onValueChange: (value: number[]) => void;
  max: number;
  step: number;
  defaultValue: number;
}

export default function CustomSlider({
  value,
  onValueChange,
  max,
  step,
  defaultValue,
}: CustomSliderProps) {
  const { isWarmTheme } = useTheme(); // Access isWarmTheme from ThemeContext

  return (
    <Slider.Root
      value={value}
      onValueChange={(newValue) => onValueChange(newValue)}
      max={max}
      step={step}
      defaultValue={[defaultValue]}
      className="relative flex h-5 w-full max-w-xs touch-none select-none items-center"
    >
      {/* Track - X-axis styling */}
      <Slider.Track
        className={`relative h-[3px] w-full grow rounded-full ${
          isWarmTheme ? "bg-[#FFD8C2]" : "bg-[#C2E3FF]"
        }`}
      >
        {/* Range - Filled portion of the track */}
        <Slider.Range
          className={`absolute h-full rounded-full ${
            isWarmTheme ? "bg-[#F94807]" : "bg-[#105AEB]"
          }`}
        />
      </Slider.Track>

      {/* Thumb - Draggable circle */}
      <Slider.Thumb
        className={`block h-5 w-5 rounded-full shadow-lg focus:outline-none focus:ring-2 ${
          isWarmTheme
            ? "bg-[#f27446] hover:bg-[#e04c05] focus:ring-[#FFD8C2] shadow-[#FFD8C2]/50"
            : "bg-[#4c7ddf] hover:bg-[#0a5acc] focus:ring-[#C2E3FF] shadow-[#C2E3FF]/50"
        }`}
        aria-label="Slider Thumb"
      />
    </Slider.Root>
  );
}
