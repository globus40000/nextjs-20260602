export type Brand = {
  id: number;
  name: string;
};

export type ProductType = "racket";

export type Racket = {
  id: number;
  name: string;
  imageUrl: string;
  price: number;
  type: ProductType;
  model: string;
  year: number;
  top10: boolean;
  description: string;
  brandId: number;
  brand: Brand;
};
