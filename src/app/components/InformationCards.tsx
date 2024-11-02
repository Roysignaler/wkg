// components/InformationCards.tsx
import { useState, useEffect } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ChevronDown } from "lucide-react";
import { useTheme } from "./ThemeContext"; // Import useTheme from ThemeContext

export default function InfoSection() {
  const { isWarmTheme } = useTheme(); // Use ThemeContext to access isWarmTheme
  const [isVisible, setIsVisible] = useState({
    whatIsWkg: false,
    whyIsWkgUseful: false,
    howToUseWkg: false,
  });

  // Check screen size on component mount
  useEffect(() => {
    const isLargeScreen = window.innerWidth >= 1024;
    setIsVisible({
      whatIsWkg: isLargeScreen,
      whyIsWkgUseful: isLargeScreen,
      howToUseWkg: isLargeScreen,
    });
  }, []);

  const toggleVisibility = (key: keyof typeof isVisible) => {
    setIsVisible((prev) => ({
      ...prev,
      [key]: !prev[key],
    }));
  };

  return (
    <>
      <Card>
        <CardHeader className="lg:pl-0 pb-1 pr-0">
          <CardTitle
            onClick={() => toggleVisibility("whatIsWkg")}
            className="flex items-center cursor-pointer"
          >
            <strong
              className={` ${
                isWarmTheme ? "text-[#F94807]" : "text-[#0A1833]"
              }`}
            >
              What is W/KG?{" "}
            </strong>
            <ChevronDown
              className={`ml-2 transform ${
                isVisible.whatIsWkg ? "rotate-180" : ""
              } ${isWarmTheme ? "text-[#F94807]" : "text-[#0A1833]"}`}
            />
          </CardTitle>
        </CardHeader>
        {isVisible.whatIsWkg && (
          <CardContent className="lg:pl-0 lg:pr-8">
            <p
              className={`text-justify ${
                isWarmTheme ? "text-[#F94807]" : "text-[#0A1833]"
              }`}
            >
              W/kg, or watts per kilogram, is a measure of the power output (in
              watts) relative to a cyclist&apos;s body weight. It is a critical
              metric in cycling and other endurance sports as it combines
              strength and endurance with efficiency. A higher W/kg means a
              cyclist can generate more power per unit of body weight, which is
              advantageous in climbs and sprints.
            </p>
          </CardContent>
        )}
      </Card>

      <Card>
        <CardHeader className="pb-1">
          <CardTitle
            onClick={() => toggleVisibility("whyIsWkgUseful")}
            className="flex items-center cursor-pointer"
          >
            <strong
              className={` ${
                isWarmTheme ? "text-[#F94807]" : "text-[#0A1833]"
              }`}
            >
              Why is W/KG Useful?{" "}
            </strong>
            <ChevronDown
              className={`ml-2 transform ${
                isVisible.whyIsWkgUseful ? "rotate-180" : ""
              } ${isWarmTheme ? "text-[#F94807]" : "text-[#0A1833]"}`}
            />
          </CardTitle>
        </CardHeader>
        {isVisible.whyIsWkgUseful && (
          <CardContent>
            <p
              className={`text-justify ${
                isWarmTheme ? "text-[#F94807]" : "text-[#0A1833]"
              }`}
            >
              W/kg helps athletes understand their power-to-weight ratio, a
              fundamental indicator of performance in cycling. It allows for
              fair comparison between riders of different sizes, identifying
              strength and endurance levels while predicting how well a cyclist
              will perform on various terrains. High W/kg values are essential
              for uphill sections where weight plays a larger role than on flat
              terrain.
            </p>
          </CardContent>
        )}
      </Card>

      <Card>
        <CardHeader className="pb-1 lg:pl-8 lg:pr-0">
          <CardTitle
            onClick={() => toggleVisibility("howToUseWkg")}
            className="flex items-center cursor-pointer"
          >
            <strong
              className={` ${
                isWarmTheme ? "text-[#F94807]" : "text-[#0A1833]"
              }`}
            >
              How to Use W/KG?{" "}
            </strong>
            <ChevronDown
              className={`ml-2 transform ${
                isVisible.howToUseWkg ? "rotate-180" : ""
              } ${isWarmTheme ? "text-[#F94807]" : "text-[#0A1833]"}`}
            />
          </CardTitle>
        </CardHeader>
        {isVisible.howToUseWkg && (
          <CardContent className="lg:pl-8 lg:pr-0">
            <p
              className={`text-justify ${
                isWarmTheme ? "text-[#F94807]" : "text-[#0A1833]"
              }`}
            >
              Cyclists can use W/kg to tailor their training, focus on their
              strengths, and address weaknesses. By tracking changes in W/kg
              over time, riders can gauge improvements in fitness and make
              informed decisions about pacing during races. It&apos;s also
              valuable for setting realistic goals: increasing power, decreasing
              weight, or a combination of both to optimize performance on
              specific courses.
            </p>
          </CardContent>
        )}
      </Card>
    </>
  );
}
