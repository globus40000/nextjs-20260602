import { ComponentProps, FC } from "react";

type Props = Omit<ComponentProps<"button">, "type"> & {
  label?: string;
};

export const SubmitButton: FC<Props> = ({ label = "Submit", ...props }) => {
  return (
    <button
      type="submit"
      className="rounded-md bg-blue-600 px-4 py-2 text-sm font-semibold text-white cursor-pointer focus:outline-blue-800 disabled:cursor-not-allowed disabled:opacity-60"
      {...props}
    >
      {label}
    </button>
  );
};
