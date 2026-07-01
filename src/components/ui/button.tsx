import { ComponentProps, FC } from "react";

type Props = ComponentProps<"button">;

export const Button: FC<Props> = ({ children, ...props }) => {
  return (
    <button
      className="rounded-md bg-blue-600 px-4 py-2 text-sm font-semibold text-white cursor-pointer flex justify-center items-center gap-2 focus:outline-blue-800 disabled:cursor-not-allowed disabled:opacity-60"
      {...props}
    >
      {children}
    </button>
  );
};
