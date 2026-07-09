import { BrandFilterContainer } from "@/components/common/BrandFilter/brand-filter-container";
import { Loading } from "@/components/common/Loading/loading";
import { ProductsListPaginatedContainer } from "@/components/common/ProductsListPaginated/products-list-paginated-container";
import { API_ROUTES } from "@/config/api";
import { withParams } from "@/helpers/with-params";
import { getProducts } from "@/services/products/get-products";
import { Metadata } from "next";
import { FC, Suspense } from "react";
import { SWRConfig } from "swr";

export const metadata: Metadata = {
  title: "Купить теннисные ракетки: каталог, цены, отзывы — Tennis Store",
  description:
    "В нашем каталоге представлены профессиональные и любительские теннисные ракетки. Фильтрация по брендам",
};

const pageSize = 6;

type Props = PageProps<"/products/paginated">;

const ProductsPaginatedPage: FC<Props> = async ({ searchParams }) => {
  const sp = await searchParams;
  const pageNumber = typeof sp.page === "string" ? parseInt(sp.page) : 1;
  const params = { ...sp, page: pageNumber, limit: pageSize };
  const result = await getProducts(params);

  return (
    <div className="grid grid-cols-[5fr_14fr_5fr]">
      <aside>
        <Suspense fallback={<Loading />}>
          <BrandFilterContainer />
        </Suspense>
      </aside>
      <div>
        <h1 className="text-3xl font-semibold mb-9">Ракетки</h1>
        <SWRConfig
          value={{
            fallback: {
              [withParams(API_ROUTES.products.list, params)]: result,
            },
            revalidateIfStale: false,
            revalidateOnFocus: false,
          }}
        >
          <ProductsListPaginatedContainer pageSize={pageSize} />
        </SWRConfig>
      </div>
    </div>
  );
};

export default ProductsPaginatedPage;
