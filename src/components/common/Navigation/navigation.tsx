"use client";

import { Link } from "@/components/common/Link/link";
import { AuthContext } from "@/providers/AuthContextProvider/auth-context";
import { FC, useContext } from "react";

export const Navigation: FC = () => {
  const { isAuthorized } = useContext(AuthContext);

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
        {isAuthorized ? (
          <li>
            <Link href="/logout" highlightIfActive>
              Выйти
            </Link>
          </li>
        ) : (
          <li>
            <Link href="/login" highlightIfActive>
              Войти
            </Link>
          </li>
        )}
      </ul>
    </nav>
  );
};
