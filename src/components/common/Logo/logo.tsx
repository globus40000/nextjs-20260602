import { FC } from "react";
import { Link } from "@/components/common/Link/link";

export const Logo: FC = () => {
  return (
    <div className="uppercase text-lg text-gray-800">
      <Link href="/">Tennis store</Link>
    </div>
  );
};
