import { BrandFilterContainer } from "@/components/BrandFilter/brand-filter-container";
import { Loading } from "@/components/Loading/loading";
import { ProductsListContainer } from "@/components/ProductsList/products-list-container";
import { FC, Suspense } from "react";

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
          <ProductsListContainer />
        </Suspense>
      </div>
    </div>
  );
};

export default ProductsPage;
