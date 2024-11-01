// pages/index.tsx

"use client";
import { useState, useEffect } from "react";
import WattToKgCalculator from "./components/WattToKgCalculator";
import CyclingPerformanceTable from "@/components/ui/watt-per-kilo-table";
import DataSummaryCard from "./components/DataSummaryCard";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { levels } from "@/components/data/levelsData";
import InfoSection from "./components/InformationCards";
import RootLayout from "@/app/layout";

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
  const kgValue = parseFloat(kg) || 1; // Ensure we handle kg being zero

  const { currentLevel, nextLevel } = (() => {
    const selectedLevels = (levels[gender as keyof typeof levels] || []).sort(
      (a, b) => b.min - a.min
    );
    let current = null;
    let next = null;

    for (let i = 0; i < selectedLevels.length; i++) {
      const level = selectedLevels[i];

      if (wpk >= level.min && (level.max === undefined || wpk < level.max)) {
        current = level;
        next = selectedLevels[i - 1] || null;
        break;
      }
    }
    return {
      currentLevel: current,
      nextLevel: next,
    };
  })();

  return (
    <RootLayout isWarmTheme={isWarmTheme}>
      <div className="flex flex-col min-h-screen">
        {/* Fixed Header */}
        <Header isWarmTheme={isWarmTheme} toggleTheme={toggleTheme} />

        {/* Main Content Area */}
        <main className=" overflow-y-auto w-full max-w-screen-xl mx-auto py-4 ">
          {/* WattToKgCalculator component */}
          <section className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-3 gap-4 pb-0">
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

            {/* Left side - CyclingPerformanceTable component */}
            <div className="order-2 md:order-2 lg:order-1 p-0 py-4 px-0 flex lg:justify-start justify-center items-start overflow-y-auto">
              <CyclingPerformanceTable
                isWarmTheme={isWarmTheme}
                result={wpk}
                gender={gender}
              />
            </div>

            {/* Right side - DataSummaryCard component */}
            <div
              className={`order-3 md:order-3 lg:order-3 p-0 py-4 flex items-start lg:justify-start justify-center text-xl ${
                isWarmTheme ? "text-[#F94807]" : "text-[#0A1833]"
              } overflow-y-auto`}
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
          </section>

          {/* InfoSection component */}
          <section
            className={`grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-3 gap-4 py-4 pt-0 ${
              isWarmTheme ? "text-[#F94807]" : "text-[#0A1833]"
            }`}
          >
            <InfoSection isWarmTheme={isWarmTheme} toggleTheme={toggleTheme} />
          </section>
        </main>

        {/* Sticky Footer */}
        <Footer isWarmTheme={isWarmTheme} toggleTheme={toggleTheme} />
      </div>
    </RootLayout>
  );
}
