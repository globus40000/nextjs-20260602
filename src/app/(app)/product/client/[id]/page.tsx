import { ProductClientContainer } from "@/components/common/Product/product-client-container";
import { getProductMetaById } from "@/services/products/get-product-meta-by-id";
import { Metadata } from "next";
import { notFound } from "next/navigation";
import { FC } from "react";

type Props = PageProps<"/product/client/[id]">;

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

const ProductClientPage: FC<Props> = async ({ params }) => {
  const { id } = await params;
  const { data: product } = await getProductMetaById(parseInt(id));

  if (!product) {
    return notFound();
  }

  return (
    <div>
      <article>
        <ProductClientContainer id={parseInt(id)} />
      </article>
    </div>
  );
};

export default ProductClientPage;
