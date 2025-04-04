
export type Product = {
  id: number;
  name: string;
  description: string;
  price: number;
  image: string;
  category: string;
  featured: boolean;
  ingredients?: string[];
  nutritionFacts?: {
    calories: number;
    fat: number;
    sugar: number;
    protein: number;
  };
  allergens?: string[];
};

export type CartItem = {
  product: Product;
  quantity: number;
};
