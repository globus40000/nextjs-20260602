import { BrandFilterContainer } from "@/components/BrandFilter/brand-filter-container";
import { Loading } from "@/components/Loading/loading";
import { ProductsListContainer } from "@/components/ProductsList/products-list-container";
import { getProductsTop10 } from "@/services/get-products-top-10";
import { FC, Suspense } from "react";

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
