"use client";

import { FavoriteContext } from "@/providers/FavoriteContextProvider/favorite-context";
import { useFavorite } from "@/providers/FavoriteContextProvider/use-favorite";
import { FC, PropsWithChildren } from "react";

export const FavoriteContextProvider: FC<PropsWithChildren> = ({
  children,
}) => {
  const { isFavoriteMap, setIsFavorite } = useFavorite();

  return (
    <FavoriteContext value={{ isFavoriteMap, setIsFavorite }}>
      {children}
    </FavoriteContext>
  );
};
