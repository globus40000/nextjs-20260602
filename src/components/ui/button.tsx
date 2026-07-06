import clsx from "clsx";
import { ComponentProps, FC } from "react";

type Props = ComponentProps<"button"> & {
  variant?: "primary" | "secondary";
};

export const Button: FC<Props> = ({
  children,
  variant = "primary",
  ...props
}) => {
  return (
    <button
      className={clsx(
        "rounded-md px-4 py-2 text-sm font-semibold cursor-pointer flex justify-center items-center gap-2 disabled:cursor-not-allowed disabled:opacity-60",
        variant === "primary" &&
          "bg-blue-600 focus:outline-blue-800 text-white",
        variant === "secondary" &&
          "bg-gray-100 focus:outline-gray-200 text-gray-700",
      )}
      {...props}
    >
      {children}
    </button>
  );
};
