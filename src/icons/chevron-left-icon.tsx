import { FC } from "react";

type ChevronLeftIconProps = {
  className?: string;
};

export const ChevronLeftIcon: FC<ChevronLeftIconProps> = ({ className }) => {
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
      <path d="M15 18L9 12L15 6" />
    </svg>
  );
};
