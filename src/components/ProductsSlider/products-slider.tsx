"use client";

import { ProductCard } from "@/components/ProductCard/product-card";
import Slider from "@/components/Slider/slider";
import { Product } from "@/types/products";
import { FC } from "react";

type ProductsSliderProps = {
  products: Product[];
};

export const ProductsSlider: FC<ProductsSliderProps> = ({ products }) => {
  return (
    <div>
      <Slider
        items={products}
        renderItem={(product) => {
          return (
            <article>
              <ProductCard product={product} />
            </article>
          );
        }}
      />
    </div>
  );
};
