import { BrandFilter } from "@/components/BrandFilter/brand-filter";
import { getBrands } from "@/services/get-brands";
import { notFound } from "next/navigation";
import { FC } from "react";

export const BrandFilterContainer: FC = async () => {
  const { isError, data: brands } = await getBrands();

  if (isError) {
    throw new Error("Something went wrong");
  }
  if (!brands) {
    return notFound();
  }

  return <BrandFilter brands={brands} />;
};
