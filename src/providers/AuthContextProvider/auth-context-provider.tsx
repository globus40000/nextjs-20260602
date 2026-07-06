import { AuthContext } from "@/providers/AuthContextProvider/auth-context";
import { User } from "@/types/users";
import { FC, PropsWithChildren } from "react";

type Props = {
  user: User | undefined;
};

export const AuthContextProvider: FC<PropsWithChildren<Props>> = ({
  user,
  children,
}) => {
  return (
    <AuthContext
      value={
        user
          ? { isAuthorized: true, user }
          : { isAuthorized: false, user: undefined }
      }
    >
      {children}
    </AuthContext>
  );
};
