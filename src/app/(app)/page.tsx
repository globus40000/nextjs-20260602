import { LinkAll } from "@/components/LinkAll/link-all";
import { Loading } from "@/components/Loading/loading";
import { ProductsSliderContainer } from "@/components/ProductsSlider/products-slider-container";
import { FC, Suspense } from "react";

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
        <Suspense fallback={<Loading />}>
          <ProductsSliderContainer />
        </Suspense>
      </section>
      <section className="mt-13">
        <div className="flex items-baseline justify-between mb-9">
          <h2>Топ-10 ракеток</h2>
          <LinkAll productType="racket" />
        </div>
        <Suspense fallback={<Loading />}>
          <ProductsSliderContainer top10 />
        </Suspense>
      </section>
    </div>
  );
};

export default HomePage;
