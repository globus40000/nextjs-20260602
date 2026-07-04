"use client";

import { HeartIcon } from "@/components/icons/heart-icon";
import { AuthContext } from "@/providers/AuthContextProvider/auth-context";
import { Product } from "@/types/products";
import clsx from "clsx";
import { FC, useContext, useState } from "react";

type Props = {
  product: Product;
  className?: string;
};

export const ToggleIsFavorite: FC<Props> = ({ product, className }) => {
  const { isAuthorized } = useContext(AuthContext);
  const [isFavorite, setIsFavorite] = useState(
    product.userData?.isFavorite ?? false,
  );
  const [isPending, setIsPending] = useState(false);

  const handleClick = () => {
    setIsFavorite(!isFavorite);
    setIsPending(true);

    setTimeout(() => {
      setIsPending(false);
    }, 500);
  };

  if (!isAuthorized) {
    return null;
  }

  return (
    <button
      type="button"
      disabled={isPending}
      onClick={handleClick}
      aria-label={isFavorite ? "Удалить из избранного" : "Добавить в избранное"}
      className={clsx(
        "p-2 cursor-pointer disabled:cursor-not-allowed",
        className,
      )}
    >
      <HeartIcon
        className={clsx(
          "size-8 stroke-current",
          isFavorite && "fill-current text-red-500",
          !isFavorite && "fill-none text-gray-400",
        )}
      />
    </button>
  );
};
