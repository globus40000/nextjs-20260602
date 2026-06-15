import NextLink from "next/link";
import { ComponentProps, FC } from "react";

export const Link: FC<ComponentProps<typeof NextLink>> = ({
  prefetch = false,
  children,
  ...rest
}) => {
  return (
    <NextLink prefetch={prefetch} {...rest}>
      {children}
    </NextLink>
  );
};
