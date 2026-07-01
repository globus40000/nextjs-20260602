import { SpinnerIcon } from "@/icons/spinner-icon";
import { Button } from "@/ui/button";
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
    <Button type="submit" {...props}>
      {isLoading && <SpinnerIcon className="h-4 w-4" />}
      {label}
    </Button>
  );
};
