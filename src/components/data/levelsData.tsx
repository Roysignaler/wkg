// components/data/levelsData.ts

export interface LevelData {
  min: number;
  max?: number;
  name: string;
  description: string;
  typicalWeek: {
    ridesPerWeek: string;
    weeklyDistance: string;
    oneDayEndurance: string;
    avgSpeed: string;
  };
}

export const levels = {
  male: [
    {
      min: 5.8,
      name: "World Class",
      description:
        "Elite cyclists competing at the highest levels, capable of racing in world-class events. Extreme endurance and power, with finely tuned training and nutrition.",
      typicalWeek: {
        ridesPerWeek: "5+",
        weeklyDistance: "300 km+",
        oneDayEndurance: "180 km+",
        avgSpeed: "35–40 km/h",
      },
    },
    {
      min: 5.3,
      max: 5.8,
      name: "Exceptional",
      description:
        "Professional cyclists who are key support riders in major races, with high endurance and tactical skill.",
      typicalWeek: {
        ridesPerWeek: "5",
        weeklyDistance: "260 km",
        oneDayEndurance: "160 km",
        avgSpeed: "32–36 km/h",
      },
    },
    {
      min: 4.7,
      max: 5.3,
      name: "Excellent - A Grade / Cat 1",
      description:
        "Highly competitive cyclists who often race in top categories, excelling in age-group triathlons and challenging terrain.",
      typicalWeek: {
        ridesPerWeek: "5+",
        weeklyDistance: "260 km+",
        oneDayEndurance: "170 km+",
        avgSpeed: "28–36 km/h",
      },
    },
    {
      min: 4.1,
      max: 4.7,
      name: "Very Good - B Grade / Cat 2",
      description:
        "Competitive amateur cyclists who often podium in local races and thrive in fast group rides.",
      typicalWeek: {
        ridesPerWeek: "4",
        weeklyDistance: "200 km",
        oneDayEndurance: "150 km",
        avgSpeed: "25–29 km/h",
      },
    },
    {
      min: 3.5,
      max: 4.1,
      name: "Good - C Grade / Cat 3",
      description:
        "Dedicated cyclists who participate in group rides and improve performance through regular training.",
      typicalWeek: {
        ridesPerWeek: "3–4",
        weeklyDistance: "180 km",
        oneDayEndurance: "120 km",
        avgSpeed: "24–28 km/h",
      },
    },
    {
      min: 2.9,
      max: 3.5,
      name: "Moderate - D Grade / Cat 4",
      description:
        "Enthusiastic cyclists who enjoy longer rides for fitness and participate in occasional races.",
      typicalWeek: {
        ridesPerWeek: "3",
        weeklyDistance: "160 km",
        oneDayEndurance: "100 km",
        avgSpeed: "23–27 km/h",
      },
    },
    {
      min: 2.3,
      max: 2.9,
      name: "Fair",
      description:
        "Social riders who enjoy the health benefits of cycling and participate in casual group rides.",
      typicalWeek: {
        ridesPerWeek: "1–2",
        weeklyDistance: "70 km",
        oneDayEndurance: "60 km",
        avgSpeed: "18–24 km/h",
      },
    },
    {
      min: 1.7,
      max: 2.3,
      name: "Novice 2",
      description:
        "Leisure cyclists who enjoy relaxed rides and short commutes, riding primarily for recreation.",
      typicalWeek: {
        ridesPerWeek: "1",
        weeklyDistance: "50 km",
        oneDayEndurance: "40 km",
        avgSpeed: "15–20 km/h",
      },
    },
    {
      min: 1.3,
      max: 1.7,
      name: "Novice 1",
      description:
        "New cyclists getting into the sport, building fitness through short, easy rides.",
      typicalWeek: {
        ridesPerWeek: "1",
        weeklyDistance: "30 km",
        oneDayEndurance: "20 km",
        avgSpeed: "10–15 km/h",
      },
    },
  ],
  female: [
    {
      min: 5.1,
      name: "World Class",
      description:
        "Elite cyclists with high power output, competing in top-level events. They maintain peak endurance and fitness year-round.",
      typicalWeek: {
        ridesPerWeek: "5+",
        weeklyDistance: "300 km+",
        oneDayEndurance: "180 km+",
        avgSpeed: "34–38 km/h",
      },
    },
    {
      min: 4.6,
      max: 5.1,
      name: "Exceptional",
      description:
        "Professional cyclists who support team leaders in pro races, maintaining elite fitness and tactical knowledge.",
      typicalWeek: {
        ridesPerWeek: "5",
        weeklyDistance: "260 km",
        oneDayEndurance: "160 km",
        avgSpeed: "30–35 km/h",
      },
    },
    {
      min: 4.1,
      max: 4.6,
      name: "Excellent - A Grade / Cat 1",
      description:
        "Competitive cyclists excelling in races and group rides, known for strong endurance and skill.",
      typicalWeek: {
        ridesPerWeek: "5+",
        weeklyDistance: "250 km+",
        oneDayEndurance: "160 km+",
        avgSpeed: "27–32 km/h",
      },
    },
    {
      min: 3.5,
      max: 4.1,
      name: "Very Good - B Grade / Cat 2",
      description:
        "Experienced cyclists who train regularly and enjoy challenging group rides and local races.",
      typicalWeek: {
        ridesPerWeek: "4",
        weeklyDistance: "200 km",
        oneDayEndurance: "140 km",
        avgSpeed: "24–28 km/h",
      },
    },
    {
      min: 3.0,
      max: 3.5,
      name: "Good - C Grade / Cat 3",
      description:
        "Enthusiastic cyclists who participate in group rides and improve endurance through regular training.",
      typicalWeek: {
        ridesPerWeek: "3–4",
        weeklyDistance: "160 km",
        oneDayEndurance: "100 km",
        avgSpeed: "22–26 km/h",
      },
    },
    {
      min: 2.8,
      max: 3.0,
      name: "Moderate - D Grade / Cat 4",
      description:
        "Casual riders who enjoy the sport for fitness and socialization, participating in group rides.",
      typicalWeek: {
        ridesPerWeek: "2–3",
        weeklyDistance: "130 km",
        oneDayEndurance: "80 km",
        avgSpeed: "20–24 km/h",
      },
    },
    {
      min: 2.5,
      max: 2.8,
      name: "Fair",
      description:
        "Cyclists who enjoy the health benefits of riding with occasional longer weekend rides.",
      typicalWeek: {
        ridesPerWeek: "1–2",
        weeklyDistance: "60 km",
        oneDayEndurance: "50 km",
        avgSpeed: "18–22 km/h",
      },
    },
    {
      min: 1.9,
      max: 2.5,
      name: "Novice 2",
      description:
        "Leisure cyclists who ride occasionally on weekends or for commuting.",
      typicalWeek: {
        ridesPerWeek: "1",
        weeklyDistance: "40 km",
        oneDayEndurance: "30 km",
        avgSpeed: "14–18 km/h",
      },
    },
    {
      min: 1.3,
      max: 1.9,
      name: "Novice 1",
      description:
        "New cyclists building fitness with short, easy rides on weekends or for commuting.",
      typicalWeek: {
        ridesPerWeek: "1",
        weeklyDistance: "20 km",
        oneDayEndurance: "15 km",
        avgSpeed: "10–14 km/h",
      },
    },
  ],
};
