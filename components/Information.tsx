"use client";

import {
  FluentBeakerEmpty16Filled,
  MaterialSymbolsEditSharp,
  MaterialSymbolsLightFileCopySharp,
  MaterialSymbolsNetworkIntelligenceHistory,
  PhDotDuotone,
} from "@/components/Icons";

import { useState } from "react";
import Description from "./Description";
import Editorial from "./Editorial";
import Solutions from "./Solution";
import Submissions from "./Submissions";

export default function Information() {
  const [tabState, setTabState] = useState<
    "Description" | "Editorial" | "Solutions" | "Submissions"
  >("Description");

  return (
    <div className="w-full h-full bg-[#272822] border rounded-lg overflow-scroll overflow-x-hidden border-white border-opacity-10">
      <div className="bg-[#272822] flex items-center justify-between p-2 border-b border-white border-opacity-10 text-opacity-70 text-white ">
        <div className="flex items-center space-x-1">
          <p
            className="flex items-center space-x-1 font-mono cursor-pointer"
            onClick={() => [setTabState("Description")]}
          >
            <MaterialSymbolsLightFileCopySharp className="text-lg" />
            <span className="text-sm">Description</span>
          </p>
          <PhDotDuotone className="text-sm" />
          <p
            className="flex items-center space-x-1 font-mono cursor-pointer"
            onClick={() => {
              setTabState("Editorial");
            }}
          >
            <MaterialSymbolsEditSharp className="text-lg" />
            <span className="text-sm">Editorial</span>
          </p>
          <PhDotDuotone className="text-sm" />
          <p
            className="flex items-center space-x-1 font-mono cursor-pointer"
            onClick={() => {
              setTabState("Solutions");
            }}
          >
            <FluentBeakerEmpty16Filled className="text-lg" />
            <span className="text-sm">Solutions</span>
          </p>
          <PhDotDuotone className="text-sm" />
          <p
            className="flex items-center space-x-1 font-mono cursor-pointer"
            onClick={() => {
              setTabState("Submissions");
            }}
          >
            <MaterialSymbolsNetworkIntelligenceHistory className="text-lg" />
            <span className="text-sm">Submissions</span>
          </p>
        </div>
      </div>
      <div
        data-tabState={tabState}
        className="data-[tabState=Description]:block hidden"
      >
        <Description />
      </div>
      <div
        data-tabState={tabState}
        className="data-[tabState=Editorial]:block hidden"
      >
        <Editorial />
      </div>
      <div
        data-tabState={tabState}
        className="data-[tabState=Solutions]:block hidden"
      >
        <Solutions />
      </div>
      <div
        data-tabState={tabState}
        className="data-[tabState=Submissions]:block hidden"
      >
        <Submissions />
      </div>
    </div>
  );
}
