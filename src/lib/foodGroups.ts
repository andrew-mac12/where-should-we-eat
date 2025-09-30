export type FoodGroup = {
  id: string;
  name: string;
  tags: string[];
  description: string;
};

export const foodGroups: FoodGroup[] = [
  {
    id: "burgers-fries",
    name: "Burgers & Fries (Fast Food Classics)",
    tags: ["Beef", "Bread", "Fried", "Heavy", "FastFood", "American"],
    description:
      "Juicy burgers (often beef) or crispy chicken sandwiches with fries. A heavy, greasy comfort option iconic to fast-food and casual American dining.",
  },
  {
    id: "pizza-flatbreads",
    name: "Pizza & Flatbreads",
    tags: ["Bread", "Cheesy", "Heavy", "OvenBaked", "Italian", "Takeout"],
    description:
      "Cheesy pizzas and similar oven-baked flatbreads (like focaccia) loaded with toppings. A carb-rich, shareable comfort meal popular for takeout or relaxed dine-in gatherings.",
  },
  {
    id: "fried-chicken-wings",
    name: "Fried Chicken & Wings",
    tags: ["Chicken", "Fried", "Heavy", "ComfortFood", "FastFood", "American"],
    description:
      "Crispy fried chicken pieces or Buffalo wings, often served with rich sides (fries, biscuits). An indulgent, hearty comfort food typically found at fast-food chains or casual eateries.",
  },
  {
    id: "bbq-smoked-meats",
    name: "BBQ & Smoked Meats",
    tags: ["Pork", "Beef", "Grilled", "Heavy", "Saucy", "DineIn", "American"],
    description:
      "Slow-smoked barbecue like ribs, brisket, or pulled pork slathered in BBQ sauce. Very hearty and meat-centric, this comfort category is served in smokehouses or BBQ joints (casual dine-in or takeout).",
  },
  {
    id: "steak-chops",
    name: "Steak & Chops (Grilled Meats)",
    tags: ["Beef", "Pork", "Grilled", "Heavy", "DineIn", "Upscale"],
    description:
      "Grilled steaks, pork chops, or lamb chops served as entrées with sides (potatoes, veggies). A heavy, protein-heavy meal usually enjoyed in an upscale dine-in setting (e.g. steakhouses).",
  },
  {
    id: "italian-pasta",
    name: "Italian Pasta Dishes",
    tags: ["Pasta", "Heavy", "Cheesy", "ComfortFood", "Italian", "DineIn"],
    description:
      "Rich pasta meals like spaghetti, lasagna, or fettuccine Alfredo with hearty sauces (tomato, creamy, or cheesy). A heavy and satisfying comfort food staple of Italian cuisine, often for family-style dine-in or takeout.",
  },
  {
    id: "curries-stews",
    name: "Curries & Stews (with Rice or Bread)",
    tags: ["Saucy", "Spicy", "Heavy", "Global", "ComfortFood", "Takeout"],
    description:
      "Thick, sauce-heavy curries and stews (e.g. Indian or Thai curry, chili, beef stew) served over rice or with bread (naan, etc.). These dishes are hearty and often spicy, offering bold flavors – great for a warming dine-in meal or takeout.",
  },
  {
    id: "ramen-noodle-soups",
    name: "Ramen & Noodle Soups",
    tags: ["Noodles", "Soup", "Heavy", "Asian", "ComfortFood", "DineIn"],
    description:
      "Hearty noodle soups such as Japanese ramen or Vietnamese pho, with rich broth, noodles, and proteins. A filling, warming bowl meal that hits the spot on a cold day – typically enjoyed at casual eateries or noodle shops (dine-in).",
  },
  {
    id: "tacos-burritos",
    name: "Tacos & Burritos",
    tags: ["Mexican", "Handheld", "Medium", "SpicyOptional", "StreetFood", "FastCasual"],
    description:
      "Mexican-style handhelds filled with seasoned meat or beans, cheese, veggies, and salsa. Tacos and burritos are moderately heavy, flavorful meals (spice can be adjusted with salsa) ideal for quick bites, food trucks, or fast-casual dining.",
  },
  {
    id: "asian-noodles-stir-fries",
    name: "Asian Noodles & Stir-Fries",
    tags: ["Noodles", "StirFry", "Medium", "Saucy", "Asian", "Takeout"],
    description:
      "Wok-tossed noodle or rice dishes (e.g. Pad Thai, lo mein, fried rice) with vegetables, protein, and savory sauce. A medium-weight meal that’s flavorful and a bit oily, commonly found in Chinese or Thai restaurants for takeout or informal dine-in.",
  },
  {
    id: "sandwiches-wraps",
    name: "Sandwiches & Wraps",
    tags: ["Bread", "Medium", "Variety", "Takeout", "Global"],
    description:
      "Handheld sandwiches, subs, and wraps of all kinds – from deli classics to gyros and shawarmas. Contents vary (cold cuts, grilled meats, veggies), making this a versatile mid-weight category. Convenient for lunch takeout, cafes, or street vendors worldwide.",
  },
  {
    id: "grilled-chicken-kebabs",
    name: "Grilled Chicken & Kebabs",
    tags: ["Chicken", "Grilled", "Medium", "Lean", "Mediterranean", "Takeout"],
    description:
      "Marinated chicken grilled or on skewers (kebabs), sometimes including mixed grill platters. A leaner, moderately heavy protein option often served with rice, salad, or pita. Common in Mediterranean/Middle Eastern cuisine and available as quick takeout or casual dine-in meals.",
  },
  {
    id: "fried-seafood",
    name: "Fried Seafood (Fish & Chips)",
    tags: ["Seafood", "Fried", "Heavy", "ComfortFood", "Casual"],
    description:
      "Battered, deep-fried seafood like fish & chips, fried shrimp or calamari. A greasy, satisfying comfort meal from seafood shacks or pubs, typically heavy and served with sides (fries, coleslaw) – great for casual dine-in or takeout comfort eating.",
  },
  {
    id: "grilled-seafood-fish",
    name: "Grilled Seafood & Fish",
    tags: ["Seafood", "Grilled", "Light", "Healthy", "DineIn"],
    description:
      "Fresh fish or shellfish grilled, baked, or pan-seared (e.g. grilled salmon, shrimp skewers) often with herbs and lemon. A lighter, healthier seafood option served with veggies or grains. Common in seafood restaurants or as a fine dining entrée for a health-conscious choice.",
  },
  {
    id: "sushi-raw-seafood",
    name: "Sushi & Raw Seafood",
    tags: ["Seafood", "Raw", "Light", "Japanese", "Fresh", "DineIn"],
    description:
      "Sushi rolls, sashimi, poke bowls, and similar preparations of raw or lightly marinated seafood. A light, clean-tasting category focusing on fresh fish and rice, usually enjoyed at sushi bars or via specialty takeout, offering a refined dine-in experience.",
  },
];


