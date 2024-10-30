"use client";

import { useState } from "react";

export default function WattToKgCalculator() {
  const [watts, setWatts] = useState("");
  const [kg, setKg] = useState("");
  const [result, setResult] = useState("");

  const handleCalculate = () => {
    if (kg && watts) {
      const wattsPerKg = parseFloat(watts) / parseFloat(kg);
      setResult(`W/kg: ${wattsPerKg.toFixed(2)}`);
    } else {
      setResult("Please enter both watts and kg.");
    }
  };

  return (
    <div className="flex flex-col items-center gap-4 text-center">
      <h2 className="text-lg font-semibold">Watt to KG Calculator</h2>
      <input
        type="number"
        value={watts}
        onChange={(e) => setWatts(e.target.value)}
        placeholder="Enter power (Watts)"
        className="border px-2 py-1 rounded"
      />
      <input
        type="number"
        value={kg}
        onChange={(e) => setKg(e.target.value)}
        placeholder="Enter weight (Kg)"
        className="border px-2 py-1 rounded"
      />
      <button
        onClick={handleCalculate}
        className="bg-blue-500 text-white px-4 py-2 rounded"
      >
        Calculate W/kg
      </button>
      {result && <p className="mt-4 text-sm text-gray-700">{result}</p>}
    </div>
  );
}
