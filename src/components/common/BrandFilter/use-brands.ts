import { Brand } from "@/types/products";
import { useSearchParams } from "next/navigation";
import { ChangeEventHandler, useCallback, useState } from "react";

type BrandId = Brand["id"] | "all";

const getNameById = (brands: Brand[], id: Brand["id"]) => {
  return brands.find((brand) => brand.id === id)?.name;
};

const getIdByName = (brands: Brand[], name: string) => {
  return brands.find((brand) => brand.name === name)?.id;
};

const getIdInitial = (brands: Brand[], searchParams: URLSearchParams) => {
  let result: BrandId = "all";
  const brand = searchParams.get("brand");

  if (brand) {
    const id = getIdByName(brands, brand);

    if (id) {
      result = id;
    }
  }

  return result;
};

const updateBrand = (
  id: BrandId,
  brands: Brand[],
  searchParams: URLSearchParams,
) => {
  const newSearchParams = new URLSearchParams(searchParams);

  if (id === "all") {
    newSearchParams.delete("brand");
  } else {
    const name = getNameById(brands, id);

    if (name) {
      newSearchParams.set("brand", name);
    }
  }

  newSearchParams.set("page", "1");

  window.history.pushState({}, "", `?${newSearchParams.toString()}`);
};

export const useBrands = (brands: Brand[]) => {
  const searchParams = useSearchParams();

  const [brandId, setBrandId] = useState<BrandId>(() =>
    getIdInitial(brands, searchParams),
  );

  const handleChangeBrand: ChangeEventHandler<HTMLInputElement> = useCallback(
    (e) => {
      const { value } = e.target;
      const newBrandId = value === "all" ? value : parseInt(value);

      setBrandId(newBrandId);
      updateBrand(newBrandId, brands, searchParams);
    },
    [brands, searchParams],
  );

  return { brandId, handleChangeBrand };
};
