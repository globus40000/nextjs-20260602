import { ProductContainer } from "@/components/Product/product-container";
import { FC } from "react";

export const generateStaticParams = () => {
  return [{ id: "1" }, { id: "2" }, { id: "3" }];
};

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
