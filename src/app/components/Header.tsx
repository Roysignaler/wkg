// components/Header.tsx
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { ArrowDownIcon, SunIcon } from "@radix-ui/react-icons";
import { useTheme } from "./ThemeContext"; // Import useTheme from ThemeContext

export default function Header() {
  const { isWarmTheme, toggleTheme } = useTheme(); // Use ThemeContext to get isWarmTheme and toggleTheme
  const [showOverlay, setShowOverlay] = useState(true);

  useEffect(() => {
    // Hide the overlay after the animation completes
    const timeout = setTimeout(() => setShowOverlay(false), 1800); // Match the animation duration
    return () => clearTimeout(timeout);
  }, []);

  return (
    <>
      {showOverlay && (
        <div
          className={`fixed top-0 left-0 right-0 bottom-0 z-50 ${
            isWarmTheme ? "bg-[#F94807]" : "bg-color-bright-100"
          } animate-revealDown`}
        ></div>
      )}

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
          <div className="flex justify-start items-start">
            <Button
              variant="ghost"
              onClick={() => {
                const mainContent = document.getElementById("main-content");
                if (mainContent) {
                  mainContent.scrollIntoView({ behavior: "smooth" });
                }
              }}
              className="px-0 py-2"
            >
              <strong className="md:text-lg">Explore wkg.app</strong>{" "}
              <ArrowDownIcon />
            </Button>
          </div>
          <div className="flex justify-center items-center text-center md:text-lg text-base">
            <p>
              <strong>Essential tool for cyclists</strong>
            </p>
          </div>
          <div className="flex justify-end items-center">
            <button onClick={toggleTheme} className="px-0 py-2 rounded">
              <SunIcon className="w-5 h-5" />
            </button>
          </div>
        </div>
      </header>
    </>
  );
}
