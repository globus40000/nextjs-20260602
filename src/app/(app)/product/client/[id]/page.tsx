import { ProductClientContainer } from "@/components/common/Product/product-client-container";
import { API_ROUTES } from "@/constants/api";
import { getProductById } from "@/services/products/get-product-by-id";
import { getProductMetaById } from "@/services/products/get-product-meta-by-id";
import { Metadata } from "next";
import { notFound } from "next/navigation";
import { FC } from "react";
import { SWRConfig } from "swr";

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
  const productId = parseInt(id);
  const { data: product } = await getProductMetaById(productId);

  if (!product) {
    return notFound();
  }

  return (
    <div>
      <article>
        <SWRConfig
          value={{
            fallback: {
              [API_ROUTES.products.byId(productId)]:
                await getProductById(productId),
            },
            revalidateIfStale: false,
            revalidateOnFocus: false,
          }}
        >
          <ProductClientContainer id={productId} />
        </SWRConfig>
      </article>
    </div>
  );
};

export default ProductClientPage;
