"use client";
import PlanGroup from "@/components/PlanGroup";
import { Montserrat } from "next/font/google";
import AnnuallyMonthlySelector from "@/components/AnnuallyMonthlySelector";
import React, { useState } from "react";
import { Switch } from "@headlessui/react";

const montserrat = Montserrat({ subsets: ["latin"] });

export default function Home() {
  const [isMonthly, setIsMonthly] = useState(true);

  const handleClick = () => {
    setIsMonthly((prevState) => !prevState);
  };

  return (
    <main
      className={`flex min-h-screen flex-col items-center p-24 font-bold ${montserrat.className}`}
    >
      <h1 className="text-4xl text-grayish-blue mb-12">Our Pricing</h1>
      <AnnuallyMonthlySelector isMonthly={isMonthly} toggle={handleClick} />
      {/*<PlanGroup />*/}
      <PlanGroup isMonthly={isMonthly} />
    </main>
  );
}
