import { rackets } from "@/mocks/rackets";
import Link from "next/link";
import { FC } from "react";

const RacketsPage: FC = () => {
  return (
    <div className="flex h-screen items-center justify-center bg-emerald-400 flex-col gap-4">
      <h1 className="text-4xl font-bold text-white">Rackets page</h1>
      <Link href="/">Home</Link>
      <ul>
        {rackets.map(({ id }) => (
          <li key={id}>
            <Link href={`/racket/${id}`}>Racket #{id}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RacketsPage;
