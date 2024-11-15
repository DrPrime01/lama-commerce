import Add from "@/components/Add";
import CustomizeProduct from "@/components/CustomizeProduct";
import ProductImages from "@/components/ProductImages";
import { wixClientServer } from "@/lib/wixClient";
import DOMPurify from "isomorphic-dompurify";
import { notFound } from "next/navigation";
import React from "react";

async function SinglePage({ params }: { params: { slug: string } }) {
  const wixClient = await wixClientServer();
  const { slug } = await params;
  const { items } = await wixClient!.products
    .queryProducts()
    .eq("slug", slug)
    .find();

  if (!items[0]) {
    return notFound();
  }

  const product = items[0];
  return (
    <div className="px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-64 relative flex flex-col lg:flex-row gap-16">
      <div className="w-full lg:w-1/2 lg:sticky top-20 h-max">
        <ProductImages items={product.media?.items} />
      </div>
      {/* Text */}
      <div className="w-full lg:w-1/2 flex flex-col gap-6">
        <h1 className="text-4xl font-medium">{product.name}</h1>
        <p
          className="text-gray-500"
          dangerouslySetInnerHTML={{
            __html: DOMPurify.sanitize(product.description as string),
          }}
        ></p>
        <div className="h-0.5 bg-gray-100" />
        <div className="flex items-center gap-4">
          {product.priceData?.discountedPrice === product.priceData?.price ? (
            <h2 className="font-medium text-2xl">
              {product.priceData?.currency}
              {product.priceData?.price}
            </h2>
          ) : (
            <>
              <h3 className="text-lg text-gray-500 line-through">
                {product.priceData?.currency}
                {product.priceData?.price}
              </h3>
              <h2 className="font-medium text-2xl">
                {product.priceData?.currency}
                {product.priceData?.discountedPrice}
              </h2>
            </>
          )}
        </div>
        <div className="h-0.5 bg-gray-100" />
        {product.variants && product.productOptions ? (
          <CustomizeProduct
            productId={product._id!}
            variants={product.variants!}
            options={product.productOptions!}
          />
        ) : (
          <Add productId={product._id!} />
        )}
        {product.additionalInfoSections?.map((section) => (
          <div key={section.title} className="text-sm">
            <h4 className="font-medium mb-4">{section.title}</h4>
            <p>{section.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default SinglePage;
