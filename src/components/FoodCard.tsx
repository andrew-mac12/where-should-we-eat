"use client";

import type { FoodGroup } from "@/lib/foodGroups";
import Image from "next/image";
import React, { useEffect, useMemo, useState } from "react";

type FoodCardProps = {
  food: FoodGroup;
  onSelect?: (foodId: string) => void;
  disabled?: boolean;
};

export function FoodCard({ food, onSelect, disabled }: FoodCardProps) {
  const initialSrc = useMemo(() => `/images/food-groups/${food.id}.webp`, [food.id]);
  const [imgSrc, setImgSrc] = useState<string>(initialSrc);
  const [hideImage, setHideImage] = useState<boolean>(false);

  function handleImageError() {
    if (imgSrc.endsWith(".webp")) {
      setImgSrc(`/images/food-groups/${food.id}.png`);
    } else {
      setHideImage(true);
    }
  }

  useEffect(() => {
    // Reset when the food changes so we try WebP first, then PNG fallback
    setImgSrc(`/images/food-groups/${food.id}.webp`);
    setHideImage(false);
  }, [food.id]);
  return (
    <button
      type="button"
      disabled={disabled}
      onClick={() => onSelect?.(food.id)}
      className="p-6 border rounded-lg bg-transparent transition-shadow disabled:opacity-50 disabled:cursor-not-allowed w-full sm:w-[340px] text-left hover:shadow-md hover:border-gray-300 dark:hover:border-gray-600 flex flex-col mx-auto"
    >
      {!hideImage && (
        <div className="relative w-full rounded-md overflow-hidden mb-3" style={{ aspectRatio: "4 / 3" }}>
          <Image
            src={imgSrc}
            alt={food.name}
            fill
            sizes="(min-width: 1024px) 320px, 100vw"
            className="object-cover"
            priority
            onError={handleImageError}
          />
        </div>
      )}
      <div className="text-xl font-semibold mb-2 line-clamp-2 min-h-[3.25rem]">{food.name}</div>
      <div className="text-sm text-gray-600 line-clamp-3">{food.description}</div>
    </button>
  );
}

export default FoodCard;


