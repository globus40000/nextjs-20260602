import { ToggleIsFavorite } from "@/components/common/ToggleIsFavorite/toggle-is-favorite";
import { type Product as TypeProduct } from "@/types/products";
import Image from "next/image";
import { FC } from "react";

type ProductProps = {
  product: TypeProduct;
};

export const Product: FC<ProductProps> = ({ product }) => {
  const {
    name,
    description,
    brand: { name: brandName },
    imageUrl,
    price,
  } = product;

  return (
    <div className="grid grid-cols-[28fr_44fr_28fr] gap-4">
      <div className="flex flex-col gap-5">
        <p className="text-gray-400">{brandName}</p>
        <h1 className="text-3xl font-medium">{name}</h1>
        <p>{description}</p>
      </div>
      <div className="flex justify-center relative">
        <Image
          src={imageUrl}
          alt={name}
          width={620}
          height={720}
          className="object-cover aspect-620/720 border rounded-lg border-gray-200 shadow-xs"
        />
        <ToggleIsFavorite
          product={product}
          className="absolute top-0 right-0"
        />
      </div>
      <div>
        <p className="text-2xl font-bold">&euro;{price.toFixed(2)}</p>
      </div>
    </div>
  );
};
