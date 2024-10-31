// pages/index.tsx

"use client";
import { useState, useEffect } from "react";
import WattToKgCalculator from "./components/WattToKgCalculator";
import CyclingPerformanceTable from "@/components/ui/watt-per-kilo-table";
import DataSummaryCard from "./components/DataSummaryCard"; // Import the new component
import { levels } from "@/components/data/levelsData";
import { Button } from "@/components/ui/button";
import { ArrowDownIcon, SunIcon } from "@radix-ui/react-icons";

export default function Home() {
  const [isWarmTheme, setIsWarmTheme] = useState(false);
  const [result, setResult] = useState("");
  const [watts, setWatts] = useState("160");
  const [kg, setKg] = useState("90");
  const [gender, setGender] = useState<"male" | "female">("male");

  const toggleTheme = () => setIsWarmTheme((prev) => !prev);

  useEffect(() => {
    if (kg && watts) {
      const wpk = parseFloat(watts) / parseFloat(kg);
      setResult(`W/kg: ${wpk.toFixed(2)}`);
    } else {
      setResult("Please enter both watts and kg.");
    }
  }, [watts, kg]);

  const wpk = parseFloat(result.split(": ")[1]) || 0;
  const { currentLevel, nextLevel } = (() => {
    const selectedLevels = levels[gender as keyof typeof levels] || [];

    let current = null;
    let next = null;

    for (let i = 0; i < selectedLevels.length; i++) {
      const level = selectedLevels[i];
      if (wpk >= level.min && (level.max === undefined || wpk < level.max)) {
        current = level;
        next = selectedLevels[i + 1] || null;
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
          <p className="pb-4 text-base">
            <strong>Beta</strong> -{" "}
            <a href="https://forms.gle/aDMDVmzJjn95rDT97">
              <u>Give feedback</u>
            </a>{" "}
            or{" "}
            <a href="https://twitter.com/intent/tweet?text=WattPerKilogram.App%20from%20@roysignaler%20%20%0A%0A">
              <u>tweet it</u>
            </a>
            .
          </p>
        </div>
        <div className="grid grid-cols-3 gap-4 max-w-screen-xl mx-auto py-4 text-lg">
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
              <ArrowDownIcon /> <strong className="md:text-lg">Explore</strong>
            </Button>
          </div>

          <div className="flex justify-center items-center text-center">
            <p>Essential tool for cyclists</p>
          </div>

          <div className="flex justify-end items-center">
            <button onClick={toggleTheme} className="px-4 py-2 rounded">
              <SunIcon className="md:w-5 md:h-5" />
            </button>
          </div>
        </div>
      </header>

      {/* Center - Use the WattToKgCalculator component */}
      <main className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-3 gap-4 w-full max-w-screen-xl mx-auto py-4">
        <div className="order-1 md:order-1 lg:order-2 p-0 py-4 flex justify-center items-center">
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

        {/* Left side - Use the watt-per-kilo-table component */}
        <div className="order-2 md:order-2 lg:order-1 p-0 py-4 px-0 flex lg:justify-start justify-center items-start lg:h-[525px] overflow-y-auto">
          <CyclingPerformanceTable
            isWarmTheme={isWarmTheme}
            result={wpk}
            gender={gender}
          />
        </div>

        {/* Right side - Use the DataSummaryCard component */}
        <div
          className={`order-3 md:order-3 lg:order-3 p-0 py-4 flex items-start lg:justify-start justify-center text-xl ${
            isWarmTheme ? "text-[#F94807]" : "text-[#0A1833]"
          } lg:h-[525px] overflow-y-auto`}
        >
          <DataSummaryCard
            isWarmTheme={isWarmTheme}
            gender={gender}
            watts={watts}
            kg={kg}
            result={result}
            currentLevel={currentLevel}
            nextLevel={nextLevel}
            wpk={wpk}
          />
        </div>
      </main>
    </div>
  );
}
