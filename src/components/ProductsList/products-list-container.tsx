import { ProductsList } from "@/components/ProductsList/products-list";
import { getProducts } from "@/services/get-products";
import { notFound } from "next/navigation";
import { FC } from "react";

export const ProductsListContainer: FC = async () => {
  const { isError, data: products } = await getProducts();

  if (isError) {
    throw new Error("Something went wrong");
  }
  if (!products) {
    return notFound();
  }

  return <ProductsList products={products} />;
};
