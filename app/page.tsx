import CategoryList from "@/components/CategoryList";
import ProductList from "@/components/ProductList";
import Slider from "@/components/Slider";
// import { wixClientServer } from "@/lib/wixClient";
import { Suspense } from "react";

function page() {
  // const wixClient = await wixClientServer();
  // const { items } = await wixClient!.products.queryProducts().find();

  return (
    <div>
      <Slider />
      <div className="mt-24 px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-64">
        <h1 className="text-2xl">Featured Products</h1>
        <Suspense fallback={<p>Loading...</p>}>
          <ProductList
            categoryId={process.env.FEATURED_PRODUCTS_ID!}
            limit={4}
          />
        </Suspense>
      </div>
      <div className="mt-24">
        <h1 className="text-2xl mb-12 px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-64">
          Categories
        </h1>
        <Suspense fallback={<p>Loading...</p>}>
          <CategoryList />
        </Suspense>
      </div>
      <div className="mt-24 px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-64">
        <h1 className="text-2xl">New Products</h1>
        <Suspense fallback={<p>Loading...</p>}>
          <ProductList
            categoryId={process.env.FEATURED_PRODUCTS_ID!}
            limit={4}
          />
        </Suspense>
      </div>
    </div>
  );
}

export default page;
