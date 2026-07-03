import { CurrentUserProfileContainer } from "@/components/common/CurrentUserProfile/current-user-profile-container";
import { Metadata } from "next";
import { FC } from "react";

export const metadata: Metadata = {
  title: "Профиль – TENNIS STORE",
  robots: {
    index: false,
    follow: false,
  },
};

const ProfilePage: FC = () => {
  return (
    <div>
      <CurrentUserProfileContainer />
    </div>
  );
};

export default ProfilePage;
