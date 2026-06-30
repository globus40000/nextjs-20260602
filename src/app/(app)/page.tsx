import { LinkAll } from "@/components/LinkAll/link-all";
import { Loading } from "@/components/Loading/loading";
import { ProductsSliderContainer } from "@/components/ProductsSlider/products-slider-container";
import { getProducts } from "@/services/get-products";
import { getProductsTop10 } from "@/services/get-products-top-10";
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
          <ProductsSliderContainer
            promiseGetProducts={getProducts({ page: 1, limit: 10 })}
          />
        </Suspense>
      </section>
      <section className="mt-13">
        <div className="flex items-baseline justify-between mb-9">
          <h2>Топ-10 ракеток</h2>
          <LinkAll productType="racket" />
        </div>
        <Suspense fallback={<Loading />}>
          <ProductsSliderContainer promiseGetProducts={getProductsTop10()} />
        </Suspense>
      </section>
    </div>
  );
};

export default HomePage;
