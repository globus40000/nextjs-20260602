import { ComponentProps, FC } from "react";

type Props = ComponentProps<"input"> & {
  label: string;
};

export const FormInput: FC<Props> = ({ type, name, label, ...props }) => {
  return (
    <div className="flex flex-col gap-1">
      <label htmlFor={name} className="text-xs text-gray-500">
        {label}
      </label>
      <input
        type={type}
        id={name}
        name={name}
        className="border border-gray-300 rounded px-3 py-1.5 focus:outline-blue-500 disabled:bg-gray-100 disabled:text-gray-600"
        {...props}
      />
    </div>
  );
};
