import { CurrentUserProfile } from "@/components/common/CurrentUserProfile/current-user-profile";
import { getCurrentUser } from "@/services/auth/get-current-user";
import { redirect } from "next/navigation";
import { FC } from "react";

export const CurrentUserProfileContainer: FC = async () => {
  const { isError, data: user } = await getCurrentUser();

  if (isError) {
    throw new Error("Something went wrong");
  }
  if (!user) {
    redirect("/login");
  }

  return (
    <div>
      <CurrentUserProfile user={user} />
    </div>
  );
};
