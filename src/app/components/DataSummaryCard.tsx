// components/DataSummaryCard.tsx

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { useTheme } from "./ThemeContext"; // Import useTheme to access isWarmTheme

interface Level {
  name: string;
  description: string;
  min: number;
  max?: number;
  typicalWeek?: {
    ridesPerWeek: string;
    weeklyDistance: string;
    oneDayEndurance: string;
    avgSpeed: string;
  };
}

interface DataSummaryCardProps {
  gender: string;
  watts: string;
  kg: string;
  result: string;
  currentLevel: Level | null;
  nextLevel: Level | null;
  wpk: number;
}

export default function DataSummaryCard({
  gender,
  watts,
  kg,
  result,
  currentLevel,
  nextLevel,
  wpk,
}: DataSummaryCardProps) {
  const { isWarmTheme } = useTheme(); // Access isWarmTheme from ThemeContext

  return (
    <Card
      className={`w-full h-full md:max-w-[400px] md:mx-auto ${
        isWarmTheme ? "text-[#F94807]" : "text-[#0A1833]"
      }`}
    >
      <CardHeader className="space-y-1 pb-3 lg:pr-0">
        <CardTitle
          className={`space-y-1 ${
            isWarmTheme ? "text-[#F94807]" : "text-[#0A1833]"
          }`}
        >
          <strong>Data Summary</strong>
        </CardTitle>
        <CardDescription>
          Review your current stats and level insights.
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-4 lg:pr-0">
        <div
          className={`space-y-1 border-b-[5px] pb-5 ${
            isWarmTheme ? "border-[#F94807]" : "border-color-bright-100"
          }`}
        >
          <p>
            <strong>Gender:</strong>{" "}
            {gender.charAt(0).toUpperCase() + gender.slice(1)}
          </p>
          <p>
            <strong>Power:</strong> {watts} watts
          </p>
          <p>
            <strong>Weight:</strong> {kg} kg
          </p>
          <p>
            <strong>Formula:</strong>{" "}
            <span className="text-lg">
              {watts} W / {kg} kg = {result}
            </span>
          </p>
        </div>
        {(currentLevel && (
          <div>
            <div className="pt-1">
              <CardTitle
                className={isWarmTheme ? "text-[#F94807]" : "text-[#0A1833]"}
              >
                <strong>Level: {currentLevel.name}</strong>
              </CardTitle>
              <p className="text-base">{currentLevel.description}</p>
            </div>

            {nextLevel && (
              <p className="mt-3 text-base">
                You need an additional{" "}
                <strong>{Math.abs(nextLevel.min - wpk).toFixed(2)} W/kg</strong>{" "}
                to reach the next level: <strong>{nextLevel.name}</strong>.
              </p>
            )}
          </div>
        )) || (
          <div>
            <div className="pt-1">
              <CardTitle
                className={isWarmTheme ? "text-[#F94807]" : "text-[#0A1833]"}
              >
                <strong>Level: Time to start</strong>
              </CardTitle>
              <p className="text-base">
                Every cyclist begins somewhere! Keep pushing forward, and you’ll
                reach the first level soon.
              </p>
            </div>
          </div>
        )}
      </CardContent>
    </Card>
  );
}
