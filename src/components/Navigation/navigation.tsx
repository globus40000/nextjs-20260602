import { Link } from "@/components/Link/link";
import { FC } from "react";

export const Navigation: FC = () => {
  return (
    <nav>
      <ul className="flex gap-6 text-xs text-gray-700">
        <li>
          <Link href="/" highlightIfActive>
            Главная
          </Link>
        </li>
        <li>
          <Link href="/products" highlightIfActive>
            Каталог
          </Link>
        </li>
      </ul>
    </nav>
  );
};
