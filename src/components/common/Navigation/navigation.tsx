import { CurrentUserNavItem } from "@/components/common/CurrentUserNavItem/current-user-nav-item";
import { Link } from "@/components/common/Link/link";
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
        <li>
          <Link href="/products/top-10" highlightIfActive>
            Топ-10
          </Link>
        </li>
        <li>
          <CurrentUserNavItem />
        </li>
      </ul>
    </nav>
  );
};
