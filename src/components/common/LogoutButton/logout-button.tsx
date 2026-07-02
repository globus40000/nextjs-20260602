"use client";

import { SpinnerIcon } from "@/components/icons/spinner-icon";
import { Button } from "@/components/ui/button";
import { FC, useTransition } from "react";
import { requestLogout } from "@/services/auth/request-logout";

const handleLogout = async () => {
  await requestLogout();

  window.location.assign("/");
};

export const LogoutButton: FC = () => {
  const [isPending, startTransition] = useTransition();

  return (
    <Button onClick={() => startTransition(handleLogout)} disabled={isPending}>
      {isPending && <SpinnerIcon className="h-4 w-4" />}
      Logout
    </Button>
  );
};
