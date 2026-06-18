import { Link } from "@/components/Link/link";
import { Product } from "@/types/products";
import Image from "next/image";
import { FC } from "react";

type ProductCardProps = {
  product: Product;
};

export const ProductCard: FC<ProductCardProps> = ({ product }) => {
  const { id, imageUrl, name } = product;

  return (
    <div>
      <Link href={`/product/${id}`}>
        <Image
          src={imageUrl}
          alt={name}
          width={440}
          height={560}
          className="object-cover aspect-440/560 border rounded-lg border-gray-200 shadow-xs"
          loading="eager"
        />
        <h3 className="text-gray-700 text-sm mt-4">{name}</h3>
      </Link>
    </div>
  );
};
