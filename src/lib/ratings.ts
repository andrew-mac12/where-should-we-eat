export type Ratings = Record<string, number>;

export function createInitialRatings(ids: string[], initial: number = 1500): Ratings {
  return ids.reduce<Ratings>((accumulator, id) => {
    accumulator[id] = initial;
    return accumulator;
  }, {});
}

export function updateRatings(ratings: Ratings, winner: string, loser: string): Ratings {
  const K = 32;
  const winnerRating = ratings[winner];
  const loserRating = ratings[loser];

  const expectedWinner = 1 / (1 + 10 ** ((loserRating - winnerRating) / 400));
  const expectedLoser = 1 - expectedWinner;

  const nextRatings: Ratings = { ...ratings };
  nextRatings[winner] = winnerRating + K * (1 - expectedWinner);
  nextRatings[loser] = loserRating + K * (0 - expectedLoser);
  return nextRatings;
}


