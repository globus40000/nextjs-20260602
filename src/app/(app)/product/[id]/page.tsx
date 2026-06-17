import { Link } from "@/components/Link/link";
import { FC } from "react";

const ProductPage: FC<PageProps<"/product/[id]">> = async ({ params }) => {
  const { id } = await params;

  return (
    <div className="flex justify-center items-center bg-fuchsia-400 flex-col gap-4">
      <h1 className="text-4xl font-bold text-white">Product #{id} page</h1>
      <Link href="/">Home</Link>
      <Link href="/products">Products</Link>
    </div>
  );
};

export default ProductPage;
