"use client";

import { brands } from "@/mocks/brands";
import { Brand } from "@/types/products";
import { ChangeEventHandler, FC, useState } from "react";

export const BrandFilter: FC = () => {
  const [brandId, setBrandId] = useState<Brand["id"] | "all">("all");

  const handleChangeBrand: ChangeEventHandler<HTMLInputElement> = (e) => {
    const { value } = e.target;

    setBrandId(value === "all" ? value : parseInt(value));
  };

  return (
    <fieldset className="pl-8 pr-4">
      <legend className="text-xs font-medium text-gray-400">Бренд</legend>
      <ul className="flex flex-col gap-2 mt-3">
        {[{ id: "all", name: "All" }, ...brands].map(({ id, name }) => (
          <li key={id} className="flex items-center relative">
            <input
              type="radio"
              id={`${id}`}
              name="brand"
              value={id}
              className="w-1 h-1 appearance-none rounded-full checked:bg-gray-600 absolute -left-4"
              checked={id === brandId}
              onChange={handleChangeBrand}
            />
            <label
              htmlFor={`${id}`}
              className="cursor-pointer text-sm text-gray-700"
            >
              {name}
            </label>
          </li>
        ))}
      </ul>
    </fieldset>
  );
};
