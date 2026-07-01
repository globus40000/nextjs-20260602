"use client";

import { BASE_API_URL } from "@/constants/api";
import { SpinnerIcon } from "@/icons/spinner-icon";
import { Button } from "@/ui/button";
import { FC, useTransition } from "react";

const handleLogout = async () => {
  await fetch(`${BASE_API_URL}/auth/logout`, {
    method: "DELETE",
    credentials: "include",
  });

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
