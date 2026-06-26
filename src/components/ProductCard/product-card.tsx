import { Link } from "@/components/Link/link";
import { Product } from "@/types/products";
import Image from "next/image";
import { ComponentProps, FC } from "react";

type NextImageProps = ComponentProps<typeof Image>;

type ProductCardProps = {
  product: Product;
} & Pick<NextImageProps, "loading" | "preload">;

export const ProductCard: FC<ProductCardProps> = ({
  product,
  loading,
  preload,
}) => {
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
          loading={loading}
          preload={preload}
        />
        <h3 className="text-gray-700 text-sm mt-4">{name}</h3>
      </Link>
    </div>
  );
};
