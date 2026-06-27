import { LinkAll } from "@/components/LinkAll/link-all";
import { ProductsSliderContainer } from "@/components/ProductsSlider/products-slider-container";
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
        <ProductsSliderContainer />
      </section>
    </div>
  );
};

export default HomePage;
