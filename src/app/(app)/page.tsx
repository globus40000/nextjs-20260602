import { Link } from "@/components/Link/link";
import { FC } from "react";

const HomePage: FC = () => {
  return (
    <div className="flex h-screen flex-col items-center justify-center bg-blue-500 gap-4">
      <h1 className="text-4xl font-bold text-white">Home page</h1>
      <Link href="/rackets">Rackets</Link>
    </div>
  );
};

export default HomePage;
