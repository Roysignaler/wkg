// components/Footer.tsx

interface FooterProps {
  isWarmTheme: boolean;
  toggleTheme: () => void;
}

export default function Footer({ isWarmTheme, toggleTheme }: FooterProps) {
  return (
    <footer
      className={`w-full p-4 ${
        isWarmTheme ? "bg-[#F94807]" : "bg-color-bright-100"
      } text-white`}
    >
      <div className="max-w-screen-xl mx-auto border-b-[10px] border-white"></div>

      <div className="grid grid-cols-3 gap-4 max-w-screen-xl mx-auto py-4 text-lg">
        <div className="flex md:justify-start items-start">
          <div>
            <h2 className="text-lg font-semibold">WattKG</h2>
            <p>© 2024</p>
          </div>
        </div>
        <div className="flex lg:justify-center items-start">
          <div>
            <h2 className="text-lg font-semibold">About</h2>
            <p>Design and code by Stefan Frederiksen</p>
          </div>
        </div>
        <div className="flex lg:justify-end items-start">
          <div>
            <h2 className="text-lg font-semibold">Feedback</h2>
            <p>
              Tell me{" "}
              <a href="https://forms.gle/aDMDVmzJjn95rDT97">
                <u>what you want to see</u>
              </a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
