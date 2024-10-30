import React from "react";

const CyclingPerformanceTable = () => {
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

  return (
    <div className="flex justify-center mt-8">
      <table className="min-w-full border border-gray-200 shadow-lg">
        <thead>
          <tr className="bg-gray-100">
            <th className="px-6 py-3 text-center text-gray-600 font-semibold">
              Level
            </th>
            <th className="px-6 py-3 text-center text-gray-600 font-semibold">
              W/kg Males
            </th>
            <th className="px-6 py-3 text-center text-gray-600 font-semibold">
              W/kg Females
            </th>
          </tr>
        </thead>
        <tbody>
          {data.map((row, index) => (
            <tr key={index} className="even:bg-white odd:bg-gray-50">
              <td className="px-4 py-1 text-center text-gray-800 font-medium">
                {row.level}
              </td>
              <td className="px-4 py-1 text-center text-gray-800">
                {row.maleWkg}
              </td>
              <td className="px-4 py-1 text-center text-gray-800">
                {row.femaleWkg}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default CyclingPerformanceTable;
