import { BrandFilter } from "@/components/BrandFilter/brand-filter";
import { brands } from "@/mocks/brands";
import { FC } from "react";

export const BrandFilterContainer: FC = () => {
  return <BrandFilter brands={brands} />;
};
