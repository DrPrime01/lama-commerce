/* eslint-disable @typescript-eslint/no-explicit-any */
import { wixClientServer } from "@/lib/wixClient";
import DOMPurify from "isomorphic-dompurify";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import Pagination from "./Pagination";

const PRODUCT_PER_PAGE = 8;

async function ProductList({
  categoryId,
  limit,
  searchParams,
}: {
  categoryId: string;
  limit?: number;
  searchParams?: any;
}) {
  const { type, min, max, sort, page } = await searchParams;
  const wixClient = await wixClientServer();
  const productQuery = await wixClient!.products
    .queryProducts()
    // .startsWith("name", name)
    .hasSome("productType", type ? [type] : ["physical", "digital"])
    .gt("priceData.price", min || 0)
    .lt("priceData.price", max || 999999)
    .eq("collectionIds", `${categoryId}`)
    .limit(limit || PRODUCT_PER_PAGE)
    .skip(page ? parseInt(page) * (limit || PRODUCT_PER_PAGE) : 0);
  // .find();

  if (sort) {
    const [sortType, sortBy] = sort.split(" ");

    if (sortType === "asc") {
      productQuery.ascending(sortBy);
    }
    if (sortType === "desc") {
      productQuery.descending(sortBy);
    }
  }

  const res = await productQuery.find();

  return (
    <div className="mt-12 flex gap-x-8 gap-y-16 justify-between flex-wrap">
      {res?.items?.map((product) => (
        <Link
          href={`/${product?.slug}`}
          className="w-full flex flex-col gap-4 sm:w-[45%] lg:w-[22%]"
          key={product._id}
        >
          <div className="relative w-full h-80">
            <Image
              src={product.media?.mainMedia?.image?.url as string}
              alt=""
              fill
              sizes="25vw"
              className="absolute object-cover rounded-md z-10 hover:opacity-0 transition-opacity easy duration-500"
            />

            <Image
              src={
                (product.media?.items?.[1]?.image?.url as string) ||
                "/product.png"
              }
              alt=""
              fill
              sizes="25vw"
              className="absolute object-cover rounded-md"
            />
          </div>
          <div className="flex justify-between">
            <span className="font-medium">{product.name}</span>
            <span className="font-semibold">${product.priceData?.price}</span>
          </div>
          <p
            className="text-sm text-gray-500"
            dangerouslySetInnerHTML={{
              __html: DOMPurify.sanitize(
                product?.additionalInfoSections?.find(
                  (section) => section.title === "shortDesc"
                )?.description || ""
              ),
            }}
          ></p>
          <button className="rounded-2xl w-max ring-1 ring-lama_red text-lama_red py-2 px-4 text-xs hover:bg-lama_red hover:text-white transition ease-in">
            Add to Cart
          </button>
        </Link>
      ))}
      <Pagination
        currentPage={res?.currentPage || 0}
        hasPrev={res?.hasPrev()}
        hasNext={res?.hasNext()}
      />
    </div>
  );
}

export default ProductList;
