"use client";

import React, { Suspense, useEffect, useMemo, useState } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import { foodGroups } from "@/lib/foodGroups";
import ResultsList from "@/components/ResultsList";

export default function ResultsPage() {
  return (
    <Suspense fallback={<div className="min-h-screen p-8 flex items-center justify-center">Loading...</div>}>
      <ResultsContent />
    </Suspense>
  );
}

function ResultsContent() {
  const params = useSearchParams();
  const router = useRouter();
  const [ratings, setRatings] = useState<Record<string, number>>({});

  useEffect(() => {
    const dataParam = params.get("data");
    if (!dataParam) return;
    try {
      const parsed = JSON.parse(decodeURIComponent(dataParam));
      if (parsed && typeof parsed === "object") {
        setRatings(parsed as Record<string, number>);
      }
    } catch (error) {
      console.error("Failed to parse results data", error);
    }
  }, [params]);

  const hasRatings = useMemo(() => Object.keys(ratings).length > 0, [ratings]);

  function handleSurprise(id: string) {
    router.push(`/duel?pref=${id}`);
  }

  function handleReset() {
    router.push("/");
  }

  return (
    <div className="min-h-screen p-8 flex flex-col items-center gap-6">
      <h1 className="text-3xl font-bold">Your Results</h1>
      {!hasRatings ? (
        <p className="text-gray-600">No results yet. Do a few rounds first.</p>
      ) : (
        <ResultsList groups={foodGroups} ratings={ratings} topN={3} onSurprise={handleSurprise} />
      )}
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


