"use client";

import { ErrorMessage } from "@/components/common/ErrorMessage/error-message";
import { Loading } from "@/components/common/Loading/loading";
import { ProductsListPaginated } from "@/components/common/ProductsListPaginated/products-list-paginated";
import { useProducts } from "@/swr/products/use-products";
import { useSearchParams } from "next/navigation";
import { FC } from "react";

const pageSize = 6;

export const ProductsListPaginatedContainer: FC = () => {
  const searchParams = useSearchParams();
  const page = parseInt(searchParams.get("page") ?? "1");
  const {
    isLoading,
    error,
    data: products = [],
  } = useProducts({ page, limit: pageSize });

  const updatePage = (page: number) => {
    window.history.pushState({}, "", `?page=${page}`);
  };

  if (isLoading) {
    return <Loading />;
  }
  if (error) {
    return <ErrorMessage />;
  }

  return (
    <ProductsListPaginated
      products={products}
      page={page}
      increment={() => updatePage(page + 1)}
      decrement={() => updatePage(page - 1)}
      isLastPage={products.length < pageSize}
    />
  );
};
