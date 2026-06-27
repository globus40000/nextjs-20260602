import { ProductsSlider } from "@/components/ProductsSlider/products-slider";
import { rackets } from "@/mocks/rackets";
import { FC } from "react";

export const ProductsSliderContainer: FC = () => {
  return <ProductsSlider products={rackets.slice(0, 10)} />;
};
