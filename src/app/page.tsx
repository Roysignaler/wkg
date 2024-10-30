"use client";
import Image from "next/image";
import { useState } from "react";
import WattToKgCalculator from "./components/WattToKgCalculator";
import { Button } from "@/components/ui/button";
import { ArrowDownIcon, SunIcon } from "@radix-ui/react-icons";
import CyclingPerformanceTable from "@/components/ui/watt-per-kilo-table";

export default function Home() {
  const [isWarmTheme, setIsWarmTheme] = useState(false);
  const [result, setResult] = useState(""); // Lifted state for result

  // Toggle theme handler
  const toggleTheme = () => setIsWarmTheme((prev) => !prev);

  return (
    <div className="flex flex-col items-center min-h-screen">
      {/* Full-width banner */}
      <header
        className={`w-full p-4 ${
          isWarmTheme ? "bg-[#F94807]" : "bg-color-bright-100"
        } text-white`}
      >
        {/* Banner with full width */}
        <div className="max-w-screen-xl mx-auto border-b-[10px] border-white">
          <p>
            Beta -{" "}
            <a
              href="https://forms.gle/aDMDVmzJjn95rDT97"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 underline"
            >
              Give anonymous feedback
            </a>{" "}
            or{" "}
            <a
              href="https://x.com/intent/post?text=WattPerKilogram.App+from+%40roysignaler++%0A%0A"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 underline"
            >
              tweet it
            </a>
            .
          </p>
        </div>

        {/* Grid layout for spaced content */}
        <div className="grid grid-cols-3 gap-4 max-w-screen-xl mx-auto py-4">
          {/* Button to scroll to Main Content */}
          <div className="flex justify-start items-center">
            <Button
              variant="ghost"
              onClick={() => {
                const mainContent = document.getElementById("main-content");
                if (mainContent) {
                  mainContent.scrollIntoView({
                    behavior: "smooth",
                  });
                }
              }}
              className="px-1 py-2"
            >
              <ArrowDownIcon /> Explore
            </Button>
          </div>

          {/* Central text */}
          <div className="flex justify-center items-center text-center">
            <p>Essential tool for cyclists </p>
          </div>

          {/* Theme toggle button */}
          <div className="flex justify-end items-center">
            <button onClick={toggleTheme} className=" px-4 py-2 rounded">
              <SunIcon />
            </button>
          </div>
        </div>
      </header>
      <main className="grid grid-cols-1 md:grid-cols-3 gap-4 w-full max-w-screen-xl mx-auto py-4">
        {/* Center content - Show first on mobile */}
        <div className="order-1 md:order-2 p-4 flex justify-center items-center">
          <p id="main-content" className={isWarmTheme ? "" : ""}>
            <WattToKgCalculator
              isWarmTheme={isWarmTheme}
              result={result}
              setResult={setResult}
            />
          </p>
        </div>

        {/* Left side - Show second on mobile */}
        <div className="order-2 md:order-1 p-4 bg-gray-100">
          <CyclingPerformanceTable isWarmTheme={isWarmTheme} />
        </div>

        {/* Right side - Show third on mobile */}
        <div className="order-3 md:order-3 p-4 bg-gray-100">
          <p>Right Side Content</p>
          <div>
            <p>{result ? result : "Results go here"}</p>
          </div>
        </div>
      </main>
    </div>
  );
}
