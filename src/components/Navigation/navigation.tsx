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
          <Link href="/rackets" highlightIfActive>
            Ракетки
          </Link>
        </li>
      </ul>
    </nav>
  );
};
