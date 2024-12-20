import React from "react";
import { useTheme } from "@/app/components/ThemeContext";
interface CyclingPerformanceTableProps {
  result: number; // Pass W/kg result as a prop
  gender: string; // Pass gender as a prop
}

const CyclingPerformanceTable = ({
  result,
  gender,
}: CyclingPerformanceTableProps) => {
  const { isWarmTheme } = useTheme(); // Access isWarmTheme from ThemeContext

  const data = [
    { level: "World Class", maleWkg: "≥ 5.8", femaleWkg: "≥ 5.1" },
    { level: "Exceptional", maleWkg: "5.3 - 5.8", femaleWkg: "4.6 - 5.1" },
    {
      level: "Excellent - A Grade / Cat 1",
      maleWkg: "4.7 - 5.3",
      femaleWkg: "4.1 - 4.6",
    },
    {
      level: "Very Good - B Grade / Cat 2",
      maleWkg: "4.1 - 4.7",
      femaleWkg: "3.5 - 4.1",
    },
    {
      level: "Good - C Grade / Cat 3",
      maleWkg: "3.5 - 4.1",
      femaleWkg: "3.0 - 3.5",
    },
    {
      level: "Moderate - D Grade / Cat 4",
      maleWkg: "2.9 - 3.5",
      femaleWkg: "2.8 - 3.0",
    },
    { level: "Fair", maleWkg: "2.3 - 2.9", femaleWkg: "2.5 - 2.8" },
    { level: "Novice 2", maleWkg: "1.7 - 2.3", femaleWkg: "1.9 - 2.5" },
    { level: "Novice 1", maleWkg: "1.3 - 1.7", femaleWkg: "1.3 - 1.9" },
  ];

  // Helper function to check if result falls within a range
  const isInRange = (range: string, result: number): boolean => {
    if (range.includes("≥")) {
      const min = parseFloat(range.replace("≥ ", ""));
      return result >= min;
    }
    const [low, high] = range.split(" - ").map(parseFloat);
    return result >= low && result <= (high || Infinity);
  };

  return (
    <div className="flex justify-center">
      <table className="min-w-full rounded-xl border border-gray-200 shadow-lg">
        <thead>
          <tr
            className={`w-full p-4 ${
              isWarmTheme ? "bg-[#F94807]" : "bg-color-bright-100"
            } text-white`}
          >
            <th className="p-3 py-3 text-left text-white font-semibold">
              Level
            </th>
            <th className="w-1/4 px-1 py-1 text-center text-white font-semibold">
              W/kg <br />
              Males
            </th>
            <th className="w-1/4 px-1 py-1 text-center text-white font-semibold">
              W/kg <br />
              Female
            </th>
          </tr>
        </thead>
        <tbody>
          {data.map((row, index) => {
            const isHighlighted =
              (gender === "male" && isInRange(row.maleWkg, result)) ||
              (gender === "female" && isInRange(row.femaleWkg, result));

            const rowClasses = isHighlighted
              ? `${
                  isWarmTheme
                    ? "bg-[#F94807] text-white"
                    : "bg-color-bright-100 text-white"
                } font-bold`
              : index % 2 === 0
              ? "bg-white"
              : "bg-gray-50";

            const textColor = isHighlighted
              ? "text-white"
              : isWarmTheme
              ? "text-[#F94807]"
              : "text-[#0A1833]";

            return (
              <tr key={index} className={`w-1/2 ${rowClasses}`}>
                <td className={`px-2 py-1 text-left ${textColor}`}>
                  {row.level}
                </td>
                <td className={`w-1/6 px-1 py-1 text-center ${textColor}`}>
                  {row.maleWkg}
                </td>
                <td className={`w-1/6 px-1 py-1 text-center ${textColor}`}>
                  {row.femaleWkg}
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default CyclingPerformanceTable;
