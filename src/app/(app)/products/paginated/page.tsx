import { BrandFilterContainer } from "@/components/common/BrandFilter/brand-filter-container";
import { Loading } from "@/components/common/Loading/loading";
import { ProductsListPaginatedContainer } from "@/components/common/ProductsListPaginated/products-list-paginated-container";
import { Metadata } from "next";
import { FC, Suspense } from "react";

export const metadata: Metadata = {
  title: "Купить теннисные ракетки: каталог, цены, отзывы — Tennis Store",
  description:
    "В нашем каталоге представлены профессиональные и любительские теннисные ракетки. Фильтрация по брендам",
};

const ProductsPaginatedPage: FC = () => {
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
          <ProductsListPaginatedContainer />
        </Suspense>
      </div>
    </div>
  );
};

export default ProductsPaginatedPage;
