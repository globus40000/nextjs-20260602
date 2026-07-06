import { BrandFilter } from "@/components/common/BrandFilter/brand-filter";
import { getBrands } from "@/services/products/get-brands";
import { FC } from "react";

export const BrandFilterContainer: FC = async () => {
  const { data: brands = [] } = await getBrands();

  return <BrandFilter brands={brands} />;
};
