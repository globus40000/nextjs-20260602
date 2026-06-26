import { FC } from "react";

type ChevronRightIconProps = {
  className?: string;
};

export const ChevronRightIcon: FC<ChevronRightIconProps> = ({ className }) => {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      xmlns="http://w3.org"
      className={className}
    >
      <path d="M9 18L15 12L9 6" />
    </svg>
  );
};
