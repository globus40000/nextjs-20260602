import { ButtonLeft } from "@/components/ui/button-left";
import { ButtonRight } from "@/components/ui/button-right";
import { FC } from "react";

type Props = {
  page: number;
  increment: () => void;
  decrement: () => void;
  isLastPage: boolean;
};

export const Pagination: FC<Props> = ({
  page,
  increment,
  decrement,
  isLastPage,
}) => {
  return (
    <div className="flex items-center gap-4">
      <ButtonLeft
        disabled={page === 1}
        onClick={decrement}
        aria-label="Назад"
      />
      <span>{page}</span>
      <ButtonRight
        disabled={isLastPage}
        onClick={increment}
        aria-label="Вперед"
      />
    </div>
  );
};
