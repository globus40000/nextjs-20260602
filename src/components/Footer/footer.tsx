import { FC } from "react";

export const Footer: FC = () => {
  return (
    <div className="text-xs text-gray-500 mt-4 mb-3">
      &copy; {new Date().getFullYear()} Tennis Store. All rights reserved.
    </div>
  );
};
