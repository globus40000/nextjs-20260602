import { BrandFilterContainer } from "@/components/common/BrandFilter/brand-filter-container";
import { Loading } from "@/components/common/Loading/loading";
import { ProductsListContainer } from "@/components/common/ProductsList/products-list-container";
import { Metadata } from "next";
import { getProductsTop10 } from "@/services/products/get-products-top-10";
import { FC, Suspense } from "react";

export const metadata: Metadata = {
  title: "Рейтинг теннисных ракеток: Топ-10 лучших моделей — Tennis Store",
  description:
    "Самые популярные и покупаемые теннисные ракетки этого года. Честный топ-10 моделей от Wilson, Head, Babolat с ценами и характеристиками",
};

const ProductsTop10Page: FC = () => {
  return (
    <div className="grid grid-cols-[5fr_14fr_5fr]">
      <aside>
        <Suspense fallback={<Loading />}>
          <BrandFilterContainer />
        </Suspense>
      </aside>
      <div>
        <h1 className="text-3xl font-semibold mb-9">Топ-10 ракеток</h1>
        <Suspense fallback={<Loading />}>
          <ProductsListContainer promiseGetProducts={getProductsTop10()} />
        </Suspense>
      </div>
    </div>
  );
};

export default ProductsTop10Page;
