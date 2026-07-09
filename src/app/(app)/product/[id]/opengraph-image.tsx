import { getProductById } from "@/services/products/get-product-by-id";
import { Product } from "@/types/products";
import { ImageResponse } from "next/og";
import { FC } from "react";

type Props = {
  product: Product;
};

const Img: FC<Props> = ({ product }) => {
  const { name, imageUrl } = product;

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: "20px",
        padding: "20px",
        backgroundColor: "white",
      }}
    >
      <img src={imageUrl} alt={name} width={300} height={300} />
      <div>{name}</div>
    </div>
  );
};

const OGImage = async ({ params }: PageProps<"/product/[id]">) => {
  const { id } = await params;
  const { data: product } = await getProductById(parseInt(id));

  if (!product) {
    return null;
  }

  return new ImageResponse(<Img product={product} />, {
    width: 340,
    height: 380,
  });
};

export default OGImage;
