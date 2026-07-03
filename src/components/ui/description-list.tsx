import clsx from "clsx";
import { FC, ReactNode } from "react";

type Item = {
  term: string;
  description: ReactNode;
};

type Props = {
  items: Item[];
  hasDelimiter?: boolean;
};

export const DescriptionList: FC<Props> = ({ items, hasDelimiter = true }) => {
  return (
    <dl
      className={clsx("bg-gray-50 p-6 rounded-lg border border-gray-100", {
        "divide-y divide-gray-200": hasDelimiter,
      })}
    >
      {items.map(({ term, description }) => (
        <div className="flex py-4 first:pt-0 last:pb-0" key={term}>
          <dt className="shrink-0 w-24 text-gray-500 font-medium">{term}</dt>
          <dd className="text-gray-900 font-semibold">{description}</dd>
        </div>
      ))}
    </dl>
  );
};
