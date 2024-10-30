"use client";

import { useState } from "react";
import * as Slider from "@/components/ui/slider";
import CustomSlider from "./CustomSlider";

interface WattToKgCalculatorProps {
  isWarmTheme: boolean;
}

export default function WattToKgCalculator({
  isWarmTheme,
}: WattToKgCalculatorProps) {
  const [watts, setWatts] = useState("160");
  const [kg, setKg] = useState("90");
  const [result, setResult] = useState("");

  const handleCalculate = () => {
    if (kg && watts) {
      const wattsPerKg = parseFloat(watts) / parseFloat(kg);
      setResult(`W/kg: ${wattsPerKg.toFixed(2)}`);
    } else {
      setResult("Please enter both watts and kg.");
    }
  };

  const handleSliderChange = (value: number) => {
    setWatts(value.toString()); // Update watts when slider moves
  };
  const handleSliderChangeWatts = (value: number) => setWatts(value.toString());
  const handleSliderChangeKg = (value: number) => setKg(value.toString());

  return (
    <div className="flex flex-col items-center gap-4 text-center">
      <h2
        className={`${
          isWarmTheme ? "text-[#F94807]" : "text-[#0A1833]"
        } text-lg font-semibold`}
      >
        Watt to KG Calculator
      </h2>

      {/* Watts Slider - starts at 160 */}
      <div className="relative w-full max-w-xs">
        <input
          type="number"
          value={watts}
          onChange={(e) => setWatts(e.target.value)}
          placeholder="Enter power"
          className={`border-2 px-2 py-1 rounded w-full ${
            isWarmTheme
              ? "border-warm-border text-[#F94807]"
              : "border-cool-border text-[#0A1833]"
          }`}
        />
        <span className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 text-sm opacity-70 pointer-events-none">
          watt
        </span>
      </div>
      <CustomSlider
        value={[Number(watts)]}
        onValueChange={(value) => handleSliderChangeWatts(value[0])}
        max={750}
        step={1}
        defaultValue={160} // Starts at 160
        isWarmTheme={isWarmTheme}
      />

      {/* Kg Slider - starts at 90 */}
      <div className="relative w-full max-w-xs">
        <input
          type="number"
          value={kg}
          onChange={(e) => setKg(e.target.value)}
          placeholder="Enter weight"
          className={`border-2 px-2 py-1 rounded w-full ${
            isWarmTheme
              ? "border-warm-border text-[#F94807]"
              : "border-cool-border text-[#0A1833]"
          }`}
        />
        <span className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 text-sm opacity-70 pointer-events-none">
          kilogram
        </span>
      </div>
      <CustomSlider
        value={[Number(kg)]}
        onValueChange={(value) => handleSliderChangeKg(value[0])}
        max={200}
        step={1}
        defaultValue={90} // Starts at 90
        isWarmTheme={isWarmTheme}
      />

      <button
        onClick={handleCalculate}
        className={`${
          isWarmTheme ? "bg-[#F94807]" : "bg-blue-500"
        } text-white px-4 py-2 rounded w-full max-w-xs`}
      >
        Calculate W/kg
      </button>

      {result && <p className="mt-4 text-sm text-gray-700">{result}</p>}
    </div>
  );
}
