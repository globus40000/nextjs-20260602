import { Link } from "@/components/common/Link/link";
import { ArrowUpRightIcon } from "@/icons/arrow-up-right-icon";
import { ProductType } from "@/types/products";
import { FC } from "react";

type LinkAllProps = {
  productType: ProductType;
  title?: string;
};

export const LinkAll: FC<LinkAllProps> = ({ productType, title = "Все" }) => {
  return (
    <Link
      href={`/products?type=${productType}`}
      className="inline-flex items-center gap-1 text-sm text-blue-500"
      target="_blank"
      rel="noopener noreferrer"
    >
      {title}
      <ArrowUpRightIcon className="w-[1.2em] h-[1.2em]" />
    </Link>
  );
};
