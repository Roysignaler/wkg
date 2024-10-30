"use client";
import Image from "next/image";
import { useState } from "react";
import WattToKgCalculator from "./components/WattToKgCalculator";
import { Button } from "@/components/ui/button";
import { ArrowDownIcon, SunIcon } from "@radix-ui/react-icons";

export default function Home() {
  const [isWarmTheme, setIsWarmTheme] = useState(false);

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

      {/* Main content area with two side sections */}
      <main className="flex justify-center w-full max-w-screen-xl mx-auto py-4">
        {/* Left side (div) */}
        <div className="hidden md:block w-1/4 py-4">
          <p>Left Side Content</p>
        </div>

        {/* Center content */}
        <div className="w-full md:w-1/2 py-4 bg-slate-400">
          <p id="main-content">
            <WattToKgCalculator />
          </p>
        </div>

        {/* Right side (div) */}
        <div className="hidden md:block w-1/4 p-4">
          <p>Right Side Content</p>
        </div>
      </main>
    </div>
  );
}
