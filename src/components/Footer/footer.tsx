import { FC } from "react";

export const Footer: FC = () => {
  return (
    <div className="text-xs text-gray-500">
      &copy; {new Date().getFullYear()} Tennis Store. All rights reserved.
    </div>
  );
};
