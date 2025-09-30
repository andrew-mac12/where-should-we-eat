"use client";

import React, { useEffect, useMemo, useState } from "react";
import { useRouter } from "next/navigation";
import { foodGroups } from "@/lib/foodGroups";
import { createInitialRatings, updateRatings, type Ratings } from "@/lib/ratings";
import { pickBalancedPair } from "@/lib/pairs";
import DuelBoard from "@/components/DuelBoard";

export default function DuelPage() {
  const router = useRouter();

  const computedMaxRounds = useMemo(() => {
    const n = foodGroups.length;
    return Math.min(40, Math.max(12, Math.ceil(2 * n)));
  }, []);

  const [round, setRound] = useState(1);
  const initialRatings = useMemo(
    () => createInitialRatings(foodGroups.map((f) => f.id), 1500),
    []
  );
  const [ratings, setRatings] = useState<Ratings>(initialRatings);
  const [seenCounts, setSeenCounts] = useState<Record<string, number>>(() => (
    Object.fromEntries(foodGroups.map((f) => [f.id, 0])) as Record<string, number>
  ));
  const [pair, setPair] = useState(() => pickBalancedPair(foodGroups, initialRatings, Object.fromEntries(foodGroups.map((f) => [f.id, 0])) as Record<string, number>));

  // Increment seen counts whenever the pair changes (counts exposures once per round)
  useEffect(() => {
    setSeenCounts((prev) => {
      const next = { ...prev };
      next[pair[0].id] = (next[pair[0].id] ?? 0) + 1;
      next[pair[1].id] = (next[pair[1].id] ?? 0) + 1;
      return next;
    });
  }, [pair]);

  function handleChoice(winnerId: string, loserId: string) {
    const nextRatings = updateRatings(ratings, winnerId, loserId);
    setRatings(nextRatings);
    if (round >= computedMaxRounds) {
      const encoded = encodeURIComponent(JSON.stringify(nextRatings));
      window.location.href = `/results?data=${encoded}`;
    } else {
      setRound((r) => r + 1);
      setPair(pickBalancedPair(foodGroups, nextRatings, seenCounts));
    }
  }

  function handleReset() {
    router.push("/");
  }

  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-8 gap-4">
      <DuelBoard pair={pair} round={round} maxRounds={computedMaxRounds} onChoose={handleChoice} />
      <button
        type="button"
        onClick={handleReset}
        className="text-sm text-gray-600 hover:text-gray-900 underline"
      >
        Reset and go home
      </button>
    </div>
  );
}


