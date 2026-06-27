import { BrandFilterContainer } from "@/components/BrandFilter/brand-filter-container";
import { ProductsListContainer } from "@/components/ProductsList/products-list-container";
import { FC } from "react";

const ProductsPage: FC = () => {
  return (
    <div className="grid grid-cols-[5fr_14fr_5fr]">
      <aside>
        <BrandFilterContainer />
      </aside>
      <div>
        <h1 className="text-3xl font-semibold">Ракетки</h1>
        <ProductsListContainer />
      </div>
    </div>
  );
};

export default ProductsPage;
