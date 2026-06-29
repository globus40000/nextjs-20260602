import { ProductsSlider } from "@/components/ProductsSlider/products-slider";
import { getProducts } from "@/services/get-products";
import { getProductsTop10 } from "@/services/get-products-top-10";
import { notFound } from "next/navigation";
import { FC } from "react";

type Props = {
  top10?: boolean;
};

export const ProductsSliderContainer: FC<Props> = async ({ top10 = false }) => {
  const { isError, data: products } = top10
    ? await getProductsTop10()
    : await getProducts({ page: 1, limit: 10 });

  if (isError) {
    throw new Error("Something went wrong");
  }
  if (!products) {
    return notFound();
  }

  return <ProductsSlider products={products} />;
};
