import { BrandFilter } from "@/components/BrandFilter/brand-filter";
import { ProductsList } from "@/components/ProductsList/products-list";
import { rackets } from "@/mocks/rackets";
import { FC } from "react";

const ProductsPage: FC = () => {
  return (
    <div className="grid grid-cols-[5fr_14fr_5fr]">
      <aside>
        <BrandFilter />
      </aside>
      <div>
        <h1 className="text-3xl font-semibold">Ракетки</h1>
        <ProductsList products={rackets} />
      </div>
    </div>
  );
};

export default ProductsPage;
