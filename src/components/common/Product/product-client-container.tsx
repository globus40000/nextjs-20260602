"use client";

import { ErrorMessage } from "@/components/common/ErrorMessage/error-message";
import { Loading } from "@/components/common/Loading/loading";
import { NotFoundView } from "@/components/common/NotFoundView/not-found-view";
import { Product } from "@/components/common/Product/product";
import { useProductById } from "@/swr/products/use-product-by-id";
import { type Product as TypeProduct } from "@/types/products";
import { FC } from "react";

type Props = {
  id: TypeProduct["id"];
};

export const ProductClientContainer: FC<Props> = ({ id }) => {
  const { isLoading, error, data: product } = useProductById(id);

  if (isLoading) {
    return <Loading />;
  }
  if (error) {
    return <ErrorMessage />;
  }
  if (!product) {
    return <NotFoundView />;
  }

  return (
    <div>
      <Product product={product} />
    </div>
  );
};

export default ProductClientContainer;
