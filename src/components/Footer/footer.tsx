import { FC } from "react";

export const Footer: FC = () => {
  return (
    <div className="text-xs text-gray-500 pt-4 pb-3">
      &copy; {new Date().getFullYear()} Tennis Store. All rights reserved.
    </div>
  );
};
