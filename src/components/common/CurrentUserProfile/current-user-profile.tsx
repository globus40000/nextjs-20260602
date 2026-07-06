import { LogoutButton } from "@/components/common/LogoutButton/logout-button";
import { DescriptionList } from "@/components/ui/description-list";
import { User } from "@/types/users";
import { FC } from "react";

type Props = {
  user: User;
};

export const CurrentUserProfile: FC<Props> = ({ user }) => {
  const { login, isAdmin } = user;

  return (
    <div className="max-w-md mx-auto">
      <h1 className="text-3xl font-medium mb-6 text-gray-900">Профиль</h1>
      <DescriptionList
        items={[
          { term: "Имя", description: login },
          {
            term: "Роль",
            description: isAdmin ? "Администратор" : "Пользователь",
          },
        ]}
      />
      <div className="mt-8">
        <LogoutButton />
      </div>
    </div>
  );
};
