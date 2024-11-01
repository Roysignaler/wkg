// components/Footer.tsx
import { useTheme } from "./ThemeContext";

export default function Footer() {
  const { isWarmTheme } = useTheme(); // Use ThemeContext to access isWarmTheme

  return (
    <footer
      className={`w-full p-4 ${
        isWarmTheme ? "text-[#F94807]" : "text-color-bright-100"
      }`}
    >
      <div
        className={`max-w-screen-xl mx-auto border-b-[10px] ${
          isWarmTheme ? "border-[#F94807]" : "border-color-bright-100"
        }`}
      ></div>

      <div className="grid grid-cols-3 gap-4 max-w-screen-xl mx-auto py-4 text-lg">
        <div className="flex md:justify-start items-start">
          <div>
            <h2 className="text-lg font-semibold">WKG © 2024</h2>
            <p></p>
          </div>
        </div>
        <div className="flex lg:justify-center items-start">
          <div>
            <h2 className="text-lg font-semibold">
              Design and code by Stefan Frederiksen
            </h2>
          </div>
        </div>
        <div className="flex lg:justify-end items-start lg:items-end">
          <div>
            <h2 className="text-lg font-semibold">
              Feedback goes{" "}
              <a href="https://forms.gle/aDMDVmzJjn95rDT97">
                <u>here</u>
              </a>
            </h2>
          </div>
        </div>
      </div>
    </footer>
  );
}
