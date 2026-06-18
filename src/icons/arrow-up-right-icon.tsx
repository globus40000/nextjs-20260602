import { FC } from "react";

type ArrowUpRightIconProps = {
  className?: string;
};

export const ArrowUpRightIcon: FC<ArrowUpRightIconProps> = ({ className }) => {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      xmlns="http://w3.org"
      className={className}
    >
      <path
        d="M7 17L17 7M17 7H7M17 7V17"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};
