import { ProductsList } from "@/components/ProductsList/products-list";
import { rackets } from "@/mocks/rackets";
import { FC } from "react";

export const ProductsListContainer: FC = () => {
  return <ProductsList products={rackets} />;
};
