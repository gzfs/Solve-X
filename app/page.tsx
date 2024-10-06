"use client";

import Information from "@/components/Information";
import Playground from "@/components/Playground";

import Split from "react-split";

export default function Home() {
  return (
    <Split className="h-[calc(100vh-48px)] p-2 flex" direction="horizontal">
      <Information />
      <Playground />
    </Split>
  );
}
