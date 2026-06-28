import { FC } from "react";
import { Logo } from "@/components/Logo/logo";
import { Navigation } from "@/components/Navigation/navigation";

export const Header: FC = () => {
  return (
    <div className="py-4 flex items-center relative">
      <div className="grow justify-items-center">
        <Logo />
      </div>
      <div className="absolute right-0">
        <Navigation />
      </div>
    </div>
  );
};
