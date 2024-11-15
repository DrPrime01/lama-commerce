import { wixClientServer } from "@/lib/wixClient";
import Image from "next/image";
import Link from "next/link";
import React from "react";

async function CategoryList() {
  const wixClient = await wixClientServer();
  const { items } = await wixClient!.collections.queryCollections().find();

  return (
    <div className="px-4 overflow-x-scroll scrollbar-hide">
      <div className="flex gap-4 md:gap-8">
        {items.map((cat) => (
          <Link
            href={`/list?category=${cat.slug}`}
            className="shrink-0 w-full sm:w-1/2 lg:w-1/4 xl:w-1/6"
            key={cat._id}
          >
            <div className="relative w-full h-96 bg-slate-100">
              <Image
                src={cat.media?.mainMedia?.image?.url as string}
                fill
                alt=""
                sizes="20vw"
                className="object-cover"
              />
            </div>
            <h1 className="mt-8 font-light text-xl tracking-wide">
              {cat.name}
            </h1>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default CategoryList;
