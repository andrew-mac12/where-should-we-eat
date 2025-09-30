"use client";

import React from "react";
import type { FoodGroup } from "@/lib/foodGroups";
import { FoodCard } from "@/components/FoodCard";

type DuelBoardProps = {
  pair: [FoodGroup, FoodGroup];
  round: number;
  maxRounds: number;
  onChoose: (winnerId: string, loserId: string) => void;
};

export function DuelBoard({ pair, round, maxRounds, onChoose }: DuelBoardProps) {
  return (
    <div className="flex flex-col items-center gap-4 w-full px-4">
      <h2 className="text-xl font-semibold">Round {round} / {maxRounds}</h2>
      <div className="flex gap-6 sm:gap-8 w-full max-w-5xl justify-center flex-col sm:flex-row">
        <FoodCard key={pair[0].id} food={pair[0]} onSelect={() => onChoose(pair[0].id, pair[1].id)} />
        <FoodCard key={pair[1].id} food={pair[1]} onSelect={() => onChoose(pair[1].id, pair[0].id)} />
      </div>
    </div>
  );
}

export default DuelBoard;


