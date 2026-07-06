"use client";

import { User } from "@/types/users";
import { createContext } from "react";

type AuthContextValue =
  | {
      isAuthorized: false;
      user: undefined;
    }
  | {
      isAuthorized: true;
      user: User;
    };

export const AuthContext = createContext<AuthContextValue>({
  isAuthorized: false,
  user: undefined,
});
