// components/Header.tsx
import { useEffect, useState } from "react";
import { SunIcon } from "@radix-ui/react-icons";
import { useTheme } from "./ThemeContext"; // Import useTheme from ThemeContext

export default function Header() {
  const { isWarmTheme, toggleTheme } = useTheme(); // Use ThemeContext to get isWarmTheme and toggleTheme
  const [showOverlay, setShowOverlay] = useState(true);

  useEffect(() => {
    // Hide the overlay after the animation completes
    const timeout = setTimeout(() => setShowOverlay(false), 2100); // Match the animation duration
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
        {/* Wrapper for flex content and border */}
        <div className="max-w-screen-xl mx-auto">
          {/* Flex Container for Header Content */}
          <div className="relative flex items-center justify-between">
            {/* Left: Beta Section */}
            <div className="lg:text-lg text-base">
              <p>
                <strong>Beta</strong> -{" "}
                <a href="https://forms.gle/aDMDVmzJjn95rDT97">
                  <u>Give feedback</u>
                </a>{" "}
                or{" "}
                <a href="https://twitter.com/intent/tweet?text=wkg.app%20from%20@roysignaler%20%20%0A%0A">
                  <u>tweet it</u>
                </a>
                .
              </p>
            </div>

            {/* Centered Text: Essential Tool for Cyclists */}
            <div className="hidden lg:block absolute left-1/2 transform -translate-x-1/2 text-center lg:text-lg text-base">
              <p>
                <strong>Essential tool for cyclists</strong>
              </p>
            </div>

            {/* Right: Theme Toggle Button */}
            <div>
              <button onClick={toggleTheme} className="px-0 py-2 rounded">
                <SunIcon className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Border under Top Section, aligned with flex content */}
          <div className="border-b-[10px] border-white mt-1"></div>
        </div>

        {/* Essential Tool Text for Mobile */}
        <div className="flex lg:hidden justify-start items-center text-left text-lg mt-2">
          <p>
            <strong>Essential tool for cyclists</strong>
          </p>
        </div>
      </header>
    </>
  );
}
