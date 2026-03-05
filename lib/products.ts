export interface Product {
  id: string;
  edition: string;
  name: string;
  size: string;
  price: string;
  /** Display subtitle: "the introduction" | "the archive" | "the permanence" */
  subtitle: string;
  category: string;
  image: string;
  description: string;
}

export const products: Product[] = [
  {
    id: "etat-small",
    edition: "ÉDITION 001",
    name: "your état",
    size: "0.34 oz",
    price: "$30",
    subtitle: "the introduction",
    category: "all",
    image: "/images/bottle-small.png",
    description: "a trial. the beginning of your archive.",
  },
  {
    id: "etat-medium",
    edition: "ÉDITION 002",
    name: "your état",
    size: "1 oz",
    price: "$60",
    subtitle: "the archive",
    category: "all",
    image: "/images/bottle-medium.png",
    description: "your formula, held.",
  },
  {
    id: "etat-large",
    edition: "ÉDITION 003",
    name: "your état",
    size: "2.5 oz",
    price: "$140",
    subtitle: "the permanence",
    category: "all",
    image: "/images/bottle-large.png",
    description: "the full archive. permanent.",
  },
];
