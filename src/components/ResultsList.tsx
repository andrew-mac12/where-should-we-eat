"use client";

import React from "react";
import type { FoodGroup } from "@/lib/foodGroups";

type ResultsListProps = {
  groups: FoodGroup[];
  ratings: Record<string, number>;
  topN?: number;
  onSurprise?: (id: string) => void;
};

export function ResultsList({ groups, ratings, topN = 3, onSurprise }: ResultsListProps) {
  const sorted = [...groups].sort((a, b) => (ratings[b.id] ?? 0) - (ratings[a.id] ?? 0));
  const top = sorted.slice(0, topN);

  return (
    <div className="w-full max-w-xl mx-auto">
      <h2 className="text-2xl font-bold mb-4">Top Picks</h2>
      <ol className="space-y-2">
        {top.map((g, index) => (
          <li key={g.id} className="flex items-center justify-between p-4 border rounded-lg">
            <div className="flex items-center gap-3">
              <span className="text-xl font-semibold w-6 text-center">{index + 1}</span>
              <span className="font-medium">{g.name}</span>
            </div>
            <span className="text-sm text-gray-500">{Math.round(ratings[g.id] ?? 0)}</span>
          </li>
        ))}
      </ol>
      {onSurprise && top.length > 0 && (
        <div className="mt-6 flex justify-center">
          <button
            type="button"
            onClick={() => onSurprise(top[Math.floor(Math.random() * top.length)].id)}
            className="px-4 py-2 rounded-md bg-black text-white hover:bg-gray-800"
          >
            Surprise Me
          </button>
        </div>
      )}
    </div>
  );
}

export default ResultsList;


