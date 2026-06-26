import { LinkAll } from "@/components/LinkAll/link-all";
import { ProductsSlider } from "@/components/ProductsSlider/products-slider";
import { rackets } from "@/mocks/rackets";
import { FC } from "react";

const HomePage: FC = () => {
  return (
    <div>
      <h1 className="sr-only">
        Tennis Store — интернет-магазин теннисной экипировки
      </h1>
      <section>
        <div className="flex items-baseline justify-between mb-9">
          <h2>Ракетки</h2>
          <LinkAll productType="racket" />
        </div>
        <ProductsSlider products={rackets.slice(0, 10)} />
      </section>
    </div>
  );
};

export default HomePage;
