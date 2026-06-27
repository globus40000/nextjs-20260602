import { Product } from "@/components/Product/product";
import { rackets } from "@/mocks/rackets";
import { notFound } from "next/navigation";
import { FC } from "react";

const ProductPage: FC<PageProps<"/product/[id]">> = async ({ params }) => {
  const { id } = await params;
  const productId = parseInt(id);
  const product = rackets.find(({ id: racketId }) => racketId === productId);

  if (!product) {
    return notFound();
  }

  return (
    <div>
      <article>
        <Product product={product} />
      </article>
    </div>
  );
};

export default ProductPage;
