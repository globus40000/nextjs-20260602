import { ProductsSlider } from "@/components/common/ProductsSlider/products-slider";
import { type ApiResponse } from "@/types/api";
import { type Product } from "@/types/products";
import { FC } from "react";

type Props = {
  promiseGetProducts: ApiResponse<Product[]>;
};

export const ProductsSliderContainer: FC<Props> = async ({
  promiseGetProducts,
}) => {
  const { isError, data: products = [] } = await promiseGetProducts;

  if (isError) {
    throw new Error("Something went wrong");
  }

  return <ProductsSlider products={products} />;
};
