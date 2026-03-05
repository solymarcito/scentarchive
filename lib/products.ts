// Bottle images in public/images/ — use bottle-small.png, bottle-medium.png, bottle-large.png
export const BOTTLE_SIZES = [
  { oz: "0.34", price: 30, label: "0.34 OZ", imagePath: "/images/bottle-small.png" },
  { oz: "1", price: 60, label: "1 OZ", imagePath: "/images/bottle-medium.png" },
  { oz: "2.5", price: 140, label: "2.5 OZ", imagePath: "/images/bottle-large.png" },
] as const;

export interface Product {
  id: string;
  edition: string;
  name: string;
  category: "memory" | "nature" | "urban" | "intimate";
}

export const products: Product[] = [
  { id: "001", edition: "001", name: "morning fog, old books", category: "memory" },
  { id: "002", edition: "002", name: "cedar and rain", category: "nature" },
  { id: "003", edition: "003", name: "city at 3am", category: "urban" },
  { id: "004", edition: "004", name: "skin and salt", category: "intimate" },
  { id: "005", edition: "005", name: "grandmother's garden", category: "memory" },
  { id: "006", edition: "006", name: "open field, wind", category: "nature" },
];
