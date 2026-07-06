import { ProductsList } from "@/components/common/ProductsList/products-list";
import { type ApiResponse } from "@/types/api";
import { type Product } from "@/types/products";
import { FC } from "react";

type Props = {
  promiseGetProducts: ApiResponse<Product[]>;
};

export const ProductsListContainer: FC<Props> = async ({
  promiseGetProducts,
}) => {
  const { isError, data: products = [] } = await promiseGetProducts;

  if (isError) {
    throw new Error("Something went wrong");
  }

  return <ProductsList products={products} />;
};
