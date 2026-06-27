import { ProductContainer } from "@/components/Product/product-container";
import { FC } from "react";

const ProductPage: FC<PageProps<"/product/[id]">> = async ({ params }) => {
  const { id } = await params;

  return (
    <div>
      <article>
        <ProductContainer id={parseInt(id)} />
      </article>
    </div>
  );
};

export default ProductPage;
