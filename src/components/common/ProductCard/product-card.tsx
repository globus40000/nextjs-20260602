import { Link } from "@/components/common/Link/link";
import { ToggleIsFavorite } from "@/components/common/ToggleIsFavorite/toggle-is-favorite";
import { Product } from "@/types/products";
import Image from "next/image";
import { ComponentProps, FC } from "react";

type NextImageProps = ComponentProps<typeof Image>;

type ProductCardProps = {
  product: Product;
  hLevel: 2 | 3;
} & Pick<NextImageProps, "loading" | "preload">;

export const ProductCard: FC<ProductCardProps> = ({
  product,
  hLevel,
  loading,
  preload,
}) => {
  const { id, imageUrl, name } = product;

  return (
    <div className="relative">
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
        {hLevel === 2 && (
          <h2 className="text-gray-700 text-sm text-center mt-4">{name}</h2>
        )}
        {hLevel === 3 && (
          <h3 className="text-gray-700 text-sm text-center mt-4">{name}</h3>
        )}
      </Link>
      <ToggleIsFavorite product={product} className="absolute top-0 right-0" />
    </div>
  );
};
