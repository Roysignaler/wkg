// pages/index.tsx

"use client";
import { useState, useEffect } from "react";
import WattToKgCalculator from "./components/WattToKgCalculator";
import CyclingPerformanceTable from "@/components/ui/watt-per-kilo-table";
import { levels } from "@/components/data/levelsData";
import { Button } from "@/components/ui/button";
import { ArrowDownIcon, SunIcon } from "@radix-ui/react-icons";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

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
      <main className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-3 gap-4 w-full max-w-screen-xl mx-auto py-4">
        {/* Center content - Set to appear first on medium screens (768px - 1023px) */}
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

        {/* Left side - Cycling Performance Table with fixed height */}
        <div className="order-2 md:order-2 lg:order-1 p-0 py-4 flex justify-center items-start h-[525px] overflow-y-auto">
          <CyclingPerformanceTable
            isWarmTheme={isWarmTheme}
            result={wpk}
            gender={gender}
          />
        </div>

        {/* Right side - Summary in Card with fixed height */}
        {/* Right side - Summary in Card with fixed height */}
        <div
          className={`order-3 md:order-3 lg:order-3 p-0 py-4 flex items-start justify-center text-xl ${
            isWarmTheme ? "text-[#F94807]" : "text-[#0A1833]"
          } h-[525px] overflow-y-auto`}
        >
          <Card className="w-full h-full md:max-w-[400px] md:mx-auto">
            <CardHeader className="space-y-1 pb-3">
              <CardTitle className="space-y-1">
                <strong>Data Summary</strong>
              </CardTitle>
              <CardDescription>
                Review your current stats and level insights.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-1 border-b-[5px] pb-3">
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
                  <strong>Formula:</strong>{" "}
                  <span className="text-lg">
                    {watts} W / {kg} kg ={" "}
                  </span>
                  {result}
                </p>
              </div>

              {currentLevel && (
                <div>
                  <div className="pt-3">
                    <CardTitle>
                      <strong>Level: {currentLevel.name}</strong>
                    </CardTitle>
                    <p className="text-base">{currentLevel.description}</p>
                  </div>

                  {nextLevel && (
                    <p className="mt-3 text-base">
                      You need an additional{" "}
                      <strong>{(nextLevel.min - wpk).toFixed(2)} W/kg</strong>{" "}
                      to reach the next level: <strong>{nextLevel.name}</strong>
                      .
                    </p>
                  )}
                </div>
              )}
            </CardContent>
            <CardFooter>
              <p className="text-center text-xs">
                Tailored insights to help you achieve your next milestone.
              </p>
            </CardFooter>
          </Card>
        </div>
      </main>
    </div>
  );
}
