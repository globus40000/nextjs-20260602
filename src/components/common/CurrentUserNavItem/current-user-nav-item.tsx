"use client";

import { Link } from "@/components/common/Link/link";
import { UserIcon } from "@/components/icons/user-icon";
import { AuthContext } from "@/providers/AuthContextProvider/auth-context";
import { FC, useContext } from "react";

export const CurrentUserNavItem: FC = () => {
  const { isAuthorized } = useContext(AuthContext);

  return (
    <div>
      <Link href={isAuthorized ? "/profile" : "/login"} highlightIfActive>
        <UserIcon className="h-4 w-4" />
        {isAuthorized && (
          <span className="absolute -bottom-0.5 -right-0.5 h-2 w-2 rounded-full bg-green-500 ring-2 ring-white" />
        )}
      </Link>
    </div>
  );
};
