import { Link } from "@/components/Link/link";
import { FC } from "react";

const RacketPage: FC<PageProps<"/racket/[id]">> = async ({ params }) => {
  const { id } = await params;

  return (
    <div className="flex justify-center items-center bg-fuchsia-400 flex-col gap-4">
      <h1 className="text-4xl font-bold text-white">Racket #{id} page</h1>
      <Link href="/">Home</Link>
      <Link href="/rackets">Rackets</Link>
    </div>
  );
};

export default RacketPage;
