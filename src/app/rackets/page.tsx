import Link from "next/link";
import { FC } from "react";

const RacketsPage: FC = () => {
  return (
    <div className="flex h-screen items-center justify-center bg-emerald-400 flex-col gap-4">
      <h1 className="text-4xl font-bold text-white">Rackets page</h1>
      <Link href="/">Home</Link>
      <Link href="/racket/1">Racket #1</Link>
    </div>
  );
};

export default RacketsPage;
