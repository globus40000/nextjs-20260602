"use client";

import clsx from "clsx";
import NextLink from "next/link";
import { usePathname } from "next/navigation";
import { ComponentProps, FC } from "react";

type LinkProps = ComponentProps<typeof NextLink> & {
  highlightIfActive?: boolean;
};

export const Link: FC<LinkProps> = ({
  href,
  prefetch = false,
  highlightIfActive = false,
  className,
  children,
  ...rest
}) => {
  const pathname = usePathname();
  const isLinkActive = href === pathname;

  return (
    <NextLink
      href={href}
      prefetch={prefetch}
      className={clsx(className, {
        "text-orange-400": highlightIfActive && isLinkActive,
      })}
      {...rest}
    >
      {children}
    </NextLink>
  );
};
