export interface Product {
  id: string;
  edition: string;
  name: string;
  price: string;
  category: "memory" | "nature" | "urban" | "intimate";
  image: string;
}

export const products: Product[] = [
  {
    id: "001",
    edition: "001",
    name: "morning fog, old books",
    price: "285",
    category: "memory",
    image:
      "https://images.unsplash.com/photo-1541643600914-78b084683601?w=600&q=80",
  },
  {
    id: "002",
    edition: "002",
    name: "cedar and rain",
    price: "285",
    category: "nature",
    image:
      "https://images.unsplash.com/photo-1594035910387-fea47794261f?w=600&q=80",
  },
  {
    id: "003",
    edition: "003",
    name: "city at 3am",
    price: "285",
    category: "urban",
    image:
      "https://images.unsplash.com/photo-1619994121345-223317e2e0e6?w=600&q=80",
  },
  {
    id: "004",
    edition: "004",
    name: "skin and salt",
    price: "285",
    category: "intimate",
    image:
      "https://images.unsplash.com/photo-1587017539504-67cfbddac569?w=600&q=80",
  },
  {
    id: "005",
    edition: "005",
    name: "grandmother's garden",
    price: "285",
    category: "memory",
    image:
      "https://images.unsplash.com/photo-1595425970377-c9703cf48b6d?w=600&q=80",
  },
  {
    id: "006",
    edition: "006",
    name: "open field, wind",
    price: "285",
    category: "nature",
    image:
      "https://images.unsplash.com/photo-1619994121345-223317e2e0e6?w=600&q=80",
  },
];
