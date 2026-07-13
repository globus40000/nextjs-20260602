import { ChevronLeftIcon } from "@/components/icons/chevron-left-icon";
import clsx from "clsx";
import { ComponentProps, FC } from "react";

type Props = Omit<ComponentProps<"button">, "type" | "children">;

export const ButtonLeft: FC<Props> = ({ className, ...props }) => {
  return (
    <button
      type="button"
      className={clsx(
        "w-10 h-10 text-gray-400 cursor-pointer disabled:cursor-not-allowed disabled:opacity-30",
        className,
      )}
      {...props}
    >
      <ChevronLeftIcon />
    </button>
  );
};
