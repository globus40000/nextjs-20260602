import { BrandFilterContainer } from "@/components/BrandFilter/brand-filter-container";
import { Loading } from "@/components/Loading/loading";
import { ProductsListContainer } from "@/components/ProductsList/products-list-container";
import { Metadata } from "next";
import { getProducts } from "@/services/get-products";
import { FC, Suspense } from "react";

export const metadata: Metadata = {
  title: "Купить теннисные ракетки: каталог, цены, отзывы — Tennis Store",
  description:
    "В нашем каталоге представлены профессиональные и любительские теннисные ракетки. Фильтрация по брендам",
};

const ProductsPage: FC = () => {
  return (
    <div className="grid grid-cols-[5fr_14fr_5fr]">
      <aside>
        <Suspense fallback={<Loading />}>
          <BrandFilterContainer />
        </Suspense>
      </aside>
      <div>
        <h1 className="text-3xl font-semibold mb-9">Ракетки</h1>
        <Suspense fallback={<Loading />}>
          <ProductsListContainer
            promiseGetProducts={getProducts({ page: 1, limit: 20 })}
          />
        </Suspense>
      </div>
    </div>
  );
};

export default ProductsPage;
