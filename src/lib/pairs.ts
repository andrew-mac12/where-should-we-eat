import type { FoodGroup } from "@/lib/foodGroups";
import type { Ratings } from "@/lib/ratings";

export function pickPair(groups: FoodGroup[]): [FoodGroup, FoodGroup] {
  if (groups.length < 2) {
    throw new Error("Need at least two food groups to pick a pair");
  }
  const shuffled = [...groups].sort(() => 0.5 - Math.random());
  return [shuffled[0], shuffled[1]];
}

/**
 * Picks a balanced pair by prioritizing items with the fewest appearances (seenCounts),
 * then choosing the second item close in rating to the first to produce informative comparisons.
 */
export function pickBalancedPair(
  groups: FoodGroup[],
  ratings: Ratings,
  seenCounts: Record<string, number>
): [FoodGroup, FoodGroup] {
  if (groups.length < 2) {
    throw new Error("Need at least two food groups to pick a pair");
  }

  // Default counts to 0 if missing
  const countFor = (id: string) => seenCounts[id] ?? 0;

  // Sort by fewest appearances first
  const bySeen = [...groups].sort((a, b) => countFor(a.id) - countFor(b.id));
  const first = bySeen[0];

  // Candidate pool: items with near-min appearances (within +1 of min)
  const minSeen = countFor(first.id);
  const candidatePool = bySeen.filter((g) => countFor(g.id) <= minSeen + 1 && g.id !== first.id);
  const pool = candidatePool.length > 0 ? candidatePool : bySeen.filter((g) => g.id !== first.id);

  // Choose the second closest in rating to the first (for more signal)
  const firstRating = ratings[first.id] ?? 1500;
  let second = pool[0];
  let smallestDiff = Number.POSITIVE_INFINITY;
  for (const g of pool) {
    const diff = Math.abs((ratings[g.id] ?? 1500) - firstRating);
    if (diff < smallestDiff) {
      smallestDiff = diff;
      second = g;
    }
  }

  return [first, second];
}


