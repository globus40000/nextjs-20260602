import { Product } from "@/components/Product/product";
import { rackets } from "@/mocks/rackets";
import { notFound } from "next/navigation";
import { FC } from "react";

type ProductContainerProps = {
  id: number;
};

export const ProductContainer: FC<ProductContainerProps> = ({ id }) => {
  const product = rackets.find(({ id: racketId }) => racketId === id);

  if (!product) {
    return notFound();
  }

  return (
    <div>
      <Product product={product} />
    </div>
  );
};
