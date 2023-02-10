"use client";
import Atropos from "atropos/react";
import { TrophyIcon } from "./TrophyIcon";
export default function AtroposCard() {
  return (
    <div className="p-12">
      <Atropos className="block w-full h-auto mx-auto bg-black aspect-video rounded-2xl">
        <div className="flex justify-center items-center">
          <div className="flex items-center justify-center">
            <TrophyIcon />
            <h2>Copa Aguidom</h2>
          </div>
        </div>
      </Atropos>
    </div>
  );
}
