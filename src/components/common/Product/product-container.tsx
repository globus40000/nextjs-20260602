import { Product } from "@/components/common/Product/product";
import { getProductById } from "@/services/get-product-by-id";
import { Product as TypeProduct } from "@/types/products";
import { notFound } from "next/navigation";
import { FC } from "react";

type ProductContainerProps = {
  id: TypeProduct["id"];
};

export const ProductContainer: FC<ProductContainerProps> = async ({ id }) => {
  const { isError, data: product } = await getProductById(id);

  if (isError) {
    throw new Error("Something went wrong");
  }
  if (!product) {
    return notFound();
  }

  return (
    <div>
      <Product product={product} />
    </div>
  );
};
