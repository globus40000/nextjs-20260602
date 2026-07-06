"use client";

import { ProductCard } from "@/components/common/ProductCard/product-card";
import Slider from "@/components/common/Slider/slider";
import { Product } from "@/types/products";
import { FC } from "react";

type ProductsSliderProps = {
  products: Product[];
};

export const ProductsSlider: FC<ProductsSliderProps> = ({ products }) => {
  return (
    <div>
      {products.length === 0 ? (
        "Нет данных"
      ) : (
        <Slider
          items={products}
          renderItem={(product) => {
            return (
              <article>
                <ProductCard product={product} hLevel={3} />
              </article>
            );
          }}
        />
      )}
    </div>
  );
};
