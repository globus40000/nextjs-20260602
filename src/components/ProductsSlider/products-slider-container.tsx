import { ProductsSlider } from "@/components/ProductsSlider/products-slider";
import { getProducts } from "@/services/get-products";
import { notFound } from "next/navigation";
import { FC } from "react";

export const ProductsSliderContainer: FC = async () => {
  const { isError, data: products } = await getProducts({ page: 1, limit: 10 });

  if (isError) {
    throw new Error("Something went wrong");
  }
  if (!products) {
    return notFound();
  }

  return <ProductsSlider products={products} />;
};
