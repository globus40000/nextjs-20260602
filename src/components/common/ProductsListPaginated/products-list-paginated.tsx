import { Pagination } from "@/components/common/Pagination/pagination";
import { ProductsList } from "@/components/common/ProductsList/products-list";
import { Product } from "@/types/products";
import { FC } from "react";

type Props = {
  products: Product[];
  page: number;
  increment: () => void;
  decrement: () => void;
  isLastPage: boolean;
};

export const ProductsListPaginated: FC<Props> = ({
  products,
  page,
  increment,
  decrement,
  isLastPage,
}) => {
  return (
    <div className="flex flex-col items-center gap-8">
      <ProductsList products={products} />
      <Pagination
        page={page}
        increment={increment}
        decrement={decrement}
        isLastPage={isLastPage}
      />
    </div>
  );
};
