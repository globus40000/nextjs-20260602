import { SpinnerIcon } from "@/icons/spinner-icon";
import { ComponentProps, FC } from "react";

type Props = Omit<ComponentProps<"button">, "type"> & {
  label?: string;
  isLoading?: boolean;
};

export const SubmitButton: FC<Props> = ({
  label = "Submit",
  isLoading = false,
  ...props
}) => {
  return (
    <button
      type="submit"
      className="rounded-md bg-blue-600 px-4 py-2 text-sm font-semibold text-white cursor-pointer flex justify-center items-center gap-2 focus:outline-blue-800 disabled:cursor-not-allowed disabled:opacity-60"
      {...props}
    >
      {isLoading && <SpinnerIcon className="h-4 w-4" />}
      {label}
    </button>
  );
};
