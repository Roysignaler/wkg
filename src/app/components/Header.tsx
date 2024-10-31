// components/Header.tsx
import { Button } from "@/components/ui/button";
import { ArrowDownIcon, SunIcon } from "@radix-ui/react-icons";

interface HeaderProps {
  isWarmTheme: boolean;
  toggleTheme: () => void;
}

export default function Header({ isWarmTheme, toggleTheme }: HeaderProps) {
  return (
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
  );
}
