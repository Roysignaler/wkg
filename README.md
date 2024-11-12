# W/KG Calculator Application
## Overview
The W/KG Calculator Application is designed for cyclists and endurance athletes to calculate their power-to-weight ratio (watts per kilogram, or W/KG), a key metric for performance tracking and improvement. The app enables users to input their power (watts) and weight (kg) and provides insights based on different performance levels, along with personalized recommendations for improvement.

Try the application live at [https://wkg-eight.vercel.app/](https://wkg-eight.vercel.app/)

## Features
- W/KG Calculation: Enter power (watts) and body weight (kg) to get your W/KG ratio.
- Fitness Level Evaluation: Get categorized into different fitness levels based on your W/KG.
- Theming: Toggle between warm and cool color themes.
- Performance Summary: Display detailed performance insights, including targeted power improvements and weekly goals.
- Cycling Data Tables: View cycling performance benchmarks to gauge your progress.

## Technical Details
- Framework: Next.js for the application structure and server-side rendering.
- Styling: Tailwind CSS for responsive design and dynamic theming.
- State Management: React Context API for theme and performance-level management.
- TypeScript: Type-safe code with interfaces for props and application state.

## Installation
Clone the repository:

```bash
git clone https://github.com/your-username/wkg-calculator.git
cd wkg-calculator
```

### Install dependencies: Make sure you have Node.js installed, then run:

```bash
npm install
```

### Start the development server:

```bash
npm run dev
```

Open the app in your browser: Navigate to http://localhost:3000 to access the app locally.

## Usage
- Enter your power (W): Input your current cycling power in watts.
- Enter your weight (KG): Input your body weight in kilograms.
- Select Gender: Choose your gender to tailor fitness benchmarks.
- View W/KG Ratio: The app will calculate and display your watts per kilogram.
- Explore Insights: Review your current fitness level, along with suggested goals and benchmarks.

## Components
- WattToKgCalculator: Core component for W/KG calculation and user input.
- CyclingPerformanceTable: Displays performance benchmarks for reference.
- DataSummaryCard: Provides personalized feedback and insights based on your W/KG ratio.
- Header and Footer: Customizable components for navigation and theme toggling.

## Theming
The application supports dynamic theming. Toggle between warm and cool themes via the Theme Toggle button. The theme change affects all components, including the favicon.



