import { Loading } from "@/components/common/Loading/loading";
import { ProductContainer } from "@/components/common/Product/product-container";
import { getProductMetaById } from "@/services/products/get-product-meta-by-id";
import { Metadata } from "next";
import { notFound } from "next/navigation";
import { FC, Suspense } from "react";

type Props = PageProps<"/product/[id]">;

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { id } = await params;
  const { data: product } = await getProductMetaById(parseInt(id));

  if (!product) {
    return { title: "Товар не найден — Tennis Store" };
  }

  return {
    title: `Купить ${product.name} — Tennis Store`,
    description: `Подробные характеристики товара ${product.name}, отзывы и доставка`,
  };
}

const ProductPage: FC<Props> = async ({ params }) => {
  const { id } = await params;
  const { data: product } = await getProductMetaById(parseInt(id));

  if (!product) {
    return notFound();
  }

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
