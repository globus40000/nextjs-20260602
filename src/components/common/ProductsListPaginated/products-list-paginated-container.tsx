"use client";

import { ErrorMessage } from "@/components/common/ErrorMessage/error-message";
import { Loading } from "@/components/common/Loading/loading";
import { ProductsListPaginated } from "@/components/common/ProductsListPaginated/products-list-paginated";
import { toParams } from "@/helpers/to-params";
import { useProducts } from "@/swr/products/use-products";
import { useSearchParams } from "next/navigation";
import { FC } from "react";

type Props = {
  pageSize: number;
};

export const ProductsListPaginatedContainer: FC<Props> = ({ pageSize }) => {
  const searchParams = useSearchParams();
  const page = parseInt(searchParams.get("page") ?? "1");
  const params = {
    ...toParams(searchParams),
    page,
    limit: pageSize,
  };
  const { isLoading, error, data: products = [] } = useProducts(params);

  const updatePage = (page: number) => {
    const newSearchParams = new URLSearchParams(searchParams);

    newSearchParams.set("page", `${page}`);
    window.history.pushState({}, "", `?${newSearchParams.toString()}`);
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
