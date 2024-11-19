import Filter from "@/components/Filter";
import ProductList from "@/components/ProductList";
import { wixClientServer } from "@/lib/wixClient";
import Image from "next/image";
import { Suspense } from "react";

type SearchParams = {
  category: string;
  type?: string;
  min?: number;
  max?: number;
  sort?: string;
  page?: number;
};

async function page({ searchParams }: { searchParams: SearchParams }) {
  const wixClient = await wixClientServer();
  const { category } = await searchParams;
  const res = await wixClient!.collections.getCollectionBySlug(
    category || "all-products"
  );
  return (
    <div className="px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-64 relative">
      {/* Campaign */}
      <div className="bg-pink-50 px-4 hidden sm:flex justify-between h-64">
        <div className="w-2/3 flex flex-col items-center justify-center gap-8">
          <h1 className="text-4xl font-semibold leading-[48px] text-gray-700">
            Grab up to 50% off on
            <br /> Selected Products
          </h1>
          <button className="rounded-3xl w-max bg-lama_red text-white text-sm py-3 px-5">
            Buy Now
          </button>
        </div>
        <div className="relative w-1/3">
          <Image src="/woman.png" alt="woman" fill className="object-contain" />
        </div>
      </div>
      {/* Filter */}
      <Filter />
      {/* Products */}
      <h1 className="mt-12 text-xl font-semibold capitalize">
        {res.collection ? res.collection.name : "All Products"} for you!
      </h1>
      <Suspense fallback={<p>Loading</p>}>
        <ProductList
          categoryId={
            (res?.collection?._id as string) ||
            "00000000-000000-000000-000000000001"
          }
          allSearchParams={searchParams}
        />
      </Suspense>
    </div>
  );
}

export default page;
