import { ProductCard } from "@/components/ProductCard/product-card";
import { CSSPropertiesWithVariables } from "@/types/common";
import { Product } from "@/types/products";
import { FC } from "react";

type ProductsListProps = {
  products: Product[];
};

export const ProductsList: FC<ProductsListProps> = ({ products }) => {
  const cssVarGap: CSSPropertiesWithVariables = {
    "--gap": "20px",
  };

  return (
    <ul className="flex flex-wrap gap-(--gap) mt-9" style={cssVarGap}>
      {products.map((product) => (
        <li
          key={product.id}
          className="grow-0 shrink-0 basis-[calc((100%-2*var(--gap))/3)]"
        >
          <article>
            <ProductCard product={product} hLevel={2} />
          </article>
        </li>
      ))}
    </ul>
  );
};
