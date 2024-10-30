// pages/index.tsx

"use client";
import { useState, useEffect } from "react";
import WattToKgCalculator from "./components/WattToKgCalculator";
import CyclingPerformanceTable from "@/components/ui/watt-per-kilo-table";
import { levels } from "@/components/data/levelsData";
import { Button } from "@/components/ui/button";
import { ArrowDownIcon, SunIcon } from "@radix-ui/react-icons";

export default function Home() {
  const [isWarmTheme, setIsWarmTheme] = useState(false);
  const [result, setResult] = useState("");
  const [watts, setWatts] = useState("160");
  const [kg, setKg] = useState("90");
  const [gender, setGender] = useState<"male" | "female">("male");

  // Toggle theme handler
  const toggleTheme = () => setIsWarmTheme((prev) => !prev);

  // Calculate W/kg and determine level data
  useEffect(() => {
    if (kg && watts) {
      const wpk = parseFloat(watts) / parseFloat(kg);
      setResult(`W/kg: ${wpk.toFixed(2)}`);
    } else {
      setResult("Please enter both watts and kg.");
    }
  }, [watts, kg]);

  // Extract current level and next level data
  const wpk = parseFloat(result.split(": ")[1]) || 0;
  const { currentLevel, nextLevel } = (() => {
    // Safely get the levels based on gender or fallback to an empty array
    const selectedLevels = levels[gender as keyof typeof levels] || [];

    let current = null;
    let next = null;

    for (let i = 0; i < selectedLevels.length; i++) {
      const level = selectedLevels[i];

      // Check if wpk falls within the current level's range
      if (wpk >= level.min && (level.max === undefined || wpk < level.max)) {
        current = level;
        next = selectedLevels[i + 1] || null; // Use the next item in the array as next level
        break;
      }
    }

    return { currentLevel: current, nextLevel: next };
  })();

  return (
    <div className="flex flex-col items-center min-h-screen">
      <header
        className={`w-full p-4 ${
          isWarmTheme ? "bg-[#F94807]" : "bg-color-bright-100"
        } text-white`}
      >
        <div className="max-w-screen-xl mx-auto border-b-[10px] border-white">
          <p>Beta - Give feedback or tweet it.</p>
        </div>
        <div className="grid grid-cols-3 gap-4 max-w-screen-xl mx-auto py-4">
          <div className="flex justify-start items-center">
            <Button
              variant="ghost"
              onClick={() => {
                const mainContent = document.getElementById("main-content");
                if (mainContent) {
                  mainContent.scrollIntoView({ behavior: "smooth" });
                }
              }}
              className="px-1 py-2"
            >
              <ArrowDownIcon /> Explore
            </Button>
          </div>

          <div className="flex justify-center items-center text-center">
            <p>Essential tool for cyclists</p>
          </div>

          <div className="flex justify-end items-center">
            <button onClick={toggleTheme} className="px-4 py-2 rounded">
              <SunIcon />
            </button>
          </div>
        </div>
      </header>
      <main className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-3 gap-4 w-full max-w-screen-xl mx-auto py-4">
        {/* Center content - Set to appear first on medium screens (768px - 1023px) */}
        <div className="order-1 md:order-1 lg:order-2 p-4 flex justify-center items-center">
          <WattToKgCalculator
            isWarmTheme={isWarmTheme}
            result={result}
            setResult={setResult}
            watts={watts}
            setWatts={setWatts}
            kg={kg}
            setKg={setKg}
            gender={gender}
            setGender={setGender}
          />
        </div>

        {/* Left side - Set to appear second on medium screens (768px - 1023px) */}
        <div className="order-2 md:order-2 lg:order-1 p-4 flex justify-center items-start">
          <CyclingPerformanceTable
            isWarmTheme={isWarmTheme}
            result={wpk}
            gender={gender}
          />
        </div>

        {/* Right side - Summary with theme-based styling */}
        <div
          className={`order-3 md:order-3 lg:order-3 p-4 flex items-start ${
            isWarmTheme
              ? "bg-[#FFF5EB] text-[#8B4000]"
              : "bg-[#F0F8FF] text-[#1B4D89]"
          }`}
        >
          <div>
            <h3 className="text-lg font-semibold mb-2">Summary</h3>
            <p>
              <strong>Gender:</strong>{" "}
              {gender.charAt(0).toUpperCase() + gender.slice(1)}
            </p>
            <p>
              <strong>Power:</strong> {watts} watts
            </p>
            <p>
              <strong>Weight:</strong> {kg} kg
            </p>
            <p>
              <strong>Formula:</strong> {watts} W / {kg} kg = {result}
            </p>

            {currentLevel && (
              <div className="mt-4">
                <h4
                  className={`text-md font-semibold ${
                    isWarmTheme ? "text-[#CC5500]" : "text-[#0A1833]"
                  }`}
                >
                  Fitness Level: {currentLevel.name}
                </h4>
                <p
                  className={`text-sm mt-1 ${
                    isWarmTheme ? "text-[#994400]" : "text-[#2A527D]"
                  }`}
                >
                  {currentLevel.description}
                </p>
                <h5
                  className={`mt-3 font-medium ${
                    isWarmTheme ? "text-[#CC5500]" : "text-[#0A1833]"
                  }`}
                >
                  Typical Week:
                </h5>
                <div
                  className={` text-sm ${
                    isWarmTheme ? "text-[#8B4000]" : "text-[#1B4D89]"
                  } space-y-1`}
                >
                  <p>Rides per week: {currentLevel.typicalWeek.ridesPerWeek}</p>
                  <p>
                    Weekly distance: {currentLevel.typicalWeek.weeklyDistance}
                  </p>
                  <p>
                    One-day endurance:{" "}
                    {currentLevel.typicalWeek.oneDayEndurance}
                  </p>
                  <p>Average speed: {currentLevel.typicalWeek.avgSpeed}</p>
                </div>

                {nextLevel && (
                  <p
                    className={`mt-3 text-sm ${
                      isWarmTheme ? "text-[#CC5500]" : "text-[#2A527D]"
                    }`}
                  >
                    You need an additional{" "}
                    <strong>{(nextLevel.min - wpk).toFixed(2)} W/kg</strong> to
                    reach the next level: <strong>{nextLevel.name}</strong>.
                  </p>
                )}
              </div>
            )}
          </div>
        </div>
      </main>
    </div>
  );
}
