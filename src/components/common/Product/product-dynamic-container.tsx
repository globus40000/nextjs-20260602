"use client";

import { Loading } from "@/components/common/Loading/loading";
import { Product } from "@/types/products";
import dynamic from "next/dynamic";
import { FC } from "react";

const ProductClientContainerDynamic = dynamic(
  () => import("@/components/common/Product/product-client-container"),
  {
    ssr: false,
    loading: () => <Loading />,
  },
);

type Props = {
  id: Product["id"];
};

export const ProductDynamicContainer: FC<Props> = ({ id }) => {
  return (
    <div>
      <ProductClientContainerDynamic id={id} />
    </div>
  );
};
