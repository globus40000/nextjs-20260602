import { LogoutButton } from "@/components/common/LogoutButton/logout-button";
import { Metadata } from "next";
import { FC } from "react";

export const metadata: Metadata = {
  title: "Выход – TENNIS STORE",
  robots: {
    index: false,
    follow: false,
  },
};

const LogoutPage: FC = () => {
  return (
    <div>
      <LogoutButton />
    </div>
  );
};

export default LogoutPage;
