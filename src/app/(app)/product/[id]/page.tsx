import { Loading } from "@/components/Loading/loading";
import { ProductContainer } from "@/components/Product/product-container";
import { FC, Suspense } from "react";

const ProductPage: FC<PageProps<"/product/[id]">> = async ({ params }) => {
  const { id } = await params;

  return (
    <div>
      <article>
        <Suspense fallback={<Loading />}>
          <ProductContainer id={parseInt(id)} />
        </Suspense>
      </article>
    </div>
  );
};

export default ProductPage;
